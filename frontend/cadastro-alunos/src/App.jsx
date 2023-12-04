import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/app/Sidebar'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen flex'>


      <ToastContainer />

      <Sidebar />

      <Outlet />

      

    </div>
  )
}

export default App
