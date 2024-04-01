import {useNavigate, useSearchParams} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import {useContext} from 'react'
import {graphql} from '../../gql'
import {useMutation} from 'urql'
import {UserContext} from '../UserContext'
import {UserContextInfoFragment} from '../../gql/graphql'

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
    const {setUser} = useContext(UserContext)

    const navigate = useNavigate()

    const authCode = searchParams.get('code')

    // Reconstruct userContext from local storage
    const userId = localStorage.getItem('userId')
    const userEmail = localStorage.getItem('userEmail')
    const userFName = localStorage.getItem('userFName')
    const userLName = localStorage.getItem('userLName')

    const user: UserContextInfoFragment = {
        userId: parseInt(userId ?? ''),
        email: userEmail ?? '',
        firstName: userFName ?? '',
        lastName: userLName ?? '',
    }

    setUser(user)

    if (authCode) {
        executeMutation({
            input: {
                userId: parseInt(userId ?? ''),
                platformId: 3, // Hardcoded to Instagram platform ID from our backend
                authCode,
            },
        }).then((result) => {
            console.log(result)
            navigate('/settings/connectedAccounts')
        })
    }

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
