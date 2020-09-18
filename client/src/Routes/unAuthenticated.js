import React from 'react';
import {Navigate} from 'react-router-dom';

const NotFound = React.lazy(() => import('../screens/NotFound'));
const LoginScreen = React.lazy(() => import('../screens/Login'));
const RegisterScreen = React.lazy(() => import('../screens/Register'));

const unAuthenticatedRoutes = [
  {
    path: '/',
    element: <Navigate to="login" />,
  },
  {
    path: '/',
    children: [
      {
        path: 'login',
        element: <LoginScreen />,
      },
      {
        path: 'register',
        element: <RegisterScreen />,
      },
    ],
  },
  // Not found routes work as you'd expect
  {path: '*', element: <NotFound />},
];

export {unAuthenticatedRoutes};
