import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext';

const Components4 = () => {
 let cd = useContext(MyStore); 
 console.log(cd);
 
  return (
    <div>Components4 inside Components3</div>
  )
}

export default Components4