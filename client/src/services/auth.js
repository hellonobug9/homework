import ApiService from 'utils/api';
const AUTH_ENDPOINT = window.location.hostname === 'localhost' ? 'http://localhost:5000' : process.env.HOMEWORK_AUTH_API_URL;

const Service = new ApiService({ apiURL: AUTH_ENDPOINT });
const endpoints = {
    signin: 'signin',
    signup: "signup"
};

export const userSignin = ({ email, password }) => {
    return Service.post(`/${endpoints.signin}`, { email, password });
};

export const userSignup = ({ email, password }) => {
    return Service.post(`/${endpoints.signin}`, { email, password });
};

