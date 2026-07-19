import React, { useEffect } from 'react'

const About = () => {
  let interval = setInterval(()=>{
    console.log("hey i m in about");
    
  },1000);

  useEffect(()=>{
    console.log("About rendering...");

    return ()=>{
      clearInterval(interval);
      console.log("i m triggered kuki about jaa chuka hai");
      
    };
  
    
  },[]);
  return (
    <div>About</div>
  )
}

export default About