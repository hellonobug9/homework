import {createReducer} from 'utils/createReducer';
import * as actionTypes from './actionTypes';
import {getLocalData} from 'utils/localStorage';

const authInitialState = {
  isSignIn: !!getLocalData('signIn_token'),
};

const handleActions = {
  [actionTypes.SIGN_IN]: signIn,
  [actionTypes.SIGN_OUT]: signUp,
  [actionTypes.SIGN_UP]: signOut,
};

function signIn(state, action) {
  state.isSignIn = true;
}

function signUp(state, action) {
  state.isSignIn = true;
}

function signOut(state, action) {
  state.isSignIn = false;
}
const authReducer = (initialState = authInitialState, action) =>
  createReducer(initialState, action, handleActions);

export {authReducer, authInitialState};
