import React, { useContext, useEffect, useState } from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import { MyStore } from './context/MyContext'
import axios from 'axios';

const App = () => {
  
  let {setCount} = useContext(MyStore);
  let {count} = useContext(MyStore);
  const[apiData,setApiData] = useState(null);
  console.log("apiData",apiData);
  

let getData = async() => {
  let res = await axios.get("https://fakestoreapi.com/products");
  // console.log(res.data);
  setApiData(res.data);

};
useEffect(()=>{
  getData();
},[])
  
  return (
    <div>App
      <h1>Hello - {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <Home/>
      <Contact/>
      <About/>
    </div> 
    
  )
}

export default App
