import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Makeus from '../../../components/assets/Company/makeus.jpg'
import MakeUs from './makeus/MakeUs';
import Approch from '../../Home/APProchUs/Approch';

const MakesUsDifferent = () => {
  return (
    <>
    
    <div>
      <Navbarupp />
      </div>   
      <img
      src={Makeus}
      className=" object-cover"
      alt="Background Image"
      />
<MakeUs />
<Approch />

    </>
  )
}

export default MakesUsDifferent