import {graphql} from '../gql'
import {useQuery} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'
import {UserContext} from './UserContext'
import {useContext} from 'react'

export const GetOrdersByStatusDocument = graphql(`
    query GetOrdersByStatus($userId: Int!, $status: OrderStatusEnum!) {
        ordersByStatus(userId: $userId, status: $status) {
            totalCount
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
            edges {
                cursor
                node {
                    ...OrderSummary
                }
            }
        }
    }
`)

function RequestsByStatus(props: {status: OrderStatusEnum}) {
    const userContext = useContext(UserContext)
    console.log(userContext.user)

    const [{data}] = useQuery({
        query: GetOrdersByStatusDocument,
        variables: {
            userId: userContext.user?.userId ?? 0,
            status: props.status,
        },
    })

    return (
        <div>
            {data?.ordersByStatus?.edges?.map((edge) => (
                <OrderSummary
                    key={edge.cursor}
                    order={edge.node}
                />
            ))}
        </div>
    )
}

export default RequestsByStatus
