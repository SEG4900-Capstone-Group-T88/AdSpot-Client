import {useQuery} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'
import {UserContext} from './UserContext'
import {useContext, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {graphql} from '../gql'

export const GetRequestsByStatusDocument = graphql(`
    query GetRequestsByStatus(
        $userId: Int!
        $status: OrderStatusEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
    ) {
        requestsByStatus(
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
        query: GetRequestsByStatusDocument,
        variables: {
            userId: userContext.user?.userId ?? 0,
            status: props.status,
            first: pagingVariables.first,
            after: pagingVariables.after,
            last: pagingVariables.last,
            before: pagingVariables.before,
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
            <div className="flex justify-between text-center">
                <button
                    disabled={!data?.requestsByStatus?.pageInfo.hasPreviousPage}
                    onClick={() => {
                        setPagingVariables({
                            first: null,
                            after: null,
                            last: 5,
                            before: data?.requestsByStatus?.pageInfo.startCursor ?? null,
                        })
                    }}
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        size="xl"
                    />
                </button>
                <button
                    disabled={!data?.requestsByStatus?.pageInfo.hasNextPage}
                    onClick={() => {
                        setPagingVariables({
                            first: 5,
                            after: data?.requestsByStatus?.pageInfo.endCursor ?? null,
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
