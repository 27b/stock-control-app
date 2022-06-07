import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/app.css';
import reportWebVitals from './reportWebVitals';
import App from './App/App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
