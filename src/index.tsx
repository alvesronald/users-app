import React from 'react';

import ReactDOM from 'react-dom';
import { AppThemeProvider } from 'contexts/theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

// eslint-disable-next-line @typescript-eslint/no-empty-function
console.log = () => {};
// eslint-disable-next-line @typescript-eslint/no-empty-function
console.error = () => {};

// eslint-disable-next-line @typescript-eslint/no-empty-function
console.warn = () => {};

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
