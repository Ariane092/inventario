import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import { App, LoginPage } from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <ConfigProvider theme={{token:{colorPrimary: 'color: rgb(89, 170, 129)', itemHoverColor: 'red'}}}>
    <App />
    </ConfigProvider>
  </React.StrictMode>
);


// const rootlog = ReactDOM.createRoot(document.getElementById('rootlog'));
// root.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>
// );

