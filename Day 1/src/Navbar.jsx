import React from 'react'

function navbar() {
  return (
    <div style = {{display:"flex",
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around',
     padding:'2rem',
     width:'100%',
    }}>
      <div className="left" style={{color:'#CCFF00'}}>
        <h3>KINETIC IRON</h3>
      </div>
       <div className="middle"style = {{display:"flex",
    alignItems:'center',
    gap:'1rem',
    color:"1E1E1E",
    

    }}>
        <a href="#" style = {{textDecoration:'none'}}>Workouts</a>
        <a href="#" style = {{textDecoration:'none'}}>Classes</a>
        <a href="#" style = {{textDecoration:'none'}}>Membership</a>
        <a href="#" style = {{textDecoration:'none'}}>Locations</a>
       </div>
      <div className="right">
         <button style={{color:"#121212",background:'#CCFF00',height:'2rem',borderRadius:'0.5rem'}}>Join Now</button>
      </div>
    </div>
   
  )
}

export default navbar
