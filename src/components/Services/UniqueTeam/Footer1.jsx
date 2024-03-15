import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LogoFull from '../../assets/spylogo1.png';
import IMG from "../../assets/decore.png"
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SocialIcons from "../../Home/APProchUs/Socialicons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Footer1() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>

      <Card className="mt-3 w-[90%] md:w-[80%] ml-auto mr-auto md:h-[20rem] mb-[-26%] md:mb-[-15%] shadow-inner">
        <CardBody className="flex flex-col justify-center items-center" data-aos="fade-up-right">
          <h1 className="text-4xl text-center">
            Let’s Talk <span className="text-blue-900">Technology</span>
          </h1>
          <img src={IMG} alt="talk" className="w-[44%] md:w-[27%] h-auto mt-4" />
          <p className="text-center pt-4 w-[90%]">
            We're passionate about innovation, brilliant ideas, and the
            execution that brings it all together in one beautiful experience.
            If you are too, call or send us an email to get started.
          </p>
        </CardBody>

        <CardFooter className="pt-5" data-aos="fade-up-right">
          <Button className="ml-[30%] md:ml-[40%]">Read More</Button>
        </CardFooter>
      </Card>
      <footer className="bg-blue-900 text-white ">
        <div className='pb-[18%]'></div>
        <div className="container mx-auto mb-[-10%]">
          <div className="flex flex-wrap justify-start">

            {/* Logo Section */}
            <div className="grid w-full justify-items-center " data-aos="fade-up-right">
              <div class="grid justify-items-center p-10" >
                <img src={LogoFull} alt="Your Logo" className="h-16  " />
              </div>
              <div>
                <p className="md:w-[60%] md:ml-[25%] text-center md:mb-8">
                  We make an impact, we live by it in everything we do.
                  Every work we do, project, and interaction we create must function smoothly, too. Obsessed with perfection.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center  flex-row w-full " data-aos="fade-Zoom-in">
              <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-5 justify-items-center w-full'>
              <div className=" mb-4 p-4  bg-[#457b9d] md:p-7  flex justify-center items-center flex-col  ">
                    <div className="  ">
                      <div className="  flex justify-center items-center flex-row  text-white w-full gap-8">
                        <div className="text-[40px]  ">
                          <LuMapPin />
                        </div>
                        <div className="">REACH US</div>
                      </div>
                      <div className="text-white w-52 ml-16 mt-4 ">
                        Meera complex Plot, No-852, 2nd floor Madhapur
                        Hyderabad, Telangana - 500081
                      </div>
                      <div className="flex justify-center items-center  flex-row  text-white w-full leading-[80.8px] gap-8">
                        <div className="text-xl">
                          <FiPhoneCall />
                        </div>
                        <div className="">040-43334849</div>
                      </div>
                      <div className="ml-8 flex justify-center items-center  flex-row  text-white gap-4 ">
                        <div className="text-2xl">
                          <MdOutlineMarkEmailRead />
                        </div>
                        <div className="">info@spydtech.com</div>
                      </div>
                    </div>
                    <div className="text-black flex flex-row justify-center items-center ">
                      <SocialIcons />
                    </div>
                  </div>
             
             
                {/* Main Section */}
                <div className=" mb-4  flex justify-center items-center flex-col lg:ml-48 md:pl-24  w-48">
                    <div className="text-xl font-bold mb-4 ">Main</div>
                    <div>
                      <ul className="text-center">
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
                          Home
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-16 after:transition-all after:duration-300 cursor-pointer">
                          About Us
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[5.5rem] after:transition-all after:duration-300 cursor-pointer">
                          Our Services
                        </li>

                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[4.5rem] after:transition-all after:duration-300 cursor-pointer">
                          Resources
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[4.5rem] after:transition-all after:duration-300 cursor-pointer">
                          Contact Us
                        </li>
                      </ul>
                    </div>
                  </div>
                {/* Service Section */}
                <div className=" mb-4  flex justify-center items-center flex-col md:pl-16  ">
                    <div className="text-2xl font-bold mb-4">Service</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-4 hover:after:w-16 after:transition-all after:duration-300 cursor-pointer">
                        ERPNext
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-14 after:transition-all after:duration-300 cursor-pointer">
                        Design
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-4 hover:after:w-[4.5rem] after:transition-all after:duration-300 cursor-pointer">
                        Resources
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
                        Technology
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
                        Data Analytics
                      </li>
                    </ul>
                  </div>

                {/* Focus Section */}

                <div className=" mb-4  flex justify-center items-center flex-col  ">
                    <div className="text-2xl font-bold mb-4">Focus</div>

                    <ul className="text-center">
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">ERPNext Consultation</li>
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">ERPNext Implementation</li>
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">ERPNext Development</li>
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Headless Ecommerce with ERPNext</li>
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">Websites with ERPNext</li>
                    <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">Third-Party Integrations</li>
                    </ul>
                  </div>

             

                {/* Industry Section */}
                <div className=" mb-4  flex justify-center items-center flex-col ">
                    <div className="text-2xl font-bold mb-4">Industry</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
                        Manufacturing
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-14 after:transition-all after:duration-300 cursor-pointer">
                        Logistic
                      </li>
                      {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li> */}
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
                        Retail
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[5.5rem] after:transition-all after:duration-300 cursor-pointer">
                        Distribution
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[5.5rem] after:transition-all after:duration-300 cursor-pointer">
                        Automotive
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
                        Startup
                      </li>
                    </ul>
                  </div>

               
              </div>
            </div>
          </div>
          <hr />
          {/* Copyright Section */}
          <div className="mt-10 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
