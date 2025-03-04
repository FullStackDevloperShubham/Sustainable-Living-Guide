import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// auth0
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
    <Auth0Provider 
   domain="dev-6oit16hd66vxpvzv.us.auth0.com"
   clientId="DbotOJuCLXpPv1BKyIh4kQplX7tlvBlu"
   authorizationParams={{
     redirect_uri: window.location.origin
   }}
    >
      <App />
    </Auth0Provider>
)
