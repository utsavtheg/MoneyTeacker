import React, { useContext } from "react";
import { MyShop } from "./Context/MyWebsite";

const Cart = () => {
  let {cartItem} = useContext(MyShop);
  const totalPrice = cartItem.reduce((total,product) => total+product.price,0);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">🛒 Shopping Cart</h1>

      {cartItem.length === 0 ? (
        <div className="h-80 flex flex-col justify-center items-center gap-4 border rounded-xl">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-500">
            Add some amazing products to your cart.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cartItem.map((product) => (
              <div
                key={product.id}
                className="flex gap-5 p-5 rounded-xl shadow border"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-contain"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold text-lg line-clamp-2">
                      {product.title}
                    </h2>

                    <p className="text-sm text-gray-500 capitalize mt-1">
                      {product.category}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <h3 className="text-2xl font-bold text-green-600">
                      ${product.price}
                    </h3>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit sticky top-5 border rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Total Items</span>
              <span>{cartItem.length}</span>
            </div>


            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;