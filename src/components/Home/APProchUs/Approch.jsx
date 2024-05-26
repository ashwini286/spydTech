import React from "react";
import Wave from "react-wavify";
import IMG from "../../assets/decore.png";
import { Button } from "@material-tailwind/react";
import LogoFull from "../../assets/spylogo1.png";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Location from "./Location";
import SocialIcons from "./SocialIcon";
const ApprochUs = () => {
  return (
    <>
      <div className="relative pt-24 lg:py-0.5">
        <div className="  w-full md:w-[80%] py-8  h-full  ml-auto mr-auto shadow-inner bg-[#0c4a6e]   rounded-xl mb-[12px]4">
          <div className=" text-center flex justify-center items-center flex-col">
            <div className=" w-full text-2xl md:text-3xl  text-white">
              Let’s Ignite Conversations in the World of Innovative Technology!
            </div>

            <img
              src={IMG}
              alt="talk"
              className="lg:w-[27%] h-4 md:w-[40%] md:h-6 lg:ml-[500px] w-[27%] "
            />
          </div>

          <div className="flex justify-center items-center flex-col pt-8">
            <p className="text-center px-8 text-white">
              Join us in a dialogue that transcends boundaries. At the heart of
              our passion lies innovation, where ideas meet execution, crafting
              a seamless and beautiful experience. Your thoughts matter—let's
              explore the future of technology together. Reach out via call or
              email, and let the conversation begin.
            </p>
            <div className="pt-4">
              <Button>Read More</Button>
            </div>
          </div>
        </div>

        <footer className=" text-white">
          <Wave
            fill="#184e77"
            paused={false}
            className="absolute h-full -z-10 lg:top-10 top-0"
            options={{
              height: 5,
              amplitude: 20,
              speed: 1,
              points: 5,
            }}
          />

          <div className="pb-4"></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-start ">
              {/* Logo Section */}
              <div className="grid w-full justify-items-center ">
                <div class="grid justify-items-center p-10">
                  <img src={LogoFull} alt="Your Logo" className="h-16  " />
                </div>
                <div>
                  <p className="md:w-[60%] md:ml-[25%] text-center md:mb-8">
                    We make an impact, we live by it in everything we do. Every
                    work we do, project, and interaction we create must function
                    smoothly, too. Obsessed with perfection.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center  flex-row w-full pt-8 ">
                <div className="grid grid-cols-1   md:grid-cols-2  lg:grid-cols-4 justify-items-center w-full">
                  {/* contact */}
                  <div className=" mb-4 p-4  bg-[#457b9d] md:p-4  flex justify-center items-center flex-col  ">
                    <div className="  ">
                      <div className="  flex justify-center items-center flex-row  text-white w-full gap-8">
                        <div className="text-[40px]  ">
                          <Location />
                        </div>
                        <div className="">REACH US</div>
                      </div>
                      <div className="text-white w-52 ml-16 mt-4 ">
                        Meera complex Plot, No-852, 2nd floor Madhapur
                        Hyderabad, Telangana - 500081
                      </div>
                      <div className="flex justify-center items-center  flex-row  text-white w-full leading-[80.8px] gap-8"></div>
                      <div className="ml-8 flex justify-center items-center  flex-row  text-white gap-4 ">
                        <div className="text-2xl">
                          <MdOutlineMarkEmailRead />
                        </div>
                        <div className="">info@spydtech.com</div>
                      </div>
                      <div className="pt-2 ml-[58px] flex justify-center items-center  flex-row  text-white gap-4 ">
                        <div className="text-2xl">
                          <MdOutlineMarkEmailRead />
                        </div>
                        <div className="">careers@spydtech.com</div>
                      </div>
                    </div>
                    <div className="text-black flex flex-row justify-center items-center ">
                      <SocialIcons />
                    </div>
                  </div>

                  {/* Main Section */}
                  <div className="mb-4 md:pb-0 pb-16 flex justify-center items-center flex-col w-48 -mt-4">
                    <div className="text-2xl font-bold mb-4">Main</div>
                    <div>
                      <ul className="text-center">
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-16 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-14 hover:after:w-16 after:transition-all after:duration-300 cursor-pointer">
                          <Link to="/company/about_us">About Us</Link>
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-10 hover:after:w-[5.5rem] after:transition-all after:duration-300 cursor-pointer">
                          <Link to="/services/other_services">
                            Our Services
                          </Link>
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[10.5rem] after:transition-all after:duration-300 cursor-pointer">
                          <Link to="/company/staffing_services">
                            Resources Management
                          </Link>
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-12 hover:after:w-[4.5rem] after:transition-all after:duration-300 cursor-pointer">
                          <Link to="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Service Section */}
                  <div className="mb-4 flex justify-center items-center flex-col -mt-14">
                    <div className="text-2xl font-bold mb-4">Service</div>
                    <ul className="text-center">
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-[4rem] after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/eRPNext_technology">ERPNext</Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[8rem] after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/frontend">Web Development</Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[6.5rem] after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/company/staffing_services">
                          Staffing Service
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-2 hover:after:w-[6.5rem] after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/digital_marketing">
                          Digital Marketing
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-4 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/advanced_technologies">
                          Data Science
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Focus Section */}
                  <div className="mb-4 flex justify-center items-center flex-col -mt-[10%]">
                    <div className="text-2xl font-bold mb-4">Focus</div>
                    <ul className="text-center">
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-10 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/consulting">
                          ERPNext Consultation
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-8 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/implementation">
                          ERPNext Implementation 
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-10 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/eRPNext_technology">
                          ERPNext Development
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-6 hover:after:w-[12rem] after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/eRPNext_technology">
                          Headless Ecommerce with ERPNext
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-10 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/eRPNext_technology">
                          Websites with ERPNext
                        </Link>
                      </li>
                      <li className="mb-[12px] relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-10 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">
                        <Link to="/services/third_party_integrations">
                          Third-Party Integrations
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Copyright Section */}
            <div className=" text-center pb-0 ">
              <p>&copy; 2024 SpY D Technology. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
      <style>
        {`
        .slider {
          margin: auto;
         overflow: hidden;
         background: linear-gradient(360deg, #67b99a,#358f80, #036666);
        //  background: linear-gradient(315deg, rgb(255, 0, 0) 3%, rgb(0, 255, 0) 38%, rgb(0, 0, 255) 68%, rgb(255, 0, 0) 98%);
         animation: gradient 15s ease infinite;
         background-size: 400% 400%;
         background-attachment: fixed;
}
 
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
 

  

    `}
      </style>
    </>
  );
};

export default ApprochUs;
