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
    <div>
      <h2>Active listings</h2>
      {listings.map((listing, index) => (
        <div
          key={index}
          className="listing rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3"
        >
          <h3>Retweet on {listing.platform}</h3>
          <div className="flex gap-36">
            <div className="flex gap-4 items-center ">
              <img
                src={Profile}
                className="h-12 w-12"
                alt={`${listing.name}`}
              />
              <div>
                <h4>
                  {listing.name} - 1 Retweet for ${listing.price}
                </h4>
                <p className="text-[red] text-[20px]">{formatNiche(listing.niche)}</p>
                <p className="text-purple text-[20px]">@{listing.handle}</p>
              </div>
            </div>
            <p className="text-[20px]">{formatFollowerCount(listing.followerCount)} followers</p>
          </div>
        </div>
      ))}
      <div className="text-center mt-6 mb-12">
        <a
          href="/view-all"
          className="text-purple underline text-[20px]"
        >
          View all
        </a>
      </div>
    </div>
  )
}

export default ActiveListings
