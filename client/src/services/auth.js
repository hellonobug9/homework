import ApiService from './api';
const AUTH_ENDPOINT =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : process.env.HOMEWORK_AUTH_API_URL;

const Service = new ApiService({ apiURL: AUTH_ENDPOINT });
const endpoints = {
  signIn: 'signin',
  signUp: 'signup',
};

export const signInService = ({ email, password }) => {
  return Service.post(`/${endpoints.signIn}`, { email, password });
};

export const signUpService = ({ email, password }) => {
  return Service.post(`/${endpoints.signUp}`, { email, password });
};
