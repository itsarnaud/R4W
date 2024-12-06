import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Landing from './pages/landing.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
    ]
  }
])

const rootElement = document.getElementById('root')

if (rootElement) {
  const rootApp = createRoot(rootElement);
  rootApp.render(
    <StrictMode>
      <RouterProvider router={ router } />
    </StrictMode>
  )
}