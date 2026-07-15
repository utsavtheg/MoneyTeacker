import React, {useState} from 'react';
const App = () => {
const [count, setCount] = useState(0);
const [user, setUser] = useState();
// let handleClick = () => {
//   setCount("Baman");
// }
  return (
    <div>
      <h1>User is - {user}</h1>
      <h1>Count is -{count}</h1>
      <button onClick={()=>{setCount(count+1);}}>Change inc</button>
      <button onClick={()=>{setUser(user++)}}>Change name</button>
    </div>
    
  );
}

export default App