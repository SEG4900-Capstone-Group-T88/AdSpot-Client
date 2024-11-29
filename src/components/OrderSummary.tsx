import {FragmentType, useFragment} from '../gql/fragment-masking'
import {graphql} from '../gql'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmarkCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {OrderPov, OrderStatusEnum, OrderSummaryFragment} from '../gql/graphql'
import {useContext, useState} from 'react'
import {UserContext} from './UserContext'
import {useMutation} from 'urql'
import {Card, Input, Typography} from '@material-tailwind/react'

export const OrderSummaryFragmentDocument = graphql(`
    fragment OrderSummary on Order {
        orderId
        orderDate
        orderStatusId
        description
        deliverable
        user {
            userId
            firstName
            lastName
            email
        }
        listing {
            price
            user {
                userId
                firstName
                lastName
            }
            listingType {
                name
                platform {
                    name
                }
            }
            connection {
                handle
            }
        }
    }
`)

export const AcceptOrderDocument = graphql(`
    mutation AcceptOrder($input: AcceptOrderInput!) {
        acceptOrder(input: $input) {
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

export const RejectOrderDocument = graphql(`
    mutation RejectOrder($input: RejectOrderInput!) {
        rejectOrder(input: $input) {
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

export const SubmitDeliverableDocument = graphql(`
    mutation SubmitDeliverable($input: SubmitDeliverableInput!) {
        submitDeliverable(input: $input) {
            order {
                orderId
                deliverable
            }
            errors {
                ... on Error {
                    __typename
                    message
                }
            }
        }
    }
`)

function getOrderStatusBgColor(order: OrderSummaryFragment) {
    if (order == undefined) {
        return ''
    }
    switch (order!.orderStatusId) {
        case OrderStatusEnum.Pending:
            return 'bg-orange-500 text-[white]'
        case OrderStatusEnum.Rejected:
            return 'bg-red-500 text-[white]'
        case OrderStatusEnum.Accepted:
            return 'bg-yellow-500 text-[black]'
        case OrderStatusEnum.Completed:
            return 'bg-green-500 text-[white]'
        default:
            return ''
    }
}

function OrderSummary(props: {
    order: FragmentType<typeof OrderSummaryFragmentDocument>
    pov: OrderPov
    onAction: () => void
}) {
    const {user} = useContext(UserContext)

    const order = useFragment(OrderSummaryFragmentDocument, props.order)
    const orderDate = new Date(order.orderDate)

    const [, acceptOrder] = useMutation(AcceptOrderDocument)
    const [, rejectOrder] = useMutation(RejectOrderDocument)
    const [, submitDeliverable] = useMutation(SubmitDeliverableDocument)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <div>
                <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
                    <span>#{order.orderId}</span>
                    <div className="flex items-center gap-4">
                        <h3>
                            {order.listing.listingType.platform.name}{' '}
                            {order.listing.listingType.name}
                        </h3>
                        <span className="text-[#777777] font-medium text-[20px]">
                            {orderDate.toLocaleString()}
                        </span>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="flex gap-4 items-center col-span-2">
                            <img
                                src={Profile}
                                className="h-12 w-12"
                            />
                            <div>
                                <h4>
                                    {props.pov === OrderPov.Buyer
                                        ? order.listing.user.firstName
                                        : order.user.firstName}{' '}
                                    {props.pov === OrderPov.Buyer
                                        ? order.listing.user.lastName
                                        : order.user.lastName}{' '}
                                    - 1 {order.listing.listingType.name} for ${order.listing.price}
                                </h4>
                                <p className="text-purple text-[20px]">
                                    {props.pov === OrderPov.Buyer
                                        ? `@${order.listing.connection.handle}`
                                        : order.user.email}
                                </p>
                            </div>
                        </div>
                        <p className="col-span-2 truncate">{order.description}</p>
                        <div className="flex gap-4 justify-self-end h-fit">
                            <span className={`rounded p-4 ${getOrderStatusBgColor(order)}`}>
                                {order.orderStatusId}
                            </span>
                            {order.orderStatusId === OrderStatusEnum.Pending &&
                                props.pov === OrderPov.Seller && (
                                    <div className="flex flex-col justify-between">
                                        <button
                                            onClick={() => {
                                                if (user) {
                                                    acceptOrder({
                                                        input: {
                                                            userId: user.userId,
                                                            orderId: order.orderId,
                                                        },
                                                    })
                                                    props.onAction()
                                                }
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                size="xl"
                                                color="green"
                                            />
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (user) {
                                                    rejectOrder({
                                                        input: {
                                                            userId: user.userId,
                                                            orderId: order.orderId,
                                                        },
                                                    })
                                                    props.onAction()
                                                }
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faXmarkCircle}
                                                size="xl"
                                                color="red"
                                            />
                                        </button>
                                    </div>
                                )}
                            {order.orderStatusId === OrderStatusEnum.Accepted &&
                                props.pov === OrderPov.Seller && (
                                    <button
                                        className="underline"
                                        onClick={openModal}
                                    >
                                        Submit Deliverable
                                    </button>
                                )}
                            {order.orderStatusId === OrderStatusEnum.Completed && (
                                <a
                                    href={order.deliverable ?? ''}
                                    className="underline"
                                    target="_blank"
                                >
                                    View Deliverable
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-bg !m-0">
                    <div className="modal-content relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-lg font-semibold hover:text-red-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-3xl font-semibold">Submit Deliverable</h2>
                        <Card
                            color="transparent"
                            placeholder=""
                        >
                            <form
                                className="mb-2 w-80 max-w-screen-lg sm:w-96 flex flex-col gap-4"
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    console.log(event.currentTarget.deliverable.value)
                                    if (user) {
                                        submitDeliverable({
                                            input: {
                                                orderId: order.orderId,
                                                deliverable: event.currentTarget.deliverable.value,
                                            },
                                        }).then((result) => {
                                            if (result.error) {
                                                console.log('ERROR WITH LISTING CREATION!')
                                            } else {
                                                closeModal()
                                                props.onAction()
                                            }
                                        })
                                    }
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color="blue-gray"
                                    className="-mb-3"
                                    placeholder=""
                                >
                                    Link to Deliverable
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder=""
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: 'before:content-none after:content-none',
                                    }}
                                    crossOrigin={undefined}
                                    name="deliverable"
                                />
                                <button
                                    className="bg-purple text-white rounded-lg px-4 py-2 mt-2 shadow-lg"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}

export default OrderSummary
