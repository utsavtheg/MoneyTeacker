import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
   <div className='cursor-pointer'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/service'}>Services</NavLink>

    {/* <span>Home</span>

    <span>About</span>
    
    <span>Services</span> */}
   </div>
  )
}

export default Navbar