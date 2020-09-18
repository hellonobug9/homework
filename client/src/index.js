import React from 'react';
import ReactDOM from 'react-dom';
import './assets/base.scss';
import App from './App';
import {AppProviders} from 'context';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
