import AxiosMockAdapter from 'axios-mock-adapter';
import axios from './axios';

const mockInstance = new AxiosMockAdapter(axios, { delayResponse: 1000 });

export default mockInstance;
