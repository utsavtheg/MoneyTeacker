import { createContext,useState} from "react";

export let MyShop = createContext();
export const MyShopContextProvider = ({children}) => {

  const[isCartOpen,setIsCartOpen] = useState(false);
  const[cartItem, setCartItem] = useState([]);
  return( <MyShop.Provider value = {{isCartOpen,setCartItem,cartItem,setIsCartOpen}}>{children}</MyShop.Provider>
  );
}