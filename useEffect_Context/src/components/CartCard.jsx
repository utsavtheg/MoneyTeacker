import React from "react";

const CartCard = ({
  product,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex gap-6 hover:shadow-lg transition">

      {/* Image */}
      <div className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-28 h-28 object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">

        <div>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>

          <h2 className="font-bold text-lg mt-3 line-clamp-2">
            {product.title}
          </h2>

          <div className="flex items-center gap-3 mt-3">
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg text-sm">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-gray-400 text-sm">
              {product.rating.count} Reviews
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-end mt-5">

          <div>
            <h2 className="text-2xl font-bold text-green-600">
              ${product.price}
            </h2>

            <p className="text-sm text-gray-500">
              Subtotal: $
              {(product.price * product.quantity).toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">

            {/* Quantity */}
            <div className="flex items-center gap-3 border rounded-lg px-3 py-2">

              <button
                onClick={() => decreaseQuantity(product.id)}
                className="text-lg font-bold w-8 h-8 rounded bg-gray-200 hover:bg-gray-300"
              >
                −
              </button>

              <span className="font-semibold text-lg">
                {product.quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="text-lg font-bold w-8 h-8 rounded bg-blue-500 text-white hover:bg-blue-600"
              >
                +
              </button>

            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Remove
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default CartCard;