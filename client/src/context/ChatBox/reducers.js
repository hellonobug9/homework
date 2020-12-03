import { createReducer } from 'src/utils/createReducer';

import * as actionTypes from './actionTypes';

const chatBoxInitialState = {};

const handleActions = {};

const chatBoxReducer = (initialState = chatBoxInitialState, action) =>
  createReducer(initialState, action, handleActions);

export { chatBoxReducer, chatBoxInitialState };
