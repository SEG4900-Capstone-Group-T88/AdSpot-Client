// Search.tsx
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ActiveListings, {Listing} from '../components/ActiveListings'
import mockListings from '../components/mockListings.json'

function Search() {
  const [viewMore, setViewMore] = useState(false)
  const [price, setPrice] = useState<number>(1000)
  const [selectedNiche, setSelectedNiche] = useState<string[]>([])
  const [selectedFollowerRange, setSelectedFollowerRange] = useState<[number, number] | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState('')

  const handleViewMore = () => {
    setViewMore(!viewMore)
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value))
  }

  const handleNicheChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedNiche((prev) => [...prev, event.target.value])
    } else {
      setSelectedNiche((prev) => prev.filter((item) => item !== event.target.value))
    }
  }
  const handleFollowerCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value === 'All') {
      setSelectedFollowerRange(null) // Clear the filter
    } else {
      // Parse the selected range and set the state
      const range = value.split('-').map((x) => parseInt(x.replace(/k/g, '000')))
      setSelectedFollowerRange(range as [number, number])
    }
  }

  const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSelectedPlatform(value === 'All' ? '' : value) // If "All" is selected, reset the filter
  }

  const listings: Listing[] = mockListings

  // Then update your filteredListings logic
  const filteredListings = listings.filter((listing) => {
    const followerCountInRange = selectedFollowerRange
      ? listing.followerCount >= selectedFollowerRange[0] &&
        listing.followerCount <= selectedFollowerRange[1]
      : true // No follower count range is selected, so don't filter on this criterion

    return (
      (selectedNiche.length === 0 ||
        selectedNiche.some((niche) => listing.niche.includes(niche))) &&
      followerCountInRange &&
      (!selectedPlatform || listing.platform === selectedPlatform) &&
      listing.price <= price
    )
  })

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <div className="filter-container">
            <h3>Filter</h3>
            <div className="price-range">
              <h4>Price range</h4>
              <input
                type="range"
                min="1"
                max="999"
                defaultValue="500"
                className="slider"
                id="priceRange"
                value={price}
                onChange={handlePriceChange}
              />
              <span>${price}</span>
            </div>
            <div className="niche">
              <h4>Niche</h4>
              {['Art', 'Christianity', 'Faith', 'Health', 'Motivational', 'Politics'].map(
                (niche, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      name="niche"
                      value={niche.toLowerCase()}
                      id={`niche-${niche.toLowerCase()}`}
                      onChange={handleNicheChange}
                    />
                    <label htmlFor={`niche-${niche.toLowerCase()}`}>{niche}</label>
                  </div>
                ),
              )}
              <button
                onClick={handleViewMore}
                className="view-more"
              >
                {viewMore ? 'View Less' : 'View More'}
              </button>
            </div>
            <div className="follower-count">
              <h4>Follower count</h4>
              <input
                type="radio"
                name="followerCount"
                value="All" // Use "All" directly
                id="followerCount-All"
                onChange={handleFollowerCountChange}
              />
              <label htmlFor="followerCount-All">All</label>
              {['1k - 10k', '10k - 50k', '50k - 200k', '200k - 1M', '1M +'].map((range, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="followerCount"
                    value={range.replace(/\s/g, '')}
                    id={`followerCount-${range.replace(/\s/g, '')}`}
                    onChange={handleFollowerCountChange}
                  />
                  <label htmlFor={`followerCount-${range.replace(/\s/g, '')}`}>{range}</label>
                </div>
              ))}
            </div>
            <div className="platform">
              <h4>Platform</h4>
              <input
                type="radio"
                name="platform"
                value="All"
                id="platform-All"
                checked={selectedPlatform === ''}
                onChange={handlePlatformChange}
              />
              <label htmlFor="platform-All">All</label>
              {['Instagram', 'X', 'YouTube'].map((platform, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="platform"
                    value={platform}
                    id={`platform-${platform}`}
                    checked={selectedPlatform === platform}
                    onChange={handlePlatformChange}
                  />
                  <label htmlFor={`platform-${platform}`}>{platform}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <ActiveListings listings={filteredListings} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search
