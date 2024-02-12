import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Card from './AboutUsCard/Card';
import VisionMission from '../Vision$Mission/VisionMission';
import { Link } from '@mui/material';
const AboutUS = () => {
  return (
    <>
    
    <div>
      <Navbarupp />
      </div>   
      <img
        src="https://wallpapers.com/images/hd/magnifying-glass-contact-us-ym1gw2pa0wuya73x.jpg"
        className=" object-cover  w-full h-[550px]"
        alt="Background Image"
      />
      <Card />
    
    
     

    </>
  )
}

export default AboutUS