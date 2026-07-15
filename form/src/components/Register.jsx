import React, {useState} from 'react'

const Register = ({setToggle,setUsers}) => {

   const[formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    image:"",
   });
   
   const handleChange = (e) => {
    let{name, value} = e.target;
    setFormData({...formData, [name]:value});
  }
   const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({
      name:"",
      email:"",
      password:"",
      image:"",
    });
    
  };

  return (
       <div className='bg-white p-6 rounded-xl flex flex-col gap-4 w-[400px]'>
      <h1>Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 " action="">
    <input required value={formData.name} name="name" onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='name' />
    <input required value={formData.email} name="email" onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='Email' />
    <input required value={formData.password} name="password" onChange={handleChange}  className='p-2 border border-gray-400 rounded' type="password" placeholder='Password' />
    <input required value={formData.image} name="image" onChange={handleChange}  className='p-2 border border-gray-400 rounded' type="url" placeholder='image' />
    <button className='p-2 bg-blue-600 text-white rounded'>Register</button>
   </form>
   <p>
      Already have an Account?<span onClick={() => setToggle(true)} className='text-blue-600 cursor-pointer'>Login here</span>
    </p>
    </div>
  )
}

export default Register
