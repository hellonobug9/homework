import { useContext, useEffect, useMemo, useState } from 'react';

import axios from 'src/utils/axios';

import * as appActions from './actions';

import { AppStateContext, AppDispatchContext } from './context';

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }
  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

export const useApp = () => {

};
