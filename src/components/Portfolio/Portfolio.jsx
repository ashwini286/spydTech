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
      </div>    <div className="max-w-scrren-2xl mx-auto min-h-screen h-screen ">
        
         
          <div className="relative flex h-full items-center justify-center">
            <img
            src="https://wallpapers.com/images/hd/technology-pictures-f1l1n8hjo90vwz0l.jpg"
              // src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_an_Enterprise_Architect.jpg"
              className="h-full w-full object-cover"
              alt="Background 2"
            />
            <div className="absolute inset-0 "></div>
            
          </div>


       
        </div>

      <Card />
      <Approch />
      <Footer />
    </>
  );
};

// export default Home;

export default Portfolio