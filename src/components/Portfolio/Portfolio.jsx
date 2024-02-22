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
            src="https://www.swic.edu/wp-content/uploads/2021/05/portfolio.png"
              className=" w-full object-cover h-[600px]"
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