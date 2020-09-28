import {createAction} from 'utils/createAction';

import * as actionTypes from './actionTypes';

export const signIn = () => createAction(actionTypes.SIGN_IN);

export const signUp = () => createAction(actionTypes.SIGN_UP);

export const signOut = () => createAction(actionTypes.SIGN_OUT);
