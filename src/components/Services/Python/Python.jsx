import React from 'react';
import Hero from '../../assets/Java/python.png';
import Navbarupp from "../../Home/Navbar/Navbarupp";
import PythonAppDevelopment from './PythonAppDevelopment/PythonAppDevelopment';
import PythonExpertise from './PythonExpertise/pythonExpertise';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Python = () => {
  return (
    <>
     <div>
        <Navbarupp />
      </div>
      <img
        src={Hero}
        className=" w-[100%]"
        alt="Background Image"
      />

      <PythonAppDevelopment />
      <PythonExpertise />
      <Approch />
      <Footer />
    </>
  )
}

export default Python