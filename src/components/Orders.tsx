import {useQuery, useSubscription} from 'urql'
import {graphql} from '../gql'
import {OrderPov, OrderSortInput, OrderStatusEnum, SortEnumType} from '../gql/graphql'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from './UserContext'
import OrderSummary from './OrderSummary'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button} from '@material-tailwind/react'

export const GetOrdersDocument = graphql(`
    query GetOrders(
        $userId: Int!
        $pov: OrderPov!
        $status: OrderStatusEnum!
        $first: Int
        $after: String
        $last: Int
        $before: String
        $order: [OrderSortInput!]
    ) {
        orders(
            userId: $userId
            pov: $pov
            first: $first
            after: $after
            last: $last
            before: $before
            where: {orderStatusId: {eq: $status}}
            order: $order
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

function Orders(props: {
    pov: OrderPov
    status: OrderStatusEnum
    pageSize: number
    sort: string
    onCountChange: (pov: OrderPov, status: OrderStatusEnum, count: number) => void
}) {
    const {user} = useContext(UserContext)

    const [pagingVariables, setPagingVariables] = useState<{
        first: number | null
        after: string | null
        last: number | null
        before: string | null
    }>({
        first: props.pageSize,
        after: null,
        last: null,
        before: null,
    })

    // Reset paging variables when page size changes
    useEffect(() => {
        setPagingVariables({
            first: props.pageSize,
            after: null,
            last: null,
            before: null,
        })
    }, [props.pageSize])

    const order: OrderSortInput[] = [
        {
            orderDate:
                props.sort === 'Date: Oldest to Newest' ? SortEnumType.Asc : SortEnumType.Desc,
        },
    ]

    const [{data}, reexecuteQuery] = useQuery({
        query: GetOrdersDocument,
        variables: {
            userId: user?.userId ?? -1,
            pov: props.pov,
            status: props.status,
            first: pagingVariables.first,
            after: pagingVariables.after,
            last: pagingVariables.last,
            before: pagingVariables.before,
            order: order,
        },
        requestPolicy: 'network-only',
        pause: !user,
    })
    const count = data?.orders?.totalCount
    useEffect(() => {
        if (count !== undefined) {
            props.onCountChange(props.pov, props.status, count)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count])

    const [subscriptionResult] = useSubscription({
        query: OnNewOrderSubscription,
        variables: {userId: user?.userId ?? -1},
    })
    useEffect(() => {
        if (subscriptionResult.data?.onNewOrder) {
            reexecuteQuery({requestPolicy: 'network-only'})
        }
    }, [subscriptionResult, reexecuteQuery])

    return (
        <>
            {user && (
                <div>
                    {data?.orders?.edges?.map((edge) => (
                        <OrderSummary
                            key={edge.cursor}
                            order={edge.node}
                            pov={props.pov}
                            onAction={() => reexecuteQuery({requestPolicy: 'network-only'})}
                        />
                    ))}
                    <div className="flex justify-between text-center">
                        <div className="flex gap-2">
                            <Button
                                placeholder=""
                                className="bg-purple"
                                disabled={!data?.orders?.pageInfo.hasPreviousPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: props.pageSize,
                                        after: null,
                                        last: null,
                                        before: null,
                                    })
                                }}
                            >
                                <span>First</span>
                            </Button>
                            <Button
                                placeholder=""
                                className="bg-purple"
                                disabled={!data?.orders?.pageInfo.hasPreviousPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: null,
                                        after: null,
                                        last: props.pageSize,
                                        before: data?.orders?.pageInfo.startCursor ?? null,
                                    })
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    size="xl"
                                />
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button
                                placeholder=""
                                className="bg-purple"
                                disabled={!data?.orders?.pageInfo.hasNextPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: props.pageSize,
                                        after: data?.orders?.pageInfo.endCursor ?? null,
                                        last: null,
                                        before: null,
                                    })
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="xl"
                                />
                            </Button>
                            <Button
                                placeholder=""
                                className="bg-purple"
                                disabled={!data?.orders?.pageInfo.hasNextPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: null,
                                        after: null,
                                        last: props.pageSize,
                                        before: null,
                                    })
                                }}
                            >
                                <span>Last</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Orders
