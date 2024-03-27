import {useSearchParams} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import {useContext, useEffect} from 'react'
import {graphql} from '../../gql'
import {useMutation} from 'urql'
import {UserContext} from '../UserContext'

export const ExchangeInstagramAuthCodeForTokenDocument = graphql(`
    mutation ExchangeInstagramAuthCodeForToken($input: ExchangeInstagramAuthCodeForTokenInput!) {
        exchangeInstagramAuthCodeForToken(input: $input) {
            connection {
                userId
                platformId
                handle
                # token
                # tokenExpiration
            }
            errors {
                ... on Error {
                    message
                }
            }
        }
    }
`)

function ConnectInstagram() {
    const [, executeMutation] = useMutation(ExchangeInstagramAuthCodeForTokenDocument)
    const [searchParams] = useSearchParams()
    const {user} = useContext(UserContext)
    console.log(user)

    useEffect(() => {
        const authCode = searchParams.get('code')
        if (authCode) {
            executeMutation({
                input: {
                    userId: 1, // hardcoded for now
                    platformId: 3, // hardcoded for now
                    authCode,
                },
            }).then((result) => console.log(result))
            // const accessTokenRequestURL = "https://api.instagram.com/oauth/access_token"
            // const requestParams = {
            //     client_id: "3649610268617265",
            //     client_secret: "f3e68e552fad3d31536f85a39c85b7c7",
            //     code: {authCode},
            //     grant_type: "authorization_code",
            //     redirect_uri: "https://localhost:5173/settings/connectInstagramAccount",
            // }
            // const requestOptions = {
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     method: 'POST',
            //     body: JSON.stringify( requestParams )
            // }
            // fetch( accessTokenRequestURL, requestOptions ).then(response => console.log(response))
        }
    }, [searchParams, executeMutation])

    return (
        <>
            <div>
                <h2>Connecting your Instagram Account...</h2>
                <CircularProgress />
            </div>
        </>
    )
}

export default ConnectInstagram
