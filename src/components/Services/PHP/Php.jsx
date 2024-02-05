import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import PhpSolution from './PhpWebDevloSolution/PhpSolution';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Php = () => {
  return (
    <>
     <div>
        <Navbarupp />
      </div>


      <img
        src="https://www.aspirantsoftsolutions.com/img/innerpages/hire-php.jpg"
        className=" w-[100%]"
        alt="Background Image"
      />
      <PhpSolution />
    <Approch />
      <Footer />
    </>
  )
}

export default Php