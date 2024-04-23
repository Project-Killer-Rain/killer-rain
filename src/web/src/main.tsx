import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
<Auth0Provider
  domain = "dev-c5d4pao2phwjp4nz.us.auth0.com"
  clientId="hhIGVyi5Lc3xz3QrfJoX7nkyCiDn9p1D"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>,
)
