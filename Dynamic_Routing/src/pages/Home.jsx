import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { MyStore } from '../context/MyContext';
import ProductsCard from '../components/ProductsCard';

const Home = ({product}) => {
  let {productsData, setProductsData} = useContext(MyStore);


  let getProductsData = async () => {
  try{
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
    
  }catch(error){
    console.log("error in api", error);
    
  }

};
useEffect(()=>{
  getProductsData();
},[])

  return (
    <div className='grid sm:grid-cols-2 gap-10 p-3 lg:grid-cols-5'>
      {productsData.map((val)=>{
        return <ProductsCard key ={val.id} product={val}/>

      })

      }
    </div>
  )
}

export default Home