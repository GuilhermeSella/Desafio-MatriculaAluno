import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/app/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen flex n  '>

      <Sidebar />

      <Outlet />

    </div>
  )
}

export default App
