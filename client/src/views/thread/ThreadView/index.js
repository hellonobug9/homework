import React from 'react';
import { ThreadsProvider } from 'src/context/Threads';
import { Outlet } from 'react-router-dom';

const ThreadView = () => {
  return (
    <ThreadsProvider>
      <Outlet />
    </ThreadsProvider>
  );
};

export default ThreadView;
