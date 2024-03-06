import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import NextJs from '../../assets/Nextjs.png'
import WhyGoNextjs from './WhyGoNextJs/WhyGoNextjs';

import WhyChoose from './WhyChooseNext/WhyChoose';
import Approch from '../../Home/APProchUs/Approch';

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

    
    <Approch />


    </>
  )
}

export default NextJS