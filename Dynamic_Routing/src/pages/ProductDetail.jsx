import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { MyStore } from '../context/MyContext';

const ProductDetail = () => {
  let {singleProductData,setSingleProductData} = useContext(MyStore);
  console.log(singleProductData);
  
  let {id} = useParams();
  let getSingleProductData = async () => {
    try{
     let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
     setSingleProductData(res.data);
     
    }catch (error){
      console.log("Detail api error", error);
      

    }
  };
  useEffect(()=>{
    getSingleProductData();
  },[]);
  
  
  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8">

        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="w-full max-w-md h-[450px] object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          <span className="inline-block w-fit bg-blue-100 text-blue-700 px-4 py-2 rounded-full capitalize text-sm font-semibold">
            {singleProductData.category}
          </span>

          <h1 className="text-4xl font-bold mt-5 leading-tight">
            {singleProductData.title}
          </h1>

          <div className="flex items-center gap-4 mt-5">

            <div className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg font-semibold">
              ⭐ {singleProductData.rating?.rate}
            </div>

            <p className="text-gray-500">
              {singleProductData.rating?.count} Reviews
            </p>

          </div>

          <h2 className="text-5xl font-bold text-green-600 mt-6">
            ${singleProductData.price}
          </h2>

          <p className="text-gray-600 leading-8 mt-6">
            {singleProductData.description}
          </p>

          {/* Features */}
          <div className="mt-8 space-y-3">

            <div className="flex items-center gap-2">
              ✅ Free Delivery
            </div>

            <div className="flex items-center gap-2">
              🔄 7 Days Replacement
            </div>

            <div className="flex items-center gap-2">
              💳 Secure Payment
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <button
              onClick={() => addToCart(singleProductData)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
            >
              Add to Cart
            </button>

            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl text-lg font-semibold transition">
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetail;