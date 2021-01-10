import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from 'src/components/GlobalStyles';
import routes from 'src/routes';
import { AppProviders } from 'src/context';
import 'src/mixins/chartjs';
import 'src/mocks';

const App = () => {
  console.log("Hello from test2")
  const routing = useRoutes(routes);
  return (
    <AppProviders>
      <GlobalStyles />
      {routing}
    </AppProviders>
  );
};
export default App;
