import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {FragmentType, graphql, useFragment} from '../gql'
import {useQuery} from 'urql'
import UserSummary, {UserSummaryFragmentDocument} from '../components/UserSummary'
import {UserFilterInput} from '../gql/graphql'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const GetUsersQuery = graphql(`
    query GetUsers(
        $filter: UserFilterInput
        $first: Int
        $after: String
        $last: Int
        $before: String
    ) {
        users(
            where: $filter
            first: $first
            after: $after
            last: $last
            before: $before
            order: [{userId: ASC}]
        ) {
            totalCount
            pageInfo {
                hasPreviousPage
                hasNextPage
                startCursor
                endCursor
            }
            edges {
                cursor
                node {
                    ...UserSummary
                }
            }
        }
    }
`)

export const GetPlatformsQuery = graphql(`
    query GetPlatforms {
        platforms {
            platformId
            name
        }
    }
`)

function Search() {
    const [selectedPlatformId, setSelectedPlatformId] = useState(-1)
    const [price, setPrice] = useState<number>(1000)
    // const [selectedNiche, setSelectedNiche] = useState<string[]>([])
    // const [selectedFollowerRange, setSelectedFollowerRange] = useState<[number, number] | null>(
    //     null,
    // )
    // const [viewMore, setViewMore] = useState(false)

    const [{data: platformsData}] = useQuery({query: GetPlatformsQuery})

    const atLeastOneListingFilter = {
        listings: {any: true},
    }
    const platformFilter = {
        listings: {
            some: {
                platform: {platformId: {eq: selectedPlatformId}},
            },
        },
    }
    const priceFilter = {
        listings: {
            some: {
                and: [{price: {gte: 0}}, {price: {lte: price}}],
            },
        },
    }

    const filters: UserFilterInput[] = [atLeastOneListingFilter, priceFilter]
    if (selectedPlatformId !== -1) {
        filters.push(platformFilter)
    }
    const combinedFilter = {
        and: filters,
    }

    const pageSize = 12
    const [pagingVariables, setPagingVariables] = useState<{
        first: number | null
        after: string | null
        last: number | null
        before: string | null
    }>({
        first: pageSize,
        after: null,
        last: null,
        before: null,
    })

    const [{data: usersData}] = useQuery({
        query: GetUsersQuery,
        variables: {
            filter: combinedFilter,
            first: pagingVariables.first,
            after: pagingVariables.after,
            last: pagingVariables.last,
            before: pagingVariables.before,
        },
    })
    const users = useFragment(
        UserSummaryFragmentDocument,
        usersData?.users?.edges?.map((edge) => edge.node),
    )

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(parseInt(event.target.value))
    }

    const handlePlatformChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPlatformId(parseInt(event.target.value)) // If "All" is selected, reset the filter
    }

    // const handleNicheChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.checked) {
    //         setSelectedNiche((prev) => [...prev, event.target.value])
    //     } else {
    //         setSelectedNiche((prev) => prev.filter((item) => item !== event.target.value))
    //     }
    // }
    // const handleFollowerCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = event.target.value
    //     if (value === 'All') {
    //         setSelectedFollowerRange(null) // Clear the filter
    //     } else {
    //         // Parse the selected range and set the state
    //         const range = value.split('-').map((x) => parseInt(x.replace(/k/g, '000')))
    //         setSelectedFollowerRange(range as [number, number])
    //     }
    // }

    // const handleViewMore = () => {
    //     setViewMore(!viewMore)
    // }

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-4 mt-4">
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
                        <div className="platform">
                            <h4>Platform</h4>
                            <input
                                type="radio"
                                name="platform"
                                value={-1}
                                id="platform-All"
                                onChange={handlePlatformChange}
                            />
                            <label htmlFor="platform-All">All</label>
                            {platformsData?.platforms.map((platform, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name="platform"
                                        value={platform.platformId}
                                        id={`platform-${platform.name}`}
                                        // checked={selectedPlatform === platform}
                                        onChange={handlePlatformChange}
                                    />
                                    <label htmlFor={`platform-${platform.name}`}>
                                        {platform.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {/* <div className="niche">
                            <h4>Niche</h4>
                            {[
                                'Art',
                                'Christianity',
                                'Faith',
                                'Health',
                                'Motivational',
                                'Politics',
                            ].map((niche, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        name="niche"
                                        value={niche.toLowerCase()}
                                        id={`niche-${niche.toLowerCase()}`}
                                        // onChange={handleNicheChange}
                                    />
                                    <label htmlFor={`niche-${niche.toLowerCase()}`}>{niche}</label>
                                </div>
                            ))}
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
                                // onChange={handleFollowerCountChange}
                            />
                            <label htmlFor="followerCount-All">All</label>
                            {['1k - 10k', '10k - 50k', '50k - 200k', '200k - 1M', '1M +'].map(
                                (range, index) => (
                                    <div key={index}>
                                        <input
                                            type="radio"
                                            name="followerCount"
                                            value={range.replace(/\s/g, '')}
                                            id={`followerCount-${range.replace(/\s/g, '')}`}
                                            // onChange={handleFollowerCountChange}
                                        />
                                        <label
                                            htmlFor={`followerCount-${range.replace(/\s/g, '')}`}
                                        >
                                            {range}
                                        </label>
                                    </div>
                                ),
                            )}
                        </div> */}
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="grid grid-cols-3 gap-4">
                        {users &&
                            users.map((user) => (
                                <UserSummary
                                    key={user.userId}
                                    user={user as FragmentType<typeof UserSummaryFragmentDocument>}
                                />
                            ))}
                    </div>
                    <div className="flex justify-between text-center mt-4">
                        <div className="flex gap-2">
                            <button
                                disabled={!usersData?.users?.pageInfo.hasPreviousPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: pageSize,
                                        after: null,
                                        last: null,
                                        before: null,
                                    })
                                }}
                            >
                                <span>First</span>
                            </button>
                            <button
                                disabled={!usersData?.users?.pageInfo.hasPreviousPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: null,
                                        after: null,
                                        last: pageSize,
                                        before: usersData?.users?.pageInfo.startCursor ?? null,
                                    })
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    size="xl"
                                />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button
                                disabled={!usersData?.users?.pageInfo.hasNextPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: pageSize,
                                        after: usersData?.users?.pageInfo.endCursor ?? null,
                                        last: null,
                                        before: null,
                                    })
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="xl"
                                />
                            </button>
                            <button
                                disabled={!usersData?.users?.pageInfo.hasNextPage}
                                onClick={() => {
                                    setPagingVariables({
                                        first: null,
                                        after: null,
                                        last: pageSize,
                                        before: null,
                                    })
                                }}
                            >
                                <span>Last</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search
