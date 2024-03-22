import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../Home/Navbar/Navbarupp";
import ReadyToTest from "./ReadyToTestDrive/ReadyToTest";
import PowerfulFeatures from "./PowerfulFeatures/PowerfulFeatures";
import Approch from "../Home/APProchUs/Approch";
import ChatBot from '../Home/Home/ChatBot';
const TryADemo = () => {
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

      <div className=" mx-auto min-h-screen  h-screen ">
        <div className=" flex h-full items-center justify-center bg-black flex-col">
          <div className="px-4 ">
            <div className="text-white md:text-[50px] lg:text-[70px] text-xl font-bold text-center tracking-tighter  leading-none ">
              Experience a 10-minute Live Demo: <br />{" "}
              <span className="text-[#0694A2] ">
                Accelerate Your Digital Transformation
              </span>
            </div>
            <br />
            <p className="text-[#656565] text-center md:text-2xl text-md">
              Discover the power of our cutting-edge IT solutions in this free,
              on-demand demo. Explore how our innovative technologies empower
              businesses to streamline operations and achieve unparalleled
              efficiency.
            </p>
          </div>
        </div>
      </div>

      <ReadyToTest />
      <PowerfulFeatures />
     
      <Approch />
      <ChatBot />
    </>
  );
};

export default TryADemo;
