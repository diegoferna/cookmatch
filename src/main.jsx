import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { DatabaseContextProvider } from './context'
import { router } from './routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DatabaseContextProvider>
      <RouterProvider router={router} />
    </DatabaseContextProvider>
  </React.StrictMode>,
)
