import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Development from '../Reactjs/ReactDevelopmentCompany/Development';
import Benefits from './ReactImmenseBenefits/Benefits';
import SPYDReact from './HowSpydHelpsitsClientwithReact/SPYDReact';
import React1 from '../../assets/react.jpg'
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
        src={React1}
        className=" object-cover  w-[100%] h-[90%]"
        alt="Background Image"
      />
    <Development />
    <Benefits />
<SPYDReact />
<Approch />
      <Footer />
    </>
    </>
  )
}

export default Reactjs