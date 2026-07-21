import React, { useContext } from 'react'
import logo from "../logo.png";
import { NavLink } from 'react-router';


const Navbar = () => {
  
  return (
    <div className='bg-black rounded-xl h-[100px] p-5 flex items-center justify-between'>
     <div>
      <img className='w-50' src={logo} alt="" />
     </div>
     <div className='flex gap-10 text-xl text-white'>
     <NavLink to={"/"}>Home</NavLink>
     <NavLink to={"/about"}>About</NavLink>
     <NavLink to={"/product"}>Product</NavLink>

     </div>
     <button className='w-30 h-10 rounded-xl bg-cyan-500'>Login</button>
    </div>
  );
};

export default Navbar;