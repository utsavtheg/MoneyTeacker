import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const About = () => {
  let navigate = useNavigate();
  return (
    <div>
      This is about page
      <button onClick={()=>navigate('/about/nested')}>Nested ko dkh</button>
      <Outlet/>
    </div>
  )
}

export default About
