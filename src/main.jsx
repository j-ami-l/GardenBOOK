import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Router/Router.jsx'
import AuthProvider from './Provider/Authprovider.jsx'
import UserInfoProvider from './Provider/UserInfoProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <UserInfoProvider>
        <RouterProvider router={router}></RouterProvider></UserInfoProvider>
    </AuthProvider>
  </StrictMode>,
)
