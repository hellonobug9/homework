import {useRoutes} from 'react-router-dom';
import {unAuthenticatedRoutes} from './Routes';

function UnauthenticatedApp() {
  const elements = useRoutes(unAuthenticatedRoutes);
  return elements;
}

export default UnauthenticatedApp;
