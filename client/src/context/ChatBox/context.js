import React from 'react';

import { chatBoxReducer, chatBoxInitialState } from './reducers';

const ChatBoxStateContext = React.createContext();
const ChatBoxDispatchContext = React.createContext();
ChatBoxStateContext.displayName = 'ChatBoxStateContext';
ChatBoxDispatchContext.displayName = 'ChatBoxDispatchContext';

function ChatBoxProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    chatBoxReducer,
    chatBoxInitialState
  );

  return (
    <ChatBoxStateContext.Provider value={state}>
      <ChatBoxDispatchContext.Provider value={dispatch}>
        {children}
      </ChatBoxDispatchContext.Provider>
    </ChatBoxStateContext.Provider>
  );
}

export { ChatBoxProvider, ChatBoxStateContext, ChatBoxDispatchContext };
