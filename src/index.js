import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ConfigProvider } from "antd";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "color: rgb(89, 170, 129)",
          fontFamily: "Open Sans",
          colorSuccessBorder: "none",
          colorErrorBorder: "none",
          defaultBg: "rgb(55, 119, 87)",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
