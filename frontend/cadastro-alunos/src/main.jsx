import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ConsultaAlunos from '../src/pages/ConsultaAlunos.jsx'
import CadastroAlunos from './pages/cadastroAlunos.jsx'
import EditarAluno from './pages/EditarAluno.jsx'
import { AlunoProvider } from './contexts/AlunoContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient();

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
      {
        path:"/editarAluno/:ra",
        element: <EditarAluno />
      }
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <AlunoProvider>
        <RouterProvider  router={routes}/>
      </AlunoProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
