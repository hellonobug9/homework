import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { AppProvider } from './App'
import theme from 'src/theme';

function AppProviders({ children }) {
  return <ThemeProvider theme={theme}><AppProvider>{children}</AppProvider></ThemeProvider>;
}

export { AppProviders };
