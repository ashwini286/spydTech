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
      <Navbarupp />
      <div className="max-w-scrren-2xl mx-auto min-h-screen h-screen relative">
        
         
          <div className="relative flex h-full items-center justify-center">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_an_Enterprise_Architect.jpg"
              className="h-full w-full object-cover"
              alt="Background 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-15"></div>
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/35">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl lg:text-4xl font-serif font-bold"
                >
                 Our <span className="text-green-400">Works</span>
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-36 opacity-80 font-serif"
                >
                 Discover What We Do Recently
                </Typography>
              
              </div>
            </div>
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