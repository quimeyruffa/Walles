import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Routes.css';
import {Auth0Provider} from '@auth0/auth0-react'
const domain = process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
ReactDOM.render(
  <Auth0Provider>
    domain={domain}
    clientId={clientId}
    redirecUrl={window.location.origin}
    <Routes />
  </Auth0Provider>,
 
  document.getElementById('root')
);
