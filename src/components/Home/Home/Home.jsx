import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import { Typography, Button } from "@material-tailwind/react";
import Navbarupp from "../Navbar/Navbarupp";
import Services1 from "../Services/Services1";
import OurApproch from "../OurApproch/OurApproch";
import OurWorks from "../OurWorks/OurWork";
import WhatClientSay from '../WhatClientSay/Client';
import Industry from "../Industry/Industry";
import ApprochUs from "../APProchUs/Approch";
import Footer from '../Footer/Footer';



import AOS from "aos";
import "aos/dist/aos.css";
import "react-slideshow-image/dist/styles.css";
import images from '../../assets/HeroImg1.jpeg'

const Home = () => {
 

  return (
    <>
      <Navbarupp />
      <div className="max-w-scrren-2xl mx-auto min-h-screen h-screen relative">
        <Carousel className="w-full mx-auto top-[-5px]">
          <div className="relative flex h-full items-center justify-center" >
            <img
             src={images}
            // src="https://www.agilitypr.com/wp-content/uploads/2020/02/technology-1-1.jpg"
              className="h-full w-full object-cover"
              alt="Background 1"
            />
            <div className="absolute inset-0 flex justify-center  h-full w-full items-center ">
              <div className="w-3/4 ml-10 pb-12  ">
              <Typography
  variant="h1"
  color="white"
  className="mb-6 text-3xl md:text-4xl lg:text-4xl font-serif font-bold pl-15 text-black"
>
  ERPNext:Making Supply Chain Management efficient for Emerging Startup
  of Retail and Distribution Domain
</Typography>             
                <div className="flex gap-2">
                  <div>
                    <Button
                      size="lg"
                      className="font-calibri bg-[#5bc0de] rounded-none"
                    >
                      Explore
                    </Button>
                  </div>
                  <div>
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="border border-[#46b8da] font-serif rounded-none"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center">
            <img
              src="https://images.thequint.com/thequint%2F2022-05%2Fee293e65-f3d0-4094-aed9-0c4b5473ce8c%2FiStock_532181848__1_.jpg?auto=format%2Ccompress&fmt=webp&width=120&w=1200"
              className="h-full w-full object-cover"
              alt="Background 2"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl lg:text-4xl font-serif font-bold"
                >
                  Mobility Solutions with Cutting Edge &amp; Technologies
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 font-serif"
                >
                  Our Core Expertise is in ideating, conceptualizing, designing,
                  developing and deploying state-of-the-art mobile applications
                  for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="font-serif bg-[#5bc0de] rounded-none"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-[#46b8da] font-serif rounded-none"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center">
            <img
              src="https://assets-news.housing.com/news/wp-content/uploads/2022/10/06130318/CSC-PAN-Login-How-to-apply-for-a-PAN-card-through-CSC.jpg"
              className="h-full w-full object-cover"
              alt="Background 3"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            <div className="absolute inset-0 grid h-full w-full items-end ">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-2xl md:text-4xl lg:text-4xl font-serif font-bold"
                >
                  Full Service Digital Marketing <br className="z-1" />{" "}
                  Campaigns Execution
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 font-serif w-full"
                >
                  We ideate, conceptualize, and leverage diversified tools and
                  technologies to build flexible, scalable, and optimized CMS
                  based E-Commerce Platforms, Web Portals, Web Applications and
                  Websites that drives business growth for our clients
                </Typography>
                <div className="flex gap-2">
                  <Button
                    size="lg"
                    className="font-serif bg-[#5bc0de] rounded-none"
                  >
                    Explore
                  </Button>
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="border border-[#46b8da] font-serif rounded-none"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <Services1 />
    <OurApproch />
    <OurWorks />
    <WhatClientSay />
    <Industry />
    <ApprochUs />
    <Footer />

    </>
  );
};

export default Home;
