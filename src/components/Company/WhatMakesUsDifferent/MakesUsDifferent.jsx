import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Makeus from '../../../components/assets/Company/makeus.jpg'
import MakeUs from './makeus/MakeUs';
import Approch from '../../Home/APProchUs/Approch';

const MakesUsDifferent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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