import React from 'react';

import { threadsReducer, threadsInitialState } from './reducers';

const ThreadsStateContext = React.createContext();
const ThreadsDispatchContext = React.createContext();
ThreadsStateContext.displayName = 'ThreadsStateContext';
ThreadsDispatchContext.displayName = 'ThreadsDispatchContext';

function ThreadsProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    threadsReducer,
    threadsInitialState
  );

  return (
    <ThreadsStateContext.Provider value={state}>
      <ThreadsDispatchContext.Provider value={dispatch}>
        {children}
      </ThreadsDispatchContext.Provider>
    </ThreadsStateContext.Provider>
  );
}

export { ThreadsProvider, ThreadsStateContext, ThreadsDispatchContext };
