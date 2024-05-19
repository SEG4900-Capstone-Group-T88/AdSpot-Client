import Navbar from '../components/Navbar'
import {SocialIcon} from 'react-social-icons'
import {graphql} from '../gql'
import {AccountConnectedFragment} from '../gql/graphql'
import {useQuery, useSubscription} from 'urql'
import {useContext, useEffect, useState} from 'react'
import {UserContext} from '../components/UserContext'

export const GetUserConnections = graphql(`
    query GetUserConnections($input: Int!) {
        userById(userId: $input) {
            connections {
                platformId
                handle
            }
        }
    }
`)

export const AccountConnectedFragmentDocument = graphql(`
    fragment AccountConnected on Connection {
        userId
        platformId
        handle
    }
`)

export const OnAccountConnectedSubscription = graphql(`
    subscription OnAccountConnected($userId: Int!) {
        onAccountConnected(userId: $userId) {
            ...AccountConnected
        }
    }
`)

function ConnectedAccounts() {
    const {user} = useContext(UserContext)
    const [connectedAccounts, setConnectedAccounts] = useState(new Map<number, string>())

    const [result] = useQuery({
        query: GetUserConnections,
        variables: {input: user?.userId ?? -1},
    })
    useEffect(() => {
        const initial = new Map<number, string>()
        result.data?.userById?.connections.forEach((element) => {
            initial.set(element.platformId, element.handle)
        })
        setConnectedAccounts(initial)
    }, [])

    const [subscriptionResult] = useSubscription({
        query: OnAccountConnectedSubscription,
        variables: {userId: user?.userId ?? -1},
    })
    if (subscriptionResult.data?.onAccountConnected) {
        const connection = subscriptionResult.data.onAccountConnected as AccountConnectedFragment
        if (!connectedAccounts.has(connection.platformId)) {
            setConnectedAccounts(
                new Map(connectedAccounts.set(connection.platformId, connection.handle)),
            )
        }
    }

    const facebookHandle = connectedAccounts.get(1)
    const twitterHandle = connectedAccounts.get(2)
    const instagramHandle = connectedAccounts.get(3)
    const youtubeHandle = connectedAccounts.get(4)

    return (
        <>
            <Navbar />
            <div className="flex items-center my-16">
                <div>
                    <h2>Your Connected Accounts</h2>
                    <div className="flex items-center my-3 gap-4">
                        {facebookHandle && (
                            <div>
                                <SocialIcon
                                    className="mx-5"
                                    network="facebook"
                                />
                                <p className="mt-4 truncate">{facebookHandle}</p>
                            </div>
                        )}
                        {twitterHandle && (
                            <div>
                                <SocialIcon
                                    className="mx-5"
                                    network="twitter"
                                />
                                <p className="mt-4">{twitterHandle}</p>
                            </div>
                        )}
                        {instagramHandle && (
                            <div className="flex flex-col">
                                <SocialIcon
                                    className="mx-5"
                                    network="instagram"
                                />
                                <p className="mt-4">{instagramHandle}</p>
                            </div>
                        )}
                        {youtubeHandle && (
                            <div>
                                <SocialIcon
                                    className="mx-5"
                                    network="youtube"
                                />
                                <p className="mt-4">{youtubeHandle}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex items-center my-16">
                <div>
                    <h2>Connect a Social Media Account</h2>
                    <div className="flex items-center my-3">
                        {!facebookHandle && (
                            <SocialIcon
                                className="mx-5"
                                network="facebook"
                                url="https://www.facebook.com/v19.0/dialog/oauth?client_id=948021529632543&redirect_uri=https://localhost:5173"
                            />
                        )}
                        {!twitterHandle && (
                            <SocialIcon
                                className="mx-5"
                                network="twitter"
                            />
                        )}
                        {!instagramHandle && (
                            <SocialIcon
                                className="mx-5"
                                network="instagram"
                                url="https://api.instagram.com/oauth/authorize?client_id=3649610268617265&redirect_uri=https://localhost:5173/settings/connectInstagramAccount&scope=user_profile,user_media&response_type=code"
                            />
                        )}
                        {!youtubeHandle && (
                            <SocialIcon
                                className="mx-5"
                                network="youtube"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConnectedAccounts
