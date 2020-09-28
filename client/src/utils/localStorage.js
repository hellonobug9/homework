const PREFIX = '__homework__';
const keyGenerator = key => `${PREFIX}${key}`;

export const storeLocalData = (key, data) => {
  return window.localStorage.setItem(keyGenerator(key), JSON.stringify(data));
};

export const getLocalData = key => {
  return JSON.parse(window.localStorage.getItem(keyGenerator(key)));
};

export const removeLocalData = key => {
  return window.localStorage.removeItem(keyGenerator(key));
};
