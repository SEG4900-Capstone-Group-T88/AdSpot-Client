import {jwtDecode, JwtPayload} from 'jwt-decode'

const TOKEN_KEY = 'token'
const REFRESH_TOKEN_KEY = 'refresh_token'

export const saveAuthData = (token: string) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token)
    }
}

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY)
}

export const isTokenValid = (token: string | null) => {
    if (token === null) return false

    const decoded = jwtDecode<JwtPayload>(token)
    return decoded.exp && decoded.exp > Date.now() / 1000
}

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const clearStorage = () => {
    localStorage.clear()
}
