import { createReducer } from 'src/utils/createReducer';

import * as actionTypes from './actionTypes';

const classesInitialState = {
  listClass: []
};

function fetchClasses(state, action) {
  state.listClass = action.payload;
}

const handleActions = {
  [actionTypes.FETCH_CLASSES]: fetchClasses
};

const classesReducer = (initialState = classesInitialState, action) =>
  createReducer(initialState, action, handleActions);

export { classesReducer, classesInitialState };
