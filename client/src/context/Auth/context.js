/**
 * Authentication context and provider
 */
import React, {useReducer, useContext} from 'react';

import {authReducer, authInitialState} from './reducer';

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();
AuthStateContext.displayName = 'AuthStateContext';
AuthDispatchContext.displayName = 'AuthDispatchContext';

function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
}

function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
}

function AuthProvider({children}) {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export {AuthProvider, useAuthState, useAuthDispatch};
