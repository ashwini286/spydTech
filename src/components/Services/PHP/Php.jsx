import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import PhpSolution from './PhpWebDevloSolution/PhpSolution';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
import IMG from "../../assets/PhpImg/TechnicalSkill/0_fzIHZCdJmB6Y_8GC.webp"
const Php = () => {
  return (
    <>
     <div>
        <Navbarupp />
      </div>


      <img
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*LuW64AVZUDXM2TdQ.gif"
        className=" w-[100%] h-[35rem]"
        alt="Background Image"
      />
      <PhpSolution />
      <TechnicalSkills />
    <Approch />
      <Footer />
    </>
  )
}

export default Php