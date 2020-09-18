/**
 * AppProviders - will include other providers (for global)
 */
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

function AppProviders({children}) {
  return <Router>{children}</Router>;
}

export {AppProviders};
