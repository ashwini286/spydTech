import React from "react";
import Navbarupp from "../Home/Navbar/Navbarupp";
import Card from "./Card";
import Approch from "../Home/APProchUs/Approch";


const Portfolio = () => {
  return (
    <>
     <div>
      <Navbarupp />
      </div>    
     
      <header className="relative">
      <img
        src="https://d3uviallwqcn1r.cloudfront.net/072f1059-d315-41c9-997b-0b4fd964d8db.jpeg"
        className="w-full object-cover md:h-[500px]"
        alt="Background 2"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center">
       {/* <div>Our Services</div> */}
      </div>
    </header>
      <Card />
      <Approch />
   
    </>
  );
};



export default Portfolio