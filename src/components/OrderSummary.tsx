import {FragmentType, useFragment} from '../gql/fragment-masking'
import {graphql} from '../gql'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmarkCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {OrderStatusEnum, OrderSummaryFragment} from '../gql/graphql'
import {OrderContextEnum} from '../OrderContextEnum'

export const OrderSummaryFragmentDocument = graphql(`
    fragment OrderSummary on Order {
        orderId
        orderDate
        orderStatusId
        description
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
    orderContext: OrderContextEnum
}) {
    const order = useFragment(OrderSummaryFragmentDocument, props.order)
    const orderDate = new Date(order.orderDate)

    return (
        <div>
            <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
                <span>#{order.orderId}</span>
                <div className="flex items-center gap-4">
                    <h3>
                        {order.listing.listingType.platform.name} {order.listing.listingType.name}
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
                                {props.orderContext === OrderContextEnum.Order
                                    ? order.listing.user.firstName
                                    : order.user.firstName}{' '}
                                {props.orderContext === OrderContextEnum.Order
                                    ? order.listing.user.lastName
                                    : order.user.lastName}{' '}
                                - 1 {order.listing.listingType.name} for ${order.listing.price}
                            </h4>
                            <p className="text-purple text-[20px]">
                                {props.orderContext === OrderContextEnum.Order
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
                            props.orderContext === OrderContextEnum.Request && (
                                <div className="flex flex-col justify-between">
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faCheckCircle}
                                            size="xl"
                                            color="green"
                                        />
                                    </button>
                                    <button>
                                        <FontAwesomeIcon
                                            icon={faXmarkCircle}
                                            size="xl"
                                            color="red"
                                        />
                                    </button>
                                </div>
                            )}
                        {order.orderStatusId === OrderStatusEnum.Accepted &&
                            props.orderContext === OrderContextEnum.Request && (
                                <button className="underline">Submit Deliverable</button>
                            )}
                        {order.orderStatusId === OrderStatusEnum.Completed && (
                            <button className="underline">View Deliverable</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
