import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {FragmentType, graphql, useFragment} from '../gql'
import {useQuery} from 'urql'
import UserSummary, {UserSummaryFragmentDocument} from '../components/UserSummary'
import {UserFilterInput} from '../gql/graphql'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Input} from '@material-tailwind/react'

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
            order: [{firstName: ASC}]
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
    const [nameSearch, setNameSearch] = useState<string>('')
    const [flairSearch, setFlairSearch] = useState<string>('')
    // const [selectedNiche, setSelectedNiche] = useState<string[]>([])
    // const [selectedFollowerRange, setSelectedFollowerRange] = useState<[number, number] | null>(
    //     null,
    // )
    // const [viewMore, setViewMore] = useState(false)

    const [{data: platformsData}] = useQuery({query: GetPlatformsQuery})

    const atLeastOneListingFilter = {
        listings: {any: true},
    }

    let combinedFilter
    if (nameSearch.length > 0) {
        const [firstName, lastName] = nameSearch.split(' ')
        if (lastName === undefined) {
            // only one word
            combinedFilter = {
                and: [
                    atLeastOneListingFilter,
                    {
                        or: [
                            {firstName: {startsWith: firstName}},
                            {lastName: {startsWith: firstName}},
                        ],
                    },
                ],
            }
        } else {
            combinedFilter = {
                and: [
                    atLeastOneListingFilter,
                    {firstName: {startsWith: firstName}},
                    {lastName: {startsWith: lastName}},
                ],
            }
        }
    } else {
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
        if (flairSearch.length > 0) {
            const flairFilter = {
                flairs: {
                    some: {
                        flairTitle: {startsWith: flairSearch},
                    },
                },
            }
            filters.push(flairFilter)
        }

        combinedFilter = {
            and: filters,
        }
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
        requestPolicy: 'network-only',
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

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-4 mt-4">
                <div className="col-span-1">
                    <div className="filter-container flex flex-col gap-4">
                        <h3>Filter</h3>
                        <div className="username w-fit">
                            <h4>Name</h4>
                            <Input
                                type="text"
                                size="lg"
                                value={nameSearch}
                                onChange={(e) => setNameSearch(e.target.value)}
                                crossOrigin={undefined}
                            />
                        </div>
                        <div className="flair w-fit">
                            <h4>Flair</h4>
                            <Input
                                type="text"
                                size="lg"
                                value={flairSearch}
                                onChange={(e) => setFlairSearch(e.target.value)}
                                crossOrigin={undefined}
                            />
                        </div>
                        <div className="price-range">
                            <h4>Price range</h4>
                            <input
                                type="range"
                                min="1"
                                max="999"
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
                                className="rounded bg-purple text-white px-2 py-1"
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
                                className={
                                    usersData?.users?.pageInfo.hasPreviousPage
                                        ? 'rounded-full border-2 px-1 border-purple text-purple'
                                        : 'rounded-full border-2 px-1 border-gray-500'
                                }
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
                        <span className="self-center">
                            {usersData?.users?.totalCount} users found
                        </span>
                        <div className="flex gap-2">
                            <button
                                disabled={!usersData?.users?.pageInfo.hasNextPage}
                                className={
                                    usersData?.users?.pageInfo.hasNextPage
                                        ? 'rounded-full border-2 px-1 border-purple text-purple'
                                        : 'rounded-full border-2 px-1 border-gray-500'
                                }
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
                                className="rounded bg-purple text-white px-2 py-1"
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
