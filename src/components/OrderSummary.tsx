import {FragmentType, useFragment} from '../gql/fragment-masking'
import {graphql} from '../gql'
import Profile from '../images/profile.png'

export const OrderSummaryFragment = graphql(`
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

function OrderSummary(props: {order: FragmentType<typeof OrderSummaryFragment>}) {
  const order = useFragment(OrderSummaryFragment, props.order)
  return (
    <div>
      <div className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3">
        <h3>
          {order.listing.listingType.platform.name} {order.listing.listingType.name}
          <span className="text-[#777777] font-medium text-[20px]">- {order.orderDate}</span>
        </h3>
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
          <p className="text-[20px]">{order.orderStatusId}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
