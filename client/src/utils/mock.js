import AxiosMockAdapter from 'axios-mock-adapter';
import axios from './axios';

const mockInstance = new AxiosMockAdapter(axios, { delayResponse: 2000 });

export default mockInstance;
