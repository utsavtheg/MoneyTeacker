import React, { useContext } from 'react'
import { MyShop } from '../Context/MyWebsite'

const ProductCard = ({product}) => {
  let {setCartItem} = useContext(MyShop);
  return (
    <div className="w-72 rounded-2xl shadow-lg border border-gray-200 bg-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  
  <div className="h-64 p-6 flex items-center justify-center bg-gray-100">
    <img
      src={product.image}
      alt={product.title}
      className="h-full object-contain hover:scale-105 transition-all duration-300"
    />
  </div>

  <div className="p-5 flex flex-col gap-3">

    <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full w-fit capitalize">
      {product.category}
    </span>

    <h2 className="font-bold text-lg line-clamp-2">
      {product.title}
    </h2>

    <p className="text-gray-500 text-sm line-clamp-3">
      {product.description}
    </p>

    <div className="flex items-center justify-between">
      <h3 className="text-2xl font-bold text-green-600">
        ${product.price}
      </h3>

      <div className="flex items-center gap-1">
      
        <span>{product.rating.rate}</span>
        <span className="text-gray-400">
          ({product.rating.count})
        </span>
      </div>
    </div>

    <button onClick={()=>setCartItem(prev => [...prev,product])} className="bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
      Add to Cart
    </button>

  </div>
</div>
  )
}

export default ProductCard
