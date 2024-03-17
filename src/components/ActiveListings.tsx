// ActiveListings.tsx
import {useState} from 'react'
import Profile from '../images/profile.png'
import UserInput from './UserInput'

export interface Listing {
    name: string
    handle: string
    title: string
    platform: string
    niche: string[]
    followerCount: number
    price: number
    ratings: number
    reviews: number
    // Add other properties as needed...
}

interface ActiveListingsProps {
    listings: Listing[]
}

const ActiveListings: React.FC<ActiveListingsProps> = ({listings}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedListing, setSelectedListing] = useState<Listing | null>(null)
    const [expectations, setExpectations] = useState('')
    const [promotionDetails, setPromotionDetails] = useState('')

    const handleExpectationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpectations(e.target.value)
    }

    const handlePromotionDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPromotionDetails(e.target.value)
    }

    const handleSubmitRequest = () => {
        if (expectations === '' || promotionDetails === '') {
            return null
        }
        // Implement the logic to handle the form submission
        // This could involve validating the input, sending a request to a server, etc.

        // For demonstration, we'll just log the values and close the modal

        closeModal()
    }

    const openModal = (listing: Listing) => {
        setSelectedListing(listing)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setSelectedListing(null)
        setIsModalOpen(false)
    }

    function formatNiche(nicheArray: string[]) {
        return nicheArray.map((niche) => niche.charAt(0).toUpperCase() + niche.slice(1)).join(', ')
    }

    function formatFollowerCount(count: number): string {
        if (count >= 1000) {
            return (count / 1000).toString() + 'K'
        } else {
            return count.toString()
        }
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-8">Active Listings</h2>
            {listings.map((listing, index) => (
                <div
                    key={index}
                    className="listing bg-white rounded-lg shadow-md p-6 my-4"
                >
                    <h3 className="text-lg font-semibold text-indigo-600 mb-4">
                        Retweet on {listing.platform} for ${listing.price}
                    </h3>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            {/* Assume 'Profile' is a placeholder for profile image URL */}
                            <img
                                src={Profile}
                                className="h-12 w-12 rounded-full mr-4"
                                alt={`${listing.name}`}
                            />
                            <div>
                                <h4 className="text-xl font-semibold">{listing.name}</h4>
                                <p className="text-purple text-base">@{listing.handle}</p>
                                <p className="text-gray-500 text-base">
                                    {formatNiche(listing.niche)}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {listing.ratings.toFixed(1)} stars - {listing.reviews} reviews
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <p className="text-base">
                                {formatFollowerCount(listing.followerCount)} followers
                            </p>
                            <button
                                className="bg-purple text-white rounded-lg px-4 py-2 mt-4 shadow-lg"
                                onClick={() => openModal(listing)}
                            >
                                Send Request
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {isModalOpen && selectedListing && (
                <div className="modal-bg ">
                    <div className="modal-content relative">
                        <button
                            className="absolute top-0 right-0 mt-4 mr-4 text-[red] text-lg font-semibold hover:text-red-700"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h3 className="text-lg font-semibold mb-4">{`${selectedListing.name} wants to know...`}</h3>
                        <UserInput
                            myLabel="Your expectations for this promotion"
                            type="text"
                            placeholder="I am expecting >1000 views"
                            onChange={handleExpectationsChange}
                            value={expectations}
                        />
                        <UserInput
                            myLabel="What you want promoted"
                            type="text"
                            placeholder="Motivational tweet about working out the gym"
                            onChange={handlePromotionDetailsChange}
                            value={promotionDetails}
                        />
                        <button
                            className="bg-purple text-white rounded-lg px-4 py-2 mt-4 shadow-lg"
                            onClick={handleSubmitRequest}
                        >
                            Send request
                        </button>
                    </div>
                </div>
            )}

            <div className="text-center mt-6">
                <a
                    href="/view-all"
                    className="text-indigo-600 underline text-base"
                >
                    View all
                </a>
            </div>
        </div>
    )
}

export default ActiveListings
