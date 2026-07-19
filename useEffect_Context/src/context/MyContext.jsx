import { createContext, useState} from "react";

export const MyStore = createContext(); 
  
export const ContextProvider = ({children}) => {
  const[isCartOpen, setIsCartOpen] = useState(false);

  const[cartItems, setCartItems] = useState([]); 
  console.log(cartItems);

  const increaseQuantity = (id) => {
    console.log(id);
    
  }


  return <MyStore.Provider value={{isCartOpen,setCartItems,setIsCartOpen,increaseQuantity,cartItems}}>{children}</MyStore.Provider>
}