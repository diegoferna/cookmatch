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
import Receitas from '../page/Receitas'
import App from '../App'
import Contato from '../page/Contato'

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
                element: <Receitas />
            },
            { 
                path: 'contatos',
                element: <Contato />
            }
        ]
    },
    
])

  




