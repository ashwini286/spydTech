import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Makeus from '../../../components/assets/Company/makeus.jpg'
import MakeUs from './makeus/MakeUs';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const MakesUsDifferent = () => {
  return (
    <>
    
    <div>
      <Navbarupp />
      </div>   
      <img
      src={Makeus}
      className=" object-cover w-full"
      alt="Background Image"
      />
<MakeUs />
<Approch />
<Footer />
    </>
  )
}

export default MakesUsDifferent