import React from 'react';

import { appReducer, appInitialState } from './reducers';

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();
AppStateContext.displayName = 'AppStateContext';
AppDispatchContext.displayName = 'AppDispatchContext';

function AppProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    appReducer,
    appInitialState
  );

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export { AppProvider, AppStateContext, AppDispatchContext };
