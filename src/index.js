import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, LoginPage } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const rootlog = ReactDOM.createRoot(document.getElementById('rootlog'));
// root.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>
// );

