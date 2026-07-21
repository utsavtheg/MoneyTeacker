import React from "react";
import { useNavigate } from "react-router";

const ProductsCard = ({ product, addToCart }) => {

  let navigate = useNavigate();
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Product Image */}
      <div onClick={()=>navigate(`/detail/${product.id}`)}
      className="h-64 bg-gray-100 flex items-center justify-center p-6">
        <img
          src={product.image}
           alt={product.title}
          className="h-full object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-4">

        <span className="w-fit bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <h2 className="text-lg font-bold line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-sm">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-sm text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <h2 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h2>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <button className="px-4 border rounded-lg hover:bg-gray-100 transition">
            ❤️
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductsCard;