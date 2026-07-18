import { createContext, useState } from "react";

export const MyStore = createContext(); 

export const ContextProvider = ({children}) => {
  const[centralValue, setCentralValue] = useState("me context hu");
 return <MyStore.Provider value = {centralValue}>{children}</MyStore.Provider>
}; 