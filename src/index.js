import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConfigProvider } from 'antd';
import { App, LoginPage } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
    <ConfigProvider theme={{token:{colorPrimary: 'rgba(108, 148, 118, 0.466)'}}}>
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

