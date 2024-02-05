import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Reactjs from './ReactJs/Reactjs';
import React1 from '../../assets/React1.png'
import AngularJs from './AngularJs/AngularJs';
import NextJs from './NextJs/Next';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Frontend = () => {
  return (
    <>
      <div>
        <Navbarupp />
      </div>


      <img
        src={React1}
        className="w-full"
        alt="Background Image"
      />
     <Reactjs />
     <NextJs />
      <AngularJs />

<Approch />

<Footer />
    </>
  )
}

export default Frontend