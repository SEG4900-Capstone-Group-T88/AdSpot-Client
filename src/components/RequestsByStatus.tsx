import {graphql} from '../gql'
import {useQuery} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'
import {UserContext} from './UserContext'
import {useContext} from 'react'

export const GetRequestsByStatusDocument = graphql(`
    query GetRequestsByStatus($userId: Int!, $status: OrderStatusEnum!) {
        requestsByStatus(userId: $userId, status: $status) {
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

    const [{data}] = useQuery({
        query: GetRequestsByStatusDocument,
        variables: {
            userId: userContext.user?.userId ?? 0,
            status: props.status,
        },
    })

    return (
        <div>
            {data?.requestsByStatus?.edges?.map((edge) => (
                <OrderSummary
                    key={edge.cursor}
                    order={edge.node}
                />
            ))}
        </div>
    )
}

export default RequestsByStatus
