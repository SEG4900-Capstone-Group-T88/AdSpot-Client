import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Profile from '../images/profile.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSackDollar, faStar} from '@fortawesome/free-solid-svg-icons'
// import ActiveListings from '../components/ActiveListings'
import RecentPurchases from '../components/RecentPurchases'
import {graphql} from '../gql'
import {useQuery} from 'urql'
import OrderSummary from '../components/OrderSummary'

const testQuery = graphql(`
  query TestQuery($orderId: Int!) {
    orderById(orderId: $orderId) {
      ...OrderSummary
    }
  }
`)

function Dashboard() {
  const [{data}] = useQuery({
    query: testQuery,
    variables: {
      orderId: 5,
    },
  })

  return (
    <div>
      <Navbar />
      {data?.orderById && <OrderSummary order={data.orderById} />}
      <div className="flex gap-16 items-center my-16">
        <img
          src={Profile}
          className="h-30 w-30"
        />
        <div>
          <h2>Hello John,</h2>
          <h4>Welcome back to AdSpot!</h4>
          <div className="flex gap-16 text-purple text-[25px]">
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faStar}
                size="lg"
              />
              <p>You've sold 1 promo</p>
            </div>
            <div className="flex gap-2">
              <FontAwesomeIcon
                icon={faSackDollar}
                size="lg"
              />
              <p>You've made $10</p>
            </div>
          </div>
        </div>
      </div>
      {/* <ActiveListings /> */}
      <RecentPurchases />
      <Footer />
    </div>
  )
}

export default Dashboard
