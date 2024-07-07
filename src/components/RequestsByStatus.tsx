import {useQuery, useSubscription} from 'urql'
import {OrderStatusEnum} from '../gql/graphql'
import OrderSummary from './OrderSummary'
import {UserContext} from './UserContext'
import {useContext, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {graphql} from '../gql'
import {OrderContextEnum} from '../OrderContextEnum'

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

export const OnNewOrderSubscription = graphql(`
    subscription OnNewOrder($userId: Int!) {
        onNewOrder(userId: $userId) {
            orderId
            userId
            listingId
        }
    }
`)

function RequestsByStatus(props: {status: OrderStatusEnum}) {
    const {user} = useContext(UserContext)

    const pageSize = 5
    const [pagingVariables, setPagingVariables] = useState<{
        first: number | null
        after: string | null
        last: number | null
        before: string | null
    }>({
        first: pageSize,
        after: null,
        last: null,
        before: null,
    })

    const [{data}, reexecuteQuery] = useQuery({
        query: GetRequestsByStatusDocument,
        variables: {
            userId: user?.userId ?? 0,
            status: props.status,
            first: pagingVariables.first,
            after: pagingVariables.after,
            last: pagingVariables.last,
            before: pagingVariables.before,
        },
        requestPolicy: 'network-only',
    })

    const [subscriptionResult] = useSubscription({
        query: OnNewOrderSubscription,
        variables: {userId: user?.userId ?? -1},
        // only subscribe on pending tab
        pause: props.status !== OrderStatusEnum.Pending,
    })
    useEffect(() => {
        if (subscriptionResult.data?.onNewOrder) {
            const change = subscriptionResult.data.onNewOrder
            console.log(change)
            reexecuteQuery({requestPolicy: 'network-only'})
        }
    }, [subscriptionResult, reexecuteQuery])

    return (
        <div>
            {data?.requestsByStatus?.edges?.map((edge) => (
                <OrderSummary
                    key={edge.cursor}
                    order={edge.node}
                    orderContext={OrderContextEnum.Request}
                />
            ))}
            <div className="flex justify-between text-center">
                <div className="flex gap-2">
                    <button
                        disabled={!data?.requestsByStatus?.pageInfo.hasPreviousPage}
                        onClick={() => {
                            setPagingVariables({
                                first: pageSize,
                                after: null,
                                last: null,
                                before: null,
                            })
                        }}
                    >
                        <span>First</span>
                    </button>
                    <button
                        disabled={!data?.requestsByStatus?.pageInfo.hasPreviousPage}
                        onClick={() => {
                            setPagingVariables({
                                first: null,
                                after: null,
                                last: pageSize,
                                before: data?.requestsByStatus?.pageInfo.startCursor ?? null,
                            })
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size="xl"
                        />
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        disabled={!data?.requestsByStatus?.pageInfo.hasNextPage}
                        onClick={() => {
                            setPagingVariables({
                                first: pageSize,
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
                    <button
                        disabled={!data?.requestsByStatus?.pageInfo.hasNextPage}
                        onClick={() => {
                            setPagingVariables({
                                first: null,
                                after: null,
                                last: pageSize,
                                before: null,
                            })
                        }}
                    >
                        <span>Last</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RequestsByStatus
