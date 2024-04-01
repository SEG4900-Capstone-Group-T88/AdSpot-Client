import {useContext} from 'react'
import {UserContext} from './UserContext'
import {graphql} from '../gql'
import {useQuery} from 'urql'
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

function UserListings() {
    const {user} = useContext(UserContext)
    const [{data}] = useQuery({
        query: GetUserListingsDocument,
        variables: {userId: user?.userId ?? -1},
    })
    return (
        <div className="flex flex-wrap gap-4 mt-4 mb-8">
            {data?.userById?.listings.map((listing) => (
                <Listing
                    key={(listing as ListingSummaryFragment).listingId}
                    listing={listing}
                    buyable={false}
                />
            ))}
        </div>
    )
}

export default UserListings
