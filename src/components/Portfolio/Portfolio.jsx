import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { Typography, Button } from "@material-tailwind/react";
import Navbarupp from "../Home/Navbar/Navbarupp";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-slideshow-image/dist/styles.css";
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
            src="https://burkdigital.com/wp-content/uploads/2023/09/Our-Work-Page.png"
              // src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_an_Enterprise_Architect.jpg"
              className="h-full w-full object-cover"
              alt="Background 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            
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