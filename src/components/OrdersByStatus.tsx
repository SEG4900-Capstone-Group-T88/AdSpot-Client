import {graphql} from '../gql'
import {useQuery} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'
import {UserContext} from './UserContext'
import {useContext, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const GetOrdersByStatusDocument = graphql(`
    query GetOrdersByStatus(
        $userId: Int!
        $status: OrderStatusEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
    ) {
        ordersByStatus(
            userId: $userId
            status: $status
            first: $first
            after: $after
            last: $last
            before: $before
            order: [{orderDate: ASC}]
        ) {
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

    const [pagingVariables, setPagingVariables] = useState<{
        first: number | null
        after: string | null
        last: number | null
        before: string | null
    }>({
        first: 5,
        after: null,
        last: null,
        before: null,
    })

    const [{data}] = useQuery({
        query: GetOrdersByStatusDocument,
        variables: {
            userId: userContext.user?.userId ?? 0,
            status: props.status,
            first: pagingVariables.first,
            after: pagingVariables.after,
            last: pagingVariables.last,
            before: pagingVariables.before,
        },
    })
    console.log(data?.ordersByStatus?.pageInfo)

    return (
        <div>
            {data?.ordersByStatus?.edges?.map((edge) => (
                <OrderSummary
                    key={edge.cursor}
                    order={edge.node}
                />
            ))}
            <div className="flex justify-between text-center">
                <button
                    disabled={!data?.ordersByStatus?.pageInfo.hasPreviousPage}
                    onClick={() => {
                        setPagingVariables({
                            first: null,
                            after: null,
                            last: 5,
                            before: data?.ordersByStatus?.pageInfo.startCursor ?? null,
                        })
                    }}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="xl"
                    />
                </button>
                <button
                    disabled={!data?.ordersByStatus?.pageInfo.hasNextPage}
                    onClick={() => {
                        setPagingVariables({
                            first: 5,
                            after: data?.ordersByStatus?.pageInfo.endCursor ?? null,
                            last: null,
                            before: null,
                        })
                    }}
                >
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        size="xl"
                    />
                </button>
            </div>
        </div>
    )
}

export default RequestsByStatus
