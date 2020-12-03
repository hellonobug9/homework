import { useContext, useEffect, useMemo, useState } from 'react';

import axios from 'src/utils/axios';

import * as threadsActions from './actions';

import { ThreadsStateContext, ThreadsDispatchContext } from './context';

const useThreadsState = () => {
  const context = useContext(ThreadsStateContext);
  if (context === undefined) {
    throw new Error('useThreadsState must be used within a ThreadsProvider');
  }
  return context;
};

const useThreadsDispatch = () => {
  const context = useContext(ThreadsDispatchContext);
  if (context === undefined) {
    throw new Error('useThreadsDispatch must be used within a ThreadsProvider');
  }
  return context;
};

export const useThreads = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const state = useThreadsState();
  const dispatch = useThreadsDispatch();
  useEffect(() => {
    const fetchListThread = async () => {
      try {
        const response = await axios.get('/threads');
        dispatch(threadsActions.fetchThreads(response.data.threads));
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(false);
      }
    };
    fetchListThread();
  }, [dispatch]);

  const listThread = useMemo(() => state.listThread, [state.listThread]);
  return {
    error,
    loading,
    listThread
  };
};

export const useThreadDetail = id => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const state = useThreadsState();
  const dispatch = useThreadsDispatch();
  useEffect(() => {
    const fetchThreadDetail = async () => {
      try {
        const response = await axios.get(`/threads/${id}`);
        dispatch(threadsActions.fetchThreadDetail(response.data.thread));
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(false);
      }
    };
    fetchThreadDetail();
  }, [dispatch]);

  const currentThreadDetail = useMemo(() => state.currentThreadDetail, [
    state.currentThreadDetail
  ]);
  return {
    error,
    loading,
    currentThreadDetail
  };
};
