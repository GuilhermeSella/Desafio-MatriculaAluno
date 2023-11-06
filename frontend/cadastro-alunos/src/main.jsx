import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ConsultaAlunos from '../src/pages/ConsultaAlunos.jsx'
import CadastroAlunos from '../src/pages/CadastroAlunos.jsx'

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/consultaAlunos",
        element: <ConsultaAlunos />
      },
      {
        path:"/cadastroAlunos",
        element: <CadastroAlunos />
      },
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={routes}/>
  </React.StrictMode>,
)
