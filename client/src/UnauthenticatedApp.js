import {useRoutes} from 'react-router-dom';

/** Login, Register routes */
import {unAuthenticatedRoutes} from './Routes';

function UnauthenticatedApp() {
  const elements = useRoutes(unAuthenticatedRoutes);
  return elements;
}

export default UnauthenticatedApp;
