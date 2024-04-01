import {useQuery} from 'urql'
import {graphql, useFragment} from '../gql'
import Profile from '../images/profile.png'
import {useParams} from 'react-router-dom'
import Listing from '../components/Listing'
import Navbar from '../components/Navbar'
import {ListingSummaryFragment} from '../gql/graphql'

export const UserProfileFragmentDocument = graphql(`
    fragment UserProfile on User {
        userId
        firstName
        lastName
        listings {
            ...ListingSummary
        }
    }
`)

export const GetUserByIdDocument = graphql(`
    query GetUserById($userId: Int!) {
        userById(userId: $userId) {
            ...UserProfile
        }
    }
`)

function UserProfile() {
    const {userId} = useParams()
    const [{data}] = useQuery({query: GetUserByIdDocument, variables: {userId: Number(userId)}})
    const user = useFragment(UserProfileFragmentDocument, data?.userById)
    const videoLinks = [
        'https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4',
        'https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4',
        'https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4',
        'https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4',
    ]

    return (
        <>
            <Navbar />
            {user && (
                <div>
                    <img
                        src={Profile}
                        className="rounded-full mr-4 w-50 h-50"
                    />
                    <h2 className="mt-2">
                        {user.firstName} {user.lastName}
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam
                    </p>
                    <h3 className="mt-4 mb-2">Select a promotion type</h3>
                    <div className="flex flex-wrap gap-4">
                        {user.listings.map((listing) => {
                            return (
                                <Listing
                                    key={(listing as ListingSummaryFragment).listingId}
                                    listing={listing}
                                    buyable={true}
                                />
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-4 mt-8 gap-4">
                        {videoLinks.map((link, idx) => (
                            <video
                                controls
                                key={idx}
                            >
                                <source src={link} />
                            </video>
                        ))}
                    </div>
                </div>
            )}
            {!user && <div>User not found.</div>}
        </>
    )
}

export default UserProfile
