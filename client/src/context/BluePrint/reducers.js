import { createReducer } from 'src/utils/createReducer';

import * as actionTypes from './actionTypes';

const threadsInitialState = {
  listThread: [],
  currentThreadDetail: null
};

function fetchThreads(state, action) {
  state.listThread = action.payload;
}

function fetchThreadDetail(state, action) {
  state.currentThreadDetail = action.payload;
}

const handleActions = {
  [actionTypes.FETCH_THREADS]: fetchThreads,
  [actionTypes.FETCH_THREAD_DETAIL]:  fetchThreadDetail
};


const threadsReducer = (initialState = threadsInitialState, action) =>
  createReducer(initialState, action, handleActions);

export { threadsReducer, threadsInitialState };
