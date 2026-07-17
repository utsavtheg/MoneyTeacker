import React from 'react'
import {useForm} from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({setUsers, setToggle,users,updateData}) => {
  
  let {register,handleSubmit, reset,formState:{errors}} = useForm(
    
    {mode:"onChange",
    defaultValues:updateData,
    }
  );
  console.log("errors",errors);
  
  let formSubmit = (data) => {
   if(updateData){
    setUsers((prev) =>{
      return prev.map((val)=>{
        return val.id === updateData.id ?{...data}:val;
      });
    });
   }else{
    let arr = [...users, {...data,id:nanoid()}];
    console.log(arr);
    
    setUsers(arr);
    localStorage.setItem('users',JSON.stringify(arr));
   }
    reset();
    setToggle((prev) => !prev);
  }
  
  
  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-xl font-bold'>Create User</h1>
      <form onSubmit={handleSubmit(formSubmit)} className='w-90 flex flex-col gap-3 p-4 rounded border border-white'>
        <input {...register("name",{required:"Name is required",
          pattern:{
          value:/^(?!\s*$).+/,
          message:"Blank spaces are not allowed",
        },
        })} type="text"className='p-2 rounded outline-0 border border-white' placeholder="Name"/>
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}


        <input {...register("email",{required:"email is required",pattern:{
          value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message:"Please enter a valid email",
        },
        })} type="email" className='p-2 rounded outline-0 border border-white' placeholder="Email"/>
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        <input {...register("mobile",{required:"Mobile is required", minLength:{
          value:10,
          message:"Minimum 10 digits are required",
        },
        maxLength:{
          value:10,
          message:"Maximum 10 digits are required",
        },
        })} type="tel" className='p-2 rounded outline-0 border border-white' placeholder="Mobile"/>
       
        {errors.mobile && (<p className='text-red-500'>{errors.mobile.message}</p>)}
        <input {...register("image",{required:"Image is required"})} type="url" placeholder="Image" className='p-2 rounded outline-0 border border-white'/>
        {errors.image && <p className='text-red-500'>Image is required</p>}
        <button className='text-white bg-blue-700 p-2 rounded-xl cursor-pointer'>Add User</button>
      </form>
    </div>
  )
}

export default Form;
