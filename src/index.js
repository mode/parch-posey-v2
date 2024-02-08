import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './main-page/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Performance measurement for your app. To use, pass a function to log results, for example:
// reportWebVitals(console.log)
// For more information, visit: https://bit.ly/CRA-vitals
reportWebVitals();
