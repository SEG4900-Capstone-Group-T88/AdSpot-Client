import {useContext, useState} from 'react'
import {FragmentType, graphql, useFragment} from '../gql'
import {UserContext} from './UserContext'
import {useMutation} from 'urql'
import {Input, Typography} from '@material-tailwind/react'

export const ListingSummaryFragmentDocument = graphql(`
    fragment ListingSummary on Listing {
        listingId
        listingType {
            platform {
                platformId
                name
            }
            name
        }
        price
    }
`)

export const OrderListingDocument = graphql(`
    mutation OrderListing($input: OrderListingInput!) {
        orderListing(input: $input) {
            order {
                orderId
            }
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

export const UpdateListingPriceMutation = graphql(`
    mutation UpdateListingPrice($input: UpdateListingPriceInput!) {
        updateListingPrice(input: $input) {
            listing {
                listingId
            }
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

function Listing(props: {
    listing: FragmentType<typeof ListingSummaryFragmentDocument>
    buyable: boolean
}) {
    const listing = useFragment(ListingSummaryFragmentDocument, props.listing)
    const {user} = useContext(UserContext)
    const [, orderListing] = useMutation(OrderListingDocument)
    const [showPopup, setShowPopup] = useState(false)

    const [, updateListingPrice] = useMutation(UpdateListingPriceMutation)

    function buyListing(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (user) {
            const description = event.currentTarget.description.value
            orderListing({
                input: {
                    userId: user?.userId,
                    listingId: listing.listingId,
                    price: listing.price,
                    description: description,
                },
            }).then((result) => {
                console.log(result.data?.orderListing.order)
                console.log(result.data?.orderListing.errors)
            })
        } else {
            alert('You must be logged in to buy a listing.')
        }
        setShowPopup(false)
    }

    function updatePrice(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const newPrice = Number(event.currentTarget.price.value)
        if (user) {
            updateListingPrice({
                input: {
                    listingId: listing.listingId,
                    userId: user?.userId,
                    price: newPrice,
                },
            }).then((result) => {
                const listing = result.data?.updateListingPrice.listing
                if (listing) {
                    setShowPopup(false)
                } else {
                    const errors = result.data?.updateListingPrice.errors ?? []
                    alert(errors.map((error) => error.message).join('\n'))
                }
            })
        }
    }

    return (
        <>
            <div
                key={listing.listingId}
                className="flex flex-col bg-purple text-white rounded p-2 cursor-pointer"
                onClick={() => setShowPopup(true)}
            >
                <span>
                    {listing.listingType.platform.name} {listing.listingType.name}
                </span>
                <span>${listing.price}</span>
            </div>
            {showPopup && props.buyable && (
                <div className="modal-bg">
                    <div className="modal-content relative w-1/2">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-3xl font-semibold hover:text-red-700"
                            onClick={() => setShowPopup(false)}
                        >
                            &times;
                        </button>
                        <form
                            className="mt-8"
                            onSubmit={buyListing}
                        >
                            <div className="flex flex-col">
                                <label
                                    htmlFor="description"
                                    className="text-black mb-2"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded text-black p-4"
                                    autoFocus={true}
                                    placeholder="Enter a description of your order here."
                                    rows={8}
                                    maxLength={500}
                                ></textarea>
                            </div>
                            <button
                                className="bg-purple text-white rounded-lg px-4 py-2 mt-4 shadow-lg"
                                type="submit"
                            >
                                Buy
                            </button>
                        </form>
                    </div>
                </div>
            )}
            {showPopup && !props.buyable && (
                <div className="modal-bg">
                    <div className="modal-content relative w-1/5">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-3xl font-semibold hover:text-red-700"
                            onClick={() => setShowPopup(false)}
                        >
                            &times;
                        </button>
                        <form
                            className="mt-8"
                            onSubmit={updatePrice}
                        >
                            <div className="flex flex-col gap-4">
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
                            </div>
                            <button
                                className="bg-purple text-white rounded-lg px-4 py-2 mt-4 shadow-lg"
                                type="submit"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default Listing
