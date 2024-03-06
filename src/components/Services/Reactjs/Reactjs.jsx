import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Development from '../Reactjs/ReactDevelopmentCompany/Development';
import Benefits from './ReactImmenseBenefits/Benefits';


import Approch from '../../Home/APProchUs/Approch';

const Reactjs = () => {

  return (
    <>
      <>
        <div>
          <Navbarupp />
        </div>


        <img
          src="https://www.paragyte.com/img/React_Banner.png"
          className=" w-full md:h-[500px]"
          alt="Background Image"
        />
        <Development />
        <Benefits />
       
        <Approch />

      </>
    </>
  )
}

export default Reactjs