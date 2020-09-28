import { useCallback, useState, useMemo } from 'react';
// import {useNavigate} from 'react-router-dom';
/** dispatch actions */
import * as authActions from '../actions';
/** context */
import { useAuthState, useAuthDispatch } from '../context';

import { signInService, signUpService } from 'services/auth';

import { storeLocalData } from 'utils/localStorage';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState(null);
  const [errorSignUp, setErrorSignUp] = useState(null);
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const signIn = useCallback(
    ({ email, password }) => {
      setLoading(true);
      const signInProcess = async () => {
        try {
          const data = await signInService({ email, password });
          const { token } = data;
          storeLocalData('signIn_token', token);
          dispatch(authActions.signIn());
          setLoading(false);
        } catch (error) {
          console.log('Error =>', error);
          setErrorSignIn(error);
          setLoading(false);
        }
      };
      signInProcess();
    },
    [dispatch],
  );

  const signUp = useCallback(
    ({ email, password }) => {
      setLoading(true);
      const signUpProcess = async () => {
        try {
          const data = await signUpService({ email, password });
          const { token } = data;
          storeLocalData('signIn_token', token);
          dispatch(authActions.signUp());
          setLoading(false);
        } catch (error) {
          console.log('Error =>', error);
          setErrorSignUp(error);
          setLoading(false);
        }
      };
      signUpProcess();
    },
    [dispatch],
  );

  const errors = useMemo(
    () =>
      new Map([
        ['signIn', errorSignIn],
        ['signUp', errorSignUp],
      ]),
    [errorSignIn, errorSignUp],
  );

  // console.log('error', Array.from(errors.values()))

  return {
    isSignIn: state.isSignIn,
    signIn,
    signUp,
    loading,
    hookErrors: errors,
  };
};
