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
        src="https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png"
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