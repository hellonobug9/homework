import { useContext, useEffect, useMemo, useState } from 'react';

import axios from 'src/utils/axios';

import * as chatBoxActions from './actions';

import { ChatBoxStateContext, ChatBoxDispatchContext } from './context';

const useChatBoxState = () => {
  const context = useContext(ChatBoxStateContext);
  if (context === undefined) {
    throw new Error('useChatBoxState must be used within a ChatBoxProvider');
  }
  return context;
};

const useChatBoxDispatch = () => {
  const context = useContext(ChatBoxDispatchContext);
  if (context === undefined) {
    throw new Error('useChatBoxDispatch must be used within a ChatBoxProvider');
  }
  return context;
};

export const useChatBox = () => {
  return {};
};
