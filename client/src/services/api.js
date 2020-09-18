import axios from 'axios';
import {
    getToken,
    removeToken
} from '../utils/auth';

export default class Service {
    constructor({ apiURL = '' }) {
        axios.defaults.headers.common.Accept = '*/*';
        const baseURL = apiURL || '';
        this.axios = axios.create({
            baseURL,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.axios.interceptors.request.use(config => {
            const token = getToken();
            const customHeaders = {};
            if (token) {
                customHeaders['Authorization'] = `Bearer ${token}`;
            }
            return Promise.resolve({
                ...config,
                headers: {
                    ...config.headers,
                    ...customHeaders,
                },
            });
        });

        this.axios.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                if (error.response.status === 401) {
                    // TODO: refresh token
                    removeToken();
                    window.location.assign(window.location);
                    return Promise.reject(error);
                }
                return Promise.reject(error);
            },
        );
    }

    toQueryString(obj) {
        const parts = [];
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            }
        }
        return parts.join('&');
    }

    async rest(action, params, options) {
        try {
            const opts = {
                url: action,
                method: options.method,
                data: params,
            };
            if (options?.headers && Object.keys(options.headers).length) {
                opts.headers = options.headers;
            }

            const response = await this.axios(opts);
            return response.data;
        } catch (error) {
            if (error?.message) {
                throw error.message;
            }
            throw error.response;
        }
    }

    postFormData(action, data) {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        return this.post(action, data, {
            headers,
        });
    }

    putFormData(action, data) {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        return this.put(action, data, {
            headers,
        });
    }

    get(action, params, options = {}) {
        const query = this.toQueryString(params);
        const path = query ? `${action}?${query}` : action;
        const { headers = {} } = options;

        return this.rest(path, null, {
            method: 'GET',
            headers,
        });
    }

    delete(action, params) {
        const query = this.toQueryString(params);
        const path = query ? `${action}?${query}` : action;
        return this.rest(path, null, {
            method: 'DELETE',
        });
    }

    post(action, data, options = {}) {
        const { headers = {} } = options;
        return this.rest(action, data, {
            method: 'POST',
            headers,
        });
    }

    put(action, data, options = {}) {
        const { headers = {} } = options;
        return this.rest(action, data, {
            method: 'PUT',
            headers,
        });
    }
}
