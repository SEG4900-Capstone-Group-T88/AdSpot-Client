import {useNavigate} from 'react-router-dom'
import {FragmentType, graphql, useFragment} from '../gql'
import Profile from '../images/profile.png'

export const UserSummaryFragmentDocument = graphql(`
    fragment UserSummary on User {
        userId
        firstName
        lastName
        listings {
            platform {
                name
            }
            listingType {
                name
            }
            price
        }
    }
`)

function UserSummary(props: {user: FragmentType<typeof UserSummaryFragmentDocument>}) {
    const user = useFragment(UserSummaryFragmentDocument, props.user)
    const platformNames = user.listings
        .map((listing) => listing.platform.name)
        .filter((val, idx, arr) => arr.indexOf(val) === idx)
    const prices = user.listings.map((listing) => Number(listing.price))
    const navigate = useNavigate()

    return (
        <div
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => navigate(`/user/${user.userId}`)}
        >
            <div className="flex items-center py-2">
                <img
                    src={Profile}
                    className="h-12 w-12 rounded-full mr-4"
                />
                <h4 className="text-xl font-semibold">
                    {user.firstName} {user.lastName}
                </h4>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
                {platformNames.map((platform, idx) => (
                    <span
                        key={idx}
                        className="bg-purple text-white rounded px-2"
                    >
                        {platform}
                    </span>
                ))}
            </div>
            <span className="py-2">
                Prices from ${Math.min(...prices)} - ${Math.max(...prices)}
            </span>
        </div>
    )
}

export default UserSummary
