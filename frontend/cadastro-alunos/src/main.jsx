import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import consultaAlunos from './pages/consultaAlunos.jsx'
import cadastroAlunos from './pages/cadastroAlunos.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/consultaAlunos",
        element: <consultaAlunos />
      },
      {
        path:"/cadastroAlunos",
        element: <cadastroAlunos />
      },
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={routes}/>
  </React.StrictMode>,
)
