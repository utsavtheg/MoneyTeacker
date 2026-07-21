import { createContext, useState } from "react";

export const MyStore = createContext();



export const ContextProvider = ({children}) => {

  const[productsData, setProductsData] = useState([]);
  const[singleProductData, setSingleProductData] = useState({});
  return<MyStore.Provider value={{productsData, setProductsData,singleProductData,setSingleProductData}}>{children}</MyStore.Provider>
}