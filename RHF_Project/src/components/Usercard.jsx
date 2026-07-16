import React from 'react'

const Usercard = ({user}) => {
  return (
    <div className='p-4 border border-white bg-black rounded flex flex-col gap-2'>
       <div className='h-40 w-40 rounded-xl'>
        <img className='object-cover h-full w-full' src={user.image} alt="" />
       </div>
       <div className='flex flex-col gap-1'>
        <h1 className='text-white'>{user.name}</h1>
        <p className='text-sm text-white'>{user.email}</p>
        <h1 className='text-sm text-white'>{user.contact}</h1>
       </div>
       <div className='flex w-full items-center justify-between gap-4'>
       <button className='bg-yellow-700 text-white py-2 px-3 rounded'>Update</button>
       <button className='bg-red-700 text-white py-2 px-3 rounded'>Delete</button>
       </div>
       
    </div>
  )
}

export default Usercard
