import React, { useEffect } from "react";
import Navbarupp from "../Home/Navbar/Navbarupp";
import Card from "./Card";
import Approch from "../Home/APProchUs/Approch";
import Footer from "../Home/Footer/Footer";

const Portfolio = () => {
  // useEffect(() => {
  //   AOS.init(); // You can adjust the duration and offset as needed
  // }, []);

  return (
    <>
     <div>
      <Navbarupp />
      </div>    
            <img
            src="https://images.ctfassets.net/b4k16c7lw5ut/3T9UO6Id30u0W9uDSNX5Cy/f5d29210b71dd85657298a689426a434/image2.png?w=1920&h=1080&q=50&fm=png"
              // src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/61701b4e166c837543d8f0ce_2_How%20To%20a%20Create%20Personal%20Portfolio%20Website.png"
              className=" w-full object-cover"
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