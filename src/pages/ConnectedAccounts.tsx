import Navbar from '../components/Navbar'
import {SocialIcon} from 'react-social-icons'
import {graphql} from '../gql'
import {useQuery} from 'urql'
import {useContext} from 'react'
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

function ConnectedAccounts() {
    const {user} = useContext(UserContext)
    const [result] = useQuery({
        query: GetUserConnections,
        variables: {input: user?.userId ?? -1},
        requestPolicy: 'network-only',
    })

    const connectedAccounts: Map<number, string> = new Map()

    result.data?.userById?.connections.forEach((element) => {
        connectedAccounts.set(element.platformId, element.handle)
    })

    console.log(connectedAccounts)

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
