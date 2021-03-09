import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const CLIENTID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
  domain = {DOMAIN}
  clientId = {CLIENTID}
  redirectUri = {window.location.origin}>
    <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

