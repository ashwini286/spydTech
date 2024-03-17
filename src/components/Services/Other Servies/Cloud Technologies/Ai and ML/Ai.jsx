import React, { useEffect } from "react";
import IMG from "../../../../assets/AI and ML/AI-animated-2.gif";
import Navbarupp from "../../../../Home/Navbar/Navbarupp";
import Approch from "../../../../Home/APProchUs/Approch";
import AccordionItem from "./AccordionItem";
import IMG1 from "../../../../assets/AI and ML/AI-01.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "./According.css";
import AnimatedFooter from "../../../UniqueTeam/AnimatedFooter";

function Ai() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Navbarupp />
      
      <div className="w-full mx-auto  relative " >
        <img
          src={IMG}
          className="w-full bg-cover h-[90vh]"
          alt="AI animated"
        />
        <div className="text-center mt-[-5%]"
        data-aos="fade-down">
        <h1 className="text-center  mt-[-30vh] text-6xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >Artificial Intelligence</h1>
        </div>
      </div>
      <div className="bg-[#0f171c] p-5" data-aos="fade-up">
        <div className="max-w-3xl mx-auto">
          <img
            src={IMG1}
            className="w-1/2 mx-auto rounded-full shadow-2xl"
            alt="AI-01"
            data-aos="fade-up"
          />
          <div className="text-white text-center space-y-4 pt-5" data-aos="fade-up">
            <h1 className="text-6xl bg-gradient-to-r from-blue-600 via-pink-500 to-green-400 inline-block text-transparent bg-clip-text pl-5">
              What Is Artificial Intelligence?
            </h1>
            <p>
              Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. While AI is an interdisciplinary science with multiple approaches, advancements in machine learning and deep learning, in particular, are creating a paradigm shift in virtually every industry.
            </p>
            <p>
              Artificial intelligence allows machines to model, or even improve upon, the capabilities of the human mind. And from the development of self-driving cars to the proliferation of generative AI tools, AI is increasingly becoming part of everyday life.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative ">
      <div className="area bg-cover">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      
      <div className="text-center p-5 "
      data-aos="fade-up">
        <h1 className="text-6xl bg-gradient-to-r from-red-300 via-yellow-200 to-pink-500 inline-block text-transparent bg-clip-text">
          What Can You Do with AI?
        </h1>
        <AccordionItem />
      </div>
      
      
      </div>
      <Approch />
      
    </>
  );
}

export default Ai;
