import React, { useState } from 'react'
import {NavLink} from 'react-router'
import AppRoute from './routes/AppRoute'
import Navbar from './components/Navbar';


const App = () => {
  const[toggle, setToggle] = useState("home");
  return (
    <div className='h-screen p-3'>
    <Navbar/>
    <AppRoute/>
    </div>
  )
}

export default App
