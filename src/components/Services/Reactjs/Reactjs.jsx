import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Development from '../Reactjs/ReactDevelopmentCompany/Development';
import Benefits from './ReactImmenseBenefits/Benefits';
import SPYDReact from './HowSpydHelpsitsClientwithReact/SPYDReact';
import React1 from '../../assets/React1.png';

import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Reactjs = () => {
  
  return (
    <>
      <>
      <div>
        <Navbarupp />
      </div>


      <img
        src="https://www.paragyte.com/img/React_Banner.png"
        className=" w-full h-[500px]"
        alt="Background Image"
      />
    <Development />
    <Benefits />
{/* <SPYDReact /> */}
<Approch />
      <Footer />
    </>
    </>
  )
}

export default Reactjs