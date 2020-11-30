import { getLocalData, storeLocalData, removeLocalData } from './localStorage';

const PREFIX = 'homework_token';
const REFRESH_PREFIX = 'refresh_homework_token';

export const setToken = token => {
  if (!token) {
    return null;
  }
  return storeLocalData(PREFIX, token);
};

export const getToken = () => {
  return getLocalData(PREFIX);
};

export const setRefreshToken = token => {
  if (!token) {
    return null;
  }
  return storeLocalData(REFRESH_PREFIX, token);
};

export const getRefreshToken = () => {
  return getLocalData(REFRESH_PREFIX);
};

export const isLoggedIn = () => Boolean(getToken());

export const removeToken = () => {
  removeLocalData(PREFIX);
};
export const removeRefreshToken = () => {
  removeLocalData(REFRESH_PREFIX);
};
