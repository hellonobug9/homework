import React from 'react';
import { useClasses } from 'src/context/Classes';

const ListClass = () => {
  const { listClass } = useClasses();
  console.log('listClass', listClass);
  return <div>ListClass</div>;
};

export default ListClass;
