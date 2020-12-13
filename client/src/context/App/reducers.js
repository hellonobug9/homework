import { createReducer } from 'src/utils/createReducer';

import * as actionTypes from './actionTypes';

const appInitialState = {
  drawer: null
};

function toggleDrawer(state, action) {
  state.drawer = action.payload;
}

const handleActions = {
  [actionTypes.TOGGLE_DRAWER]: toggleDrawer
};


const appReducer = (initialState = appInitialState, action) =>
  createReducer(initialState, action, handleActions);

export { appReducer, appInitialState };
