// ActiveListings.tsx
import Profile from '../images/profile.png'

interface Listing {
  name: string
  handle: string
  title: string
  platform: string
  niche: string[]
  followerCount: number
  price: number
  // Add other properties as needed...
}

interface ActiveListingsProps {
  listings: Listing[]
}

const ActiveListings: React.FC<ActiveListingsProps> = ({listings}) => {
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
            Retweet on {listing.platform}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={Profile}
                className="h-12 w-12 rounded-full mr-4"
                alt={`${listing.name}`}
              />
              <div>
                <h4 className="text-xl font-semibold">
                  {listing.name} - 1 Retweet for ${listing.price}
                </h4>
                <p className="text-[black] text-base">{formatNiche(listing.niche)}</p>
                <p className="text-purple text-base">@{listing.handle}</p>
              </div>
            </div>
            <p className="text-base">{formatFollowerCount(listing.followerCount)} followers</p>
          </div>
        </div>
      ))}
      <div className="text-center mt-6">
        <a
          href="/view-all"
          className="text-purple-600 underline text-base"
        >
          View all
        </a>
      </div>
    </div>
  )
}

export default ActiveListings
