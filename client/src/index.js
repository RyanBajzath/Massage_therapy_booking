// import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";
import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const AUTH0_DOMAIN = process.env.REACT_APP_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

// console.log(AUTH0_DOMAIN, AUTH0_CLIENT_ID);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
