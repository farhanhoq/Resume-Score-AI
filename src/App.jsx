import { useState } from 'react'
import './App.css'
import { SideBar } from './component/Sidebar/sideBar'
import { Route, Routes } from 'react-router-dom'
import Admin from './component/Admin/Admin'
import DashBoard from './component/Dashboard/DashBoard'
import History from './component/History/History'
import { Login } from './component/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SideBar />
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
    </div>
  )
}

export default App
