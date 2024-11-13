import {useContext, useEffect, useState} from 'react'
import {UserContext} from './UserContext'
import {useMutation, useQuery} from 'urql'
import {graphql} from '../gql'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlus, faFloppyDisk, faPenToSquare, faXmark} from '@fortawesome/free-solid-svg-icons'

export const GetFlairsQuery = graphql(`
    query GetFlairs($userId: Int!) {
        flairs(userId: $userId) {
            userId
            flairTitle
        }
    }
`)

export const AddFlairMutation = graphql(`
    mutation AddFlair($input: AddFlairInput!) {
        addFlair(input: $input) {
            flair {
                userId
                flairTitle
            }
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

export const DeleteFlairMutation = graphql(`
    mutation DeleteFlair($input: DeleteFlairInput!) {
        deleteFlair(input: $input) {
            flair {
                userId
                flairTitle
            }
        }
    }
`)

export interface FlairObject {
    __typename?: string | undefined
    userId: number
    flairTitle: string
}

function UserFlairs() {
    const {user} = useContext(UserContext)

    const [{data}] = useQuery({
        query: GetFlairsQuery,
        variables: {userId: user?.userId ?? -1},
        pause: !user,
    })

    const [flairs, setFlairs] = useState<FlairObject[]>([])

    const [showPopup, setShowPopup] = useState(false)
    const [editable, setEditable] = useState(false)
    const [, addFlairMutation] = useMutation(AddFlairMutation)
    const [, deleteFlairMutation] = useMutation(DeleteFlairMutation)

    useEffect(() => {
        setFlairs(data?.flairs ?? new Array<FlairObject>())
    }, [data])

    function addFlair(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const flairTitle = event.currentTarget.flair.value
        addFlairMutation({
            input: {
                userId: user?.userId ?? -1,
                flairTitle: flairTitle,
            },
        }).then((result) => {
            setFlairs(result.data?.addFlair.flair ?? new Array<FlairObject>())
        })
        setShowPopup(false)
    }

    function deleteFlair(flair: FlairObject) {
        deleteFlairMutation({
            input: {
                userId: user?.userId ?? -1,
                flairTitle: flair.flairTitle,
            },
        }).then((result) => {
            setFlairs(result.data?.deleteFlair.flair ?? new Array<FlairObject>())
        })
    }

    return (
        <>
            <h3>
                My Flairs{' '}
                {!editable && (
                    <FontAwesomeIcon
                        className="ml-2"
                        icon={faPenToSquare}
                        onClick={() => setEditable(true)}
                        title="Edit"
                    />
                )}{' '}
                {editable && (
                    <FontAwesomeIcon
                        className="ml-2"
                        icon={faFloppyDisk}
                        onClick={() => setEditable(false)}
                        title="Save"
                    />
                )}
            </h3>
            {user && (
                <div className="flex flex-wrap gap-4 mt-4 mb-8">
                    <>
                        {flairs.map((flair) => (
                            <div className="flex flex-col bg-purple text-white rounded p-2 cursor-pointer outline">
                                <span>
                                    {flair.flairTitle}
                                    {editable && (
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            className="ml-2"
                                            onClick={() => deleteFlair(flair)}
                                        />
                                    )}
                                </span>
                            </div>
                        ))}
                    </>
                    {editable && flairs.length < 6 && (
                        <div
                            className="flex flex-col bg-white text-purple rounded p-2 cursor-pointer outline"
                            onClick={() => setShowPopup(true)}
                        >
                            <span>
                                Add Flair
                                <FontAwesomeIcon
                                    icon={faCirclePlus}
                                    className="ml-2"
                                />
                            </span>
                        </div>
                    )}
                </div>
            )}
            {showPopup && (
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
                            onSubmit={addFlair}
                        >
                            <div className="flex flex-col">
                                <label
                                    htmlFor="flairHeader"
                                    className="text-black mb-2"
                                >
                                    Flair
                                </label>
                                <input
                                    id="flair"
                                    name="flair"
                                    className="border rounded text-black p-4"
                                    autoFocus={true}
                                    placeholder="Enter a your flair here."
                                    maxLength={10}
                                ></input>
                            </div>
                            <button
                                className="bg-purple text-white rounded-lg px-4 py-2 mt-4 shadow-lg"
                                type="submit"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserFlairs
