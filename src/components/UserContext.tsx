import {createContext} from 'react'
import {graphql} from '../gql'
import {UserContextInfoFragment} from '../gql/graphql'

export const UserContextInfoFragmentDocument = graphql(`
    fragment UserContextInfo on User {
        userId
        email
        firstName
        lastName
    }
`)

export type UserContextType = {
    user: UserContextInfoFragment | null
    setUser: React.Dispatch<React.SetStateAction<UserContextInfoFragment | null>>
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
})
