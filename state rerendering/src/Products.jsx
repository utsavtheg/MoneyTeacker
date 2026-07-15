import React from 'react'

const Products = ({product,del}) => {
 
  
  return (
    <div className='p-2 border-2 w-[400px] h-[500px] flex flex-col rounded'>
      <div className='w-50 h-50 mt-20 ml-20'>
        <img className='w-50 h-50' src={product.image} alt="" />
      </div>
      <div>
        <h2 className='font-semibold mt-10 mb-5 text-lg'>Name of the Product:{product.title}</h2>
        <p className='text-xs'>Category:{product.category}</p>
        <p>Price:₹{product.price}</p>
      </div>
      <button className='p-2 bg-red-300 w-[200px] rounded-2xl ml-20' onClick={()=> del(product.id)}>Delete</button>
    </div>
  ) 
}

export default Products
