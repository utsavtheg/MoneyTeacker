import React, { useContext } from 'react'
import { MyShop } from '../Context/MyWebsite';

const Navbar = () => {
  let {setIsCartOpen} = useContext(MyShop);
  return (
    <div className='bg-black rounded p-5 flex items-center justify-between'>
     <div>logo</div>
     <div className='flex gap-10 text-xl text-white'>
      <p onClick={() =>setIsCartOpen(false)} className='cursor-pointer'>Home</p>
      <p onClick={() =>setIsCartOpen(true)} className='cursor-pointer'>Cart</p>
     </div>
     <button className='w-30 h-10 rounded-xl bg-cyan-500'>Login</button>
    </div>
  );
};

export default Navbar;
