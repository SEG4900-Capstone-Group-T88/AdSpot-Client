import {createContext} from 'react'
import {graphql} from '../gql'
import {UserBasicInfoFragment} from '../gql/graphql'

export const UserBasicInfoFragmentDocument = graphql(`
    fragment UserBasicInfo on User {
        userId
        email
        firstName
        lastName
    }
`)

export type UserContextType = {
    user: UserBasicInfoFragment | null
    setUser: React.Dispatch<React.SetStateAction<UserBasicInfoFragment | null>>
}

export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
})
