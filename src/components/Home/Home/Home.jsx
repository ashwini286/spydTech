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
import images from '../../assets/HeroImg1.jpeg'
import IMG1 from "../../assets/Digital-Marketing-Explained_Blog-scaled.jpeg"
import IMG2 from "../../assets/Main2.avif"
import IMG3 from "../../assets/Main3.webp"
import SpdApproch from "./SpdApproch";
import Spydflipcard from "./Spydflipcard";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbarupp />
      
      <div className="max-w-screen mx-auto min-h-screen relative">
        <Carousel className="w-full mx-auto top-0">
          {/* Slide 1 */}
          <div className="relative flex h-screen items-center justify-center">
            <img src={IMG1} className="absolute inset-0 object-cover w-full h-full" alt="Background 1" style={{ filter: "brightness(50%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-6">
                <Typography variant="h1" color="white" className="text-4xl md:text-5xl font-bold  mb-4">
                  ENTERPRISE & CUSTOM APPLICATION DEVELOPMENT
                </Typography>
                <Typography variant="lead" color="white" className="text-sm md:text-xl mb-8 opacity-70">
                  ERPNext: SPY D TECHNOLOGY deep experience,expertise and exposure in design and developing 
                  enterprise and custom web applications catering to myriad industry 
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button size="lg" className="font-serif bg-blue-500 hover:bg-blue-600 rounded-none">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text" className="border border-blue-500 hover:border-blue-600 font-serif rounded-none">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative flex h-screen items-center justify-center">
            <img src={IMG2} className="absolute inset-0 object-cover w-full h-full" alt="Background 2" style={{ filter: "brightness(50%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-6">
                <Typography variant="h1" color="white" className="text-4xl md:text-5xl font-bold mb-4">
                MOBILITY SOLUTIONS WITH CUTTING EDGE TECHNOLOGY
                </Typography>
                <Typography variant="lead" color="white" className="text-sm md:text-xl mb-8 opacity-80">
                  Our Core Expertise is in ideating, conceptualizing, designing, developing and deploying state-of-the-art mobile applications for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button size="lg" className="font-serif bg-blue-500 hover:bg-blue-600 rounded-none">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text" className="border border-blue-500 hover:border-blue-600 font-serif rounded-none">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative flex h-screen items-center justify-center">
            <img src={IMG3} className="absolute inset-0 object-cover w-full h-full" alt="Background 3" style={{ filter: "brightness(50%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-6">
                <Typography variant="h1" color="white" className="text-4xl md:text-5xl font-bold mb-4">
                  FULL SERVICES DIGITAL MARKETING
                </Typography>
                <Typography variant="lead" color="white" className="text-sm md:text-xl mb-8 opacity-80">
                  We ideate, conceptualize, and leverage diversified tools and technologies to build flexible, scalable, and optimized CMS based E-Commerce Platforms, Web Portals, Web Applications and Websites that drives business growth for our clients.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button size="lg" className="font-serif bg-blue-500 hover:bg-blue-600 rounded-none">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text" className="border border-blue-500 hover:border-blue-600 font-serif rounded-none">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* {/slider 4/} */}
          <div className="relative flex h-screen items-center justify-center">
            <img src={IMG2} className="absolute inset-0 object-cover w-full h-full" alt="Background 2" style={{ filter: "brightness(50%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-6">
                <Typography variant="h1" color="white" className="text-4xl md:text-5xl font-bold mb-4">
                  FULL SERVICES DIGITAL MARKETING CAMPAIGNS EXECUTION
                </Typography>
                <Typography variant="lead" color="white" className="text-sm md:text-xl mb-8 opacity-80">
                  We offer complete,comprehensive, full Service Digital Marketing Services in all channels as such as SEO,SEM,Social media,content,Affiliate,Viral,video and Influencer Marketing.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button size="lg" className="font-serif bg-blue-500 hover:bg-blue-600 rounded-none">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text" className="border border-blue-500 hover:border-blue-600 font-serif rounded-none">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* {/slider 5/} */}
          <div className="relative flex h-screen items-center justify-center">
            <img src={IMG2} className="absolute inset-0 object-cover w-full h-full" alt="Background 2" style={{ filter: "brightness(50%)" }} />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
            <div className="absolute inset-0 grid place-items-center text-left text-white">
              <div className="px-6">
                <Typography variant="h1" color="white" className="text-4xl md:text-5xl font-bold mb-4">
                  Mobility Solutions with Cutting Edge Technologies
                </Typography>
                <Typography variant="lead" color="white" className="text-sm md:text-xl mb-8 opacity-80">
                  Our Core Expertise is in ideating, conceptualizing, designing, developing and deploying state-of-the-art mobile applications for Android, IOS and Hybrid Platforms.
                </Typography>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button size="lg" className="font-serif bg-blue-500 hover:bg-blue-600 rounded-none">
                    Explore
                  </Button>
                  <Button size="lg" color="white" variant="text" className="border border-blue-500 hover:border-blue-600 font-serif rounded-none">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </Carousel>
      </div>
      {/* <Spydflipcard /> */}
      <SpdApproch />
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
