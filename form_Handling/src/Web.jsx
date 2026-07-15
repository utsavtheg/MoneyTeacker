import React, { useState } from 'react'


const Web = () => {
  // let arr = [2,4,5,6,8,9,0,8,7,6,5,4,3,2,1];
  // const[name,setName] = useState("");
  // const[email,setEmail] = useState("");
  // const[password,setPassword] = useState("");

  // optimal approach for many inputs like bankForm
 const[formData, setFormData] = useState({});
  console.log("formData->",formData);
  

const handleChange = (e) => {
  let {name,value} = e.target;
  setFormData({...formData, [name]:value });
};

  
  return (
    <div className='flex flex-col gap-5 w-60 p-10'>
     {/* {arr.map((elem,index) => {
      return <Card key={index}/>
     })} */}
     {/* <input onChange={(e) => {setName(e.target.value)}
     } type="text" placeholder='Name' />
     <input onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder='Email'/>
     <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder='Password' /> */
     }

   {/* brute force approach */}
     {/* <h1>This is name - {name}</h1>
     <h1>This is name - {email}</h1>
     <h1>This is name - {password}</h1> */}



     {/* optimal approach */}
     <input name="name" onChange={handleChange} type="text" className='border-2' placeholder='Name'/>
     <input name="email" onChange={handleChange} type="text" className='border-2' placeholder='Email'/>
     <input name="password" onChange={handleChange} type="email" className='border-2' placeholder='password'/>
     <h1>This is name-{formData.name}</h1>
     <h1>This is email-{formData.email}</h1>
     <h1>This is password-{formData.password}</h1>
    </div>
  )
}

export default Web
