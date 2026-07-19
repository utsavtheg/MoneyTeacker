import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CartSection from './pages/CartSection';
import { MyStore } from './context/MyContext';


const App = () => {
  let {isCartOpen,setCartItems,cartItems} = useContext(MyStore);
  const[productData, setProductData] = useState([]);
  const getProductData = async() =>{
    try{
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);
      
    }catch (error){
      console.log("error in api",error);
      
    }
  };
  useEffect(()=>{
   getProductData();
  },[])
  
  return (
    <div className='h-screen p-2'>
      <Navbar/>
      {
        isCartOpen ? <div>
       <CartSection />
     </div>:
     <div className='p-5 sm:grid grid-cols-2 gap-5 lg:grid-cols-5 gap-10'>
        {
          productData.map((elem)=>{
            let isInCart = cartItems.find((val) => val.id === elem.id);
            console.log(isInCart);
            
           return <ProductCard key={elem.id} product={elem} isInCart={isInCart}/>
          })
        }
      </div>
      }
      
      {/* <ProductCard/> */}
     
    </div>
  )
}

export default App
