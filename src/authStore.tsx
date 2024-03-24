const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh_token';

export const saveAuthData = ({ token, refreshToken }: { token: string | null; refreshToken: string | null}) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    }

    if (refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const clearStorage = () => {
  localStorage.clear();
};