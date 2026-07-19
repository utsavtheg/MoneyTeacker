import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../context/MyContext";

const CartSection = () => {
  let {cartItems} = useContext(MyStore);
  return (
    <div className="h-screen text-6xl">
     {cartItems.map((elem)=>{
      return <CartCard key={elem.id} product={elem}/>
     })

     }
    </div>
  );
};

export default CartSection;
