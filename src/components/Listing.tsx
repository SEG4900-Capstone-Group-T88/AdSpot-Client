import {useContext} from 'react'
import {FragmentType, graphql, useFragment} from '../gql'
import {UserContext} from './UserContext'

export const ListingFragmentDocument = graphql(`
    fragment Listing on Listing {
        listingId
        listingType {
            platform {
                platformId
                name
            }
            name
        }
        price
    }
`)

function Listing(props: {listing: FragmentType<typeof ListingFragmentDocument>}) {
    const listing = useFragment(ListingFragmentDocument, props.listing)
    const {user} = useContext(UserContext)

    function buyListing() {
        alert(`User ${user?.userId} bought listing ${listing.listingId}`)
    }

    return (
        <>
            <div
                key={listing.listingId}
                className="flex flex-col bg-purple text-white rounded p-2 cursor-pointer"
                onClick={() => buyListing()}
            >
                <span>
                    {listing.listingType.platform.name} {listing.listingType.name}
                </span>
                <span>${listing.price}</span>
            </div>
        </>
    )
}

export default Listing
