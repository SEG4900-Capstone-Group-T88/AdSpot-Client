import {graphql} from '../gql'
import {useQuery} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'

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
    const [{data}] = useQuery({
        query: GetOrdersByStatusDocument,
        variables: {
            userId: 1,
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
