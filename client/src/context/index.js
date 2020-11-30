import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';

function AppProviders({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { AppProviders };
