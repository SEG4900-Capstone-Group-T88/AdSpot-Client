import {FragmentType, useFragment} from '../gql/fragment-masking'
import {graphql} from '../gql'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmarkCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {OrderStatusEnum, OrderSummaryFragment} from '../gql/graphql'

export const OrderSummaryFragmentDocument = graphql(`
  fragment OrderSummary on Order {
    orderId
    orderDate
    orderStatusId
    listing {
      price
      user {
        userId
        email
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
      return 'bg-orange-500'
    case OrderStatusEnum.Rejected:
      return 'bg-red-500'
    case OrderStatusEnum.Accepted:
      return 'bg-yellow-500'
    case OrderStatusEnum.Completed:
      return 'bg-green-500'
    default:
      return ''
  }
}

function isActionable(order: OrderSummaryFragment) {
  return order.orderStatusId === OrderStatusEnum.Pending
}

function OrderSummary(props: {order: FragmentType<typeof OrderSummaryFragmentDocument>}) {
  const order = useFragment(OrderSummaryFragmentDocument, props.order)
  const orderDate = new Date(order.orderDate)

  return (
    <div>
      <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
        <div className="flex items-center gap-4">
          <h3>
            {order.listing.listingType.platform.name} {order.listing.listingType.name}
          </h3>
          <span className="text-[#777777] font-medium text-[20px]">
            {orderDate.toLocaleString()}
          </span>
        </div>
        <div className="flex gap-36">
          <div className="flex gap-4 items-center">
            <img
              src={Profile}
              className="h-12 w-12"
            />
            <div>
              <h4>
                Joe Smith - 1 {order.listing.listingType.name} for ${order.listing.price}
              </h4>
              <p className="text-purple text-[20px]">@{order.listing.connection.handle}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className={`rounded p-4 ${getOrderStatusBgColor(order)} text-white`}>
              {order.orderStatusId}
            </span>
            {isActionable(order) && (
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
