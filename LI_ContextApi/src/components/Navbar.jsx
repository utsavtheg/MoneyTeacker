import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='p-4 h-[100px] flex rounded-3xl items-center bg-black justify-between'>
      <div>
      <img className='w-[100px] rounded-full' src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369989.png" alt="" />
      </div>
      <div className='flex gap-6 font-semibold text-white'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => setToggle((prev) => !prev)} className='p-2 bg-blue-700 text-white cursor-pointer rounded'>Create User</button>
    </div>
  )
}

export default Navbar
