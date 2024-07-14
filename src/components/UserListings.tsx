import {useContext, useEffect} from 'react'
import {UserContext} from './UserContext'
import {graphql} from '../gql'
import {useQuery, useSubscription} from 'urql'
import {ListingSummaryFragment} from '../gql/graphql'
import Listing from './Listing'

export const GetUserListingsDocument = graphql(`
    query GetUserListings($userId: Int!) {
        userById(userId: $userId) {
            listings {
                ...ListingSummary
            }
        }
    }
`)

export const OnNewListingSubscription = graphql(`
    subscription OnNewListing($userId: Int!) {
        onNewListing(userId: $userId) {
            listingId
        }
    }
`)

function UserListings() {
    const {user} = useContext(UserContext)

    const [{data}, reexecuteQuery] = useQuery({
        query: GetUserListingsDocument,
        variables: {userId: user?.userId ?? -1},
        pause: !user,
    })

    const [subscriptionResult] = useSubscription({
        query: OnNewListingSubscription,
        variables: {userId: user?.userId ?? -1},
        pause: !user,
    })
    useEffect(() => {
        if (subscriptionResult.data?.onNewListing) {
            reexecuteQuery({requestPolicy: 'network-only'})
        }
    }, [subscriptionResult, reexecuteQuery])

    return (
        <>
            <h3>My Listings</h3>
            <div className="flex flex-wrap gap-4 mt-4 mb-8">
                {data?.userById?.listings.map((listing) => (
                    <Listing
                        key={(listing as ListingSummaryFragment).listingId}
                        listing={listing}
                        buyable={false}
                    />
                ))}
            </div>
        </>
    )
}

export default UserListings
