import {useMutation, useQuery, useSubscription} from 'urql'
import {Card, Input, Checkbox, Typography, Select, Option} from '@material-tailwind/react'
import {graphql} from '../gql'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from './UserContext'
import {OnAccountConnectedSubscription} from '../pages/ConnectedAccounts'

export const GetUserConnections = graphql(`
    query GetUserConnections($input: Int!) {
        userById(userId: $input) {
            connections {
                platformId
                handle
            }
        }
    }
`)

export const GetListingTypes = graphql(`
    query GetListingTypes {
        platforms {
            platformId
            name
            listingTypes {
                name
                listingTypeId
            }
        }
    }
`)

export const CreateListingMutation = graphql(`
    mutation AddListing($input: AddListingInput!) {
        addListing(input: $input) {
            listing {
                listingId
                listingType {
                    listingTypeId
                    name
                    platform {
                        platformId
                        name
                    }
                }
            }
        }
    }
`)

type Listing = {
    platformId: number
    listingTypeId: number
    name: string
}

function CreateListing() {
    const {user} = useContext(UserContext)

    const [, addListing] = useMutation(CreateListingMutation)

    const [{data: userConnections}, refreshUserConnections] = useQuery({
        query: GetUserConnections,
        variables: {input: user?.userId ?? -1},
    })

    const connectedAccountsPlatformId: number[] = []
    userConnections?.userById?.connections.forEach((element) => {
        connectedAccountsPlatformId.push(element.platformId)
    })

    const [listingTypes] = useQuery({
        query: GetListingTypes,
    })

    const listings: Listing[] = []

    listingTypes.data?.platforms.forEach((element) => {
        const platformName = element.name
        const platformId = element.platformId
        element.listingTypes.forEach((element) => {
            const listingTypeId = element.listingTypeId
            const listingName = platformName + ' ' + element.name
            if (connectedAccountsPlatformId.includes(platformId)) {
                listings.push({
                    platformId: platformId,
                    listingTypeId: listingTypeId,
                    name: listingName,
                } as Listing)
            }
        })
    })

    const [subscriptionResult] = useSubscription({
        query: OnAccountConnectedSubscription,
        variables: {userId: user?.userId ?? -1},
        pause: !user,
    })
    useEffect(() => {
        if (subscriptionResult.data?.onAccountConnected) {
            refreshUserConnections({requestPolicy: 'network-only'})
        }
    }, [subscriptionResult, refreshUserConnections])

    const createListing = (event: React.FormEvent) => {
        event.preventDefault()
        const listingElement = document.getElementById('listingSelection') as HTMLSelectElement
        const listingSelection = listingElement.firstElementChild?.getAttribute('value')
        const listingArray = listingSelection?.split(',') ?? ['0', '0']

        const listingTypeId = Number(listingArray[0])

        const data = new FormData(event.target as HTMLFormElement)
        const price = Number(data.get('price'))

        const userId = user?.userId ?? -1

        addListing({
            input: {
                userId,
                listingTypeId,
                price,
            },
        }).then((result) => {
            if (result.error) {
                console.log('ERROR WITH LISTING CREATION!')
            } else {
                closeModal()
            }
        })
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            {user && (
                <button
                    className="bg-purple text-[white] rounded-lg px-6 py-1 m-1"
                    onClick={() => openModal()}
                >
                    Post +
                </button>
            )}
            {isModalOpen && (
                <div className="modal-bg !m-0">
                    <div className="modal-content relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-lg font-semibold hover:text-red-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-semibold">Create listing</h2>
                        <Card
                            color="transparent"
                            placeholder=""
                        >
                            <form
                                className="mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4"
                                onSubmit={createListing}
                            >
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Listing Type
                                </Typography>
                                <Select
                                    placeholder=""
                                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex items-center"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    name="listingSelection"
                                    id="listingSelection"
                                >
                                    {listings.map((listing) => (
                                        <Option
                                            key={listing.name}
                                            value={
                                                listing.listingTypeId.toString() +
                                                ',' +
                                                listing.platformId.toString()
                                            }
                                        >
                                            {listing.name}
                                        </Option>
                                    ))}
                                </Select>
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Price
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="$"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="price"
                                />
                                <Checkbox
                                    label={
                                        <Typography
                                            variant="small"
                                            color="gray"
                                            className="flex items-center font-normal"
                                            placeholder=""
                                        >
                                            I agree to the
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-gray-900"
                                            >
                                                &nbsp;Terms and Conditions
                                            </a>
                                        </Typography>
                                    }
                                    containerProps={{className: '-ml-2.5'}}
                                    placeholder=""
                                    crossOrigin={undefined}
                                />
                                <button
                                    className="bg-purple text-white rounded-lg px-4 py-2 mt-2 shadow-lg"
                                    type="submit"
                                >
                                    Post
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}

export default CreateListing
