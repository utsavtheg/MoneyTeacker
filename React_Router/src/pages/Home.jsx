import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div>
      This is home page
      <Outlet/>
    </div>
  )
}

export default Home
