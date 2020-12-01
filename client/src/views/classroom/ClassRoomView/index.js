import React from 'react';
import { ClassesProvider } from 'src/context/Classes';
import ListClass from './ListClass';

const ClassRoomView = () => {
  return (
    <ClassesProvider>
      <ListClass />
    </ClassesProvider>
  );
};

export default ClassRoomView;
