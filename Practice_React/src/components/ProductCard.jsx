import React from "react";

const ProductCard = ({ product, del,setToggle,setUpdatedData}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-5">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-4">

        {/* Category */}
        <span className="w-fit px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs capitalize font-medium">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating & Price */}
        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md text-sm font-semibold">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-sm text-gray-400">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>

        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">

          <button
            onClick={setToggle,setUpdatedData(product)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Update
          </button>

          <button
            onClick={() => del(product.id)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;