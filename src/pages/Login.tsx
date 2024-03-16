import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXTwitter, faGoogle, faMeta} from '@fortawesome/free-brands-svg-icons'
import OrderSummary from '../components/OrderSummary'
import {graphql} from '../gql'
import {useQuery} from 'urql'

const testQuery = graphql(`
  query TestQuery($orderId: Int!) {
    orderById(orderId: $orderId) {
      ...OrderSummary
    }
  }
`)

function Login() {
  const [{data}] = useQuery({
    query: testQuery,
    variables: {
      orderId: 5,
    },
  })
  console.log(typeof data?.orderById)
  console.log(data?.orderById)

  return (
    <>
      {data?.orderById && <OrderSummary order={data.orderById} />}
      <div className="xl:grid xl:grid-cols-2 xl:items-center gap-[200px] text-center text-[black] text-[25px] font-semibold">
        <div>
          <h1 className="brand">AdSpot</h1>
          <p className="text-bold text-[40px] mt-[-20px] mb-[30px] xl:mb-0">Catchy catch phrase</p>
        </div>
        <div className="w-[450px] m-auto xl:m-0">
          <h1 className="font-bold text-[40px]">Create an account</h1>
          <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
            Sign up as John Doe <FontAwesomeIcon icon={faGoogle} />
          </button>
          <br />
          <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
            <FontAwesomeIcon icon={faXTwitter} /> Sign up with X
          </button>
          <br />
          <button className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3 w-[450px]">
            <FontAwesomeIcon icon={faMeta} /> Sign up with Meta
          </button>
          <p className="mb-3 mt-8">Already have an account?</p>
          <button className="bg-purple text-[white] rounded-lg px-6 py-2 w-[450px]">Sign in</button>
        </div>
      </div>
    </>
  )
}

export default Login
