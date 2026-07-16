import React,{useRef, useState} from 'react'

const Form = () => {
  const[products, setProducts] = useState({});
 let formRef = useRef({});
 console.log(formRef);
  
  const handleSubmit=(e)=>{
   e.preventDefault();
   let obj = {
   pName:formRef.current.productName.value,
   price:formRef.current.price.value,
   category:formRef.current.category.value,
   image:formRef.current.image.value,
   
   };
   setProducts(obj);
   
  }; 

  return (
    <div className='w-80 h-screen'>
      <form onSubmit={handleSubmit} className='flex p-6 bg-white rounded flex-col gap-4'>
        <input 
        ref = {(e) => (formRef.current.productName = e)}
        // onChange={(e)=>setFormData({...formData, productName:e.target.value})}
         className='p-2 border border-gray-400 rounded'type="text" placeholder='Product name'/>
         
        <input
         ref = {(e) => (formRef.current.price = e)}
        //  onChange={(e)=>setFormData({...formData, Price:e.target.value})} 
         className='p-2 border border-gray-400 rounded' type="text" placeholder='Price' />
        <span>Select Category:</span>
        <select  ref = {(e) => (formRef.current.category = e)}
         className='p-2 border border-gray-400 rounded' name="" id=""
        //  onChange={(e)=>setFormData({...formData, Category:e.target.value})}
         >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input 
         ref = {(e) => (formRef.current.image = e)}
        // onChange={(e)=>setFormData({...formData, Image:e.target.value})}
        
        className='p-2 border border-gray-400 rounded' type="text" placeholder='image'/>
        <button className='p-2 bg-blue-600 text-white rounded uppercase'>Create</button>
      </form>
      <h1>{products.pName}</h1>
      <h1>{products.price}</h1>
      <h1>{products.category}</h1>
      <h1>{products.image}</h1>
    </div>
  )
}

export default Form