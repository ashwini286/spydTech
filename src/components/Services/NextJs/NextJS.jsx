import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import NextJs from '../../assets/Nextjs.png'
import WhyGoNextjs from './WhyGoNextJs/WhyGoNextjs';
import SPYDNextjs from './HowSpydHelpsitsClientwithNextJs/SPYDNextJs'
import WhyChoose from './WhyChooseNext/WhyChoose';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const NextJS = () => {
  return (
    <>
   <div>
        <Navbarupp />
      </div>


      <img
        src={NextJs}
        className="w-full"
        alt="Background Image"
      />
<WhyGoNextjs />
      <WhyChoose />
      {/* <SPYDNextjs /> */}
    
    <Approch />

<Footer />
    </>
  )
}

export default NextJS