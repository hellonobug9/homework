export const storeLocalData = (key, data) => {
    return window.localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalData = key => {
    return JSON.parse(window.localStorage.getItem(key));
};

export const removeLocalData = key => {
    return window.localStorage.removeItem(key);
};
