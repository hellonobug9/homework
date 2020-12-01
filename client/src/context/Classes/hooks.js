import { useContext, useEffect, useMemo, useState } from 'react';

import axios from 'src/utils/axios';

import * as classesActions from './actions';

import { ClassesStateContext, ClassesDispatchContext } from './context';

const useClassesState = () => {
  const context = useContext(ClassesStateContext);
  if (context === undefined) {
    throw new Error('useClassesState must be used within a ClassesProvider');
  }
  return context;
};

const useClassesDispatch = () => {
  const context = useContext(ClassesDispatchContext);
  if (context === undefined) {
    throw new Error('useClassesDispatch must be used within a ClassesProvider');
  }
  return context;
};

export const useClasses = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const state = useClassesState();
  const dispatch = useClassesDispatch();
  useEffect(() => {
    const fetchListClass = async () => {
      try {
        const response = await axios.get('/classes');
        dispatch(classesActions.fetchClasses(response.data.classes));
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        setError(false);
      }
    };
    fetchListClass();
  }, [dispatch]);

  const listClass = useMemo(() => state.listClass, [state.listClass]);
  return {
    error,
    loading,
    listClass
  };
};
