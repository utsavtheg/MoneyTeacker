import React from "react";
import {useForm} from 'react-hook-form';

const CreateProduct = ({setProduct,product,setToggle,setUpdatedData}) => {
  let{register,handleSubmit,reset,formState:{errors}} = useForm({
    mode:"onChange",
    defaultValues:setUpdatedData,
  });
  const formSubmit = (data) => {
    let newProduct = {
      id:product.length+1,
      title:data.title,
      category:data.category,
      image:data.image,
      description:data.description,
      rating:{
        rate:Number(data.rating),
        count:Number(data.review),
      },
      price:Number(data.price),

    };
    setProduct((prev) => [...prev,newProduct]);
    alert("Product is create");
    // localStorage.setItem(JSON.stringify(arr));
    reset();
    setToggle((prev)=>!prev);

  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Product
        </h1>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

          {/* Title */}
          <div>
            <label className="block font-medium mb-2">
              Product Title
            </label>

            <input
              {...register("title",{
                required:"Tittle is required",
              })}
              type="text"
              placeholder="Enter product title"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              
            />
            {errors.title && <p className="text-red-300">Tittle is required</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-2">
              Category
            </label>

            <select
             {...register("category",{
                required:"cat is required",
              })}
             className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">

              <option>Men's Clothing</option>

              <option>Women's Clothing</option>

              <option>Electronics</option>

              <option>Jewelry</option>

              {errors.category && <p className="text-red-300">Category is required</p>}

            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium mb-2">
              Price
            </label>

            <input
             {...register("price",{
                required:"Price is required",
              })}
              type="number"
              placeholder="Enter price"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.price && <p className="text-red-300">Price is required</p>}
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-2">
              Image URL
            </label>

            <input
             {...register("image",{
                required:"Url is required",
              })}
              type="url"
              placeholder="https://example.com/image.png"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
             {errors.image && <p className="text-red-300">Image is required</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">
              Description
            </label>

            <textarea
             {...register("description",{
                required:"Description is required",
              })}
              rows="5"
              placeholder="Enter product description..."
              className="w-full border rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500"
            >
               {errors.description && <p className="text-red-300">Description is required</p>}
            </textarea>
          </div>

          {/* Rating */}
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block font-medium mb-2">
                Rating
              </label>

              <input
               {...register("rating",{
                required:"Rating is required",
              })}
                type="number"
                step="0.1"
                min="0"
                max="5"
                placeholder="4.5"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
               {errors.rating&& <p className="text-red-300">Rating is required</p>}
            </div>

            <div>
              <label className="block font-medium mb-2">
                Review Count
              </label>

              <input
               {...register("review",{
                required:"Review is required",
              })}
                type="number"
                placeholder="250"
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
               {errors.review && <p className="text-red-300">Review is required</p>}
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button
            onClick={()=>console.log(...register)
            }
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create Product
            </button>

            <button
              type="reset"
              className="flex-1 bg-gray-200 hover:bg-gray-300 py-3 rounded-lg font-semibold transition"
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateProduct;