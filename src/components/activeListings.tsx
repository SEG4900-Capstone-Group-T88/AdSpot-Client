// ActiveListings.tsx
import Profile from '../images/profile.png' // Make sure this path is correct

// Mock data for listings, you'd normally get this from your backend or service.
const mockListings = [
  {
    name: 'John Doe',
    price: 10,
    followers: '20k',
    username: '@johndoe123',
    platform: 'X',
  },
  // Add more mock listings as needed...
]

function ActiveListings() {
  return (
    <div>
      <h2>Active listings</h2>
      {mockListings.map((listing, index) => (
        <div
          key={index}
          className="rounded-lg border-2 border-[#B9B8B8] px-6 py-2 my-3"
        >
          <h3>Retweet on {listing.platform}</h3>
          <div className="flex gap-36">
            <div className="flex gap-4 items-center">
              <img
                src={Profile}
                className="h-12 w-12"
                alt={`${listing.name}`}
              />
              <div>
                <h4>
                  {listing.name} - 1 Retweet for ${listing.price}
                </h4>
                <p className="text-purple text-[20px]">{listing.username}</p>
              </div>
            </div>
            <p className="text-[20px]">{listing.followers} followers</p>
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
