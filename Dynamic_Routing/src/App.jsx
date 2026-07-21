import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'


const App = () => {
  return (
    <div className='p-2 h-screen'>
      <div className=''>
        <Navbar/>
        <AppRoutes/>
      </div>
    </div>
  )
}

export default App