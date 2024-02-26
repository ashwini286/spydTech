import React from "react";
import Navbarupp from "../Home/Navbar/Navbarupp";
import Card from "./Card";
import Approch from "../Home/APProchUs/Approch";
import Footer from "../Home/Footer/Footer";

const Portfolio = () => {
  return (
    <>
     <div>
      <Navbarupp />
      </div>    
            <img
            src="https://static.wixstatic.com/media/5f41c1_68e24887897e46008912a86977a62c6e~mv2.png/v1/fill/w_1080,h_691,al_c/5f41c1_68e24887897e46008912a86977a62c6e~mv2.png"
              className=" w-full object-cover h-[500px]"
              alt="Background 2"
            />
      <Card />
      <Approch />
      <Footer />
    </>
  );
};

// export default Home;

export default Portfolio