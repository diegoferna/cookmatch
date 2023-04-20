import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes as ReactRoutes,
    useLocation,
    Router,
    useNavigate,
    createBrowserRouter
  } from 'react-router-dom'
import Home from '../page/Home'
import App from '../App'
import Contact from '../page/Contact'
import Recipes from '../page/Recipes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            { 
                path: 'receitas',
                element: <Recipes />
            },
            { 
                path: 'contatos',
                element: <Contact />
            }
        ]
    },
    
])

  




