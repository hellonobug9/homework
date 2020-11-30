import React from 'react';

import { classesReducer, classesInitialState } from './reducers';

const ClassesStateContext = React.createContext();
const ClassesDispatchContext = React.createContext();
ClassesStateContext.displayName = 'ClassesStateContext';
ClassesDispatchContext.displayName = 'ClassesDispatchContext';

function ClassesProvider({ children }) {
  const [state, dispatch] = React.useReducer(
    classesReducer,
    classesInitialState
  );

  return (
    <ClassesStateContext.Provider value={state}>
      <ClassesDispatchContext.Provider value={dispatch}>
        {children}
      </ClassesDispatchContext.Provider>
    </ClassesStateContext.Provider>
  );
}

export { ClassesProvider, ClassesStateContext, ClassesDispatchContext };
