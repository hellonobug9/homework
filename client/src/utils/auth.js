import { getLocalData, storeLocalData, removeLocalData } from './localStorage';
const localStorageKey = '__homework_token__';
const refreshTokenKey = '__homework_refresh_token__';

export const setToken = token => {
    if (!token) {
        return null;
    }
    return storeLocalData(localStorageKey, token);
};

export const getToken = () => {
    return getLocalData(localStorageKey);
};

export const setRefreshToken = token => {
    if (!token) {
        return null;
    }
    return storeLocalData(refreshTokenKey, token);
};

export const getRefreshToken = () => {
    return getLocalData(refreshTokenKey);
};

export const isLoggedIn = () => Boolean(getToken());

export const removeToken = () => {
    removeLocalData(localStorageKey);
};
export const removeRefreshToken = () => {
    removeLocalData(refreshTokenKey);
};

