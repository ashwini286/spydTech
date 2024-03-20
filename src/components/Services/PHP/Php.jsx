import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import PhpSolution from "./PhpWebDevloSolution/PhpSolution";
import TechnicalSkills from "./TechnicalSkills/TechnicalSkills";
import Approch from "../../Home/APProchUs/Approch";
import ChatBot from '../../Home/Home/ChatBot';
import IMG from "../../assets/PhpImg/TechnicalSkill/0_fzIHZCdJmB6Y_8GC.webp";
const Php = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <img
        // src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*LuW64AVZUDXM2TdQ.gif"
        src="https://kinsta.com/wp-content/uploads/2020/03/php-tutorials.png"
        className=" lg:w-[100%] lg:h-[30rem] object-cover"
        alt="Background Image"
      />
      <PhpSolution />
      <TechnicalSkills />
      <Approch />
   <ChatBot />
    </>
  );
};

export default Php;
