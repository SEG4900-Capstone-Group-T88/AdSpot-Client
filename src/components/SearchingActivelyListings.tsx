import React from 'react'

interface Listing {
  title: string
  platform: string
  niche: string
  followerCount: number
  price: number
  // Add other properties as needed...
}

interface SearchingActiveListingsProps {
  listings: Listing[]
}

const SearchingActiveListings: React.FC<SearchingActiveListingsProps> = ({listings}) => {
  function formatFollowerCount(count: number): string {
    if (count >= 1000) {
      return (count / 1000).toString() + 'K'
    } else {
      return count.toString()
    }
  }

  return (
    <div>
      <h2>Active Listings</h2>
      {listings.map((listing, index) => (
        <div
          key={index}
          className="listing"
        >
          <h3>{listing.title}</h3>
          <p>Platform: {listing.platform}</p>
          <p>Niche: {listing.niche}</p>
          <p>Follower Count: {formatFollowerCount(listing.followerCount)}</p>
          <p>Price: {listing.price}</p>
          {/* Add other listing details as needed... */}
        </div>
      ))}
    </div>
  )
}

export default SearchingActiveListings
