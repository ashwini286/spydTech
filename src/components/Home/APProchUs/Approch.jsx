// import React from "react";
// import Wave from "react-wavify";
// import IMG from "../../assets/decore.png";
// import { Button } from "@material-tailwind/react";
// import LogoFull from "../../assets/spylogo1.png";
// import { LuMapPin } from "react-icons/lu";
// import { FiPhoneCall } from "react-icons/fi";
// import { MdOutlineMarkEmailRead } from "react-icons/md";
// import SocialIcons from "./Socialicons";
// const ApprochUs = () => {
//   return (
//     <>
//       <div className="relative py-16">
// <div className="w-full md:w-[80%] h-full md:h-[18rem] ml-auto mr-auto shadow-inner slider-wave rounded-xl">
//   <div className="pt-16 text-center flex justify-center items-center flex-col">
//     <div className=" w-full text-2xl md:text-3xl  text-white">
//       Let’s Ignite Conversations in the World of Innovative Technology!
//     </div>
//     <img
//       src={IMG}
//       alt="talk"
//       className="w-[27%] h-4 md:w-[40%] md:h-6 md:ml-[600px]"
//     />
//   </div>

//   <div className="flex justify-center items-center flex-col pt-4">
//     <p className="text-center px-8 md:px-16 text-white">
//       Join us in a dialogue that transcends boundaries. At the heart of
//       our passion lies innovation, where ideas meet execution, crafting
//       a seamless and beautiful experience. Your thoughts matter—let's
//       explore the future of technology together. Reach out via call or
//       email, and let the conversation begin.
//     </p>
//     <div className="pt-4">
//       <Button>Read More</Button>
//     </div>
//   </div>
// </div>

//         <footer className=" text-white">
//           <Wave
//             fill="#184e77"
//             paused={false}
//             className="absolute top-0 left-0 -z-10  h-full"
//             options={{
//               height: 5,
//               amplitude: 20,
//               speed: 1,
//               points: 5,
//             }}
//           />

//           <div className="pb-4"></div>
//           <div className="container mx-auto">
//             <div className="flex flex-wrap justify-start ">
//               {/* Logo Section */}
//               <div className="grid w-full justify-items-center ">
//                 <div class="grid justify-items-center p-10">
//                   <img src={LogoFull} alt="Your Logo" className="h-16  " />
//                 </div>
//                 <div>
//                   <p className="w-[51%] ml-[25%] text-justify mb-10">
//                     We make an impact, we live by it in everything we do. Every
//                     work we do, project, and interaction we create must function
//                     smoothly, too. Obsessed with perfection.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center  flex-row w-full       ">
//                 <div className="grid  md:grid-cols-2 lg:grid-cols-5 justify-items-center w-full gap-8">
//                   {/* contact */}
//                   <div className=" mb-4 bg-[#457b9d] p-8 ml-4 flex justify-center items-center flex-col">
//                     <div className=" ml-8">
//                       <div className="  flex justify-center items-center flex-row  text-white w-full gap-8">
//                         <div className="text-[40px]  ">
//                           <LuMapPin />
//                         </div>
//                         <div className="">REACH US</div>
//                       </div>
//                       <div className="text-white w-52 ml-16 mt-4 ">
//                         Meera complex Plot, No-852, 2nd floor Madhapur
//                         Hyderabad, Telangana - 500081
//                       </div>
//                       <div className="flex justify-center items-center  flex-row  text-white w-full leading-[80.8px] gap-8">
//                         <div className="text-xl">
//                           <FiPhoneCall />
//                         </div>
//                         <div className="">040-43334849</div>
//                       </div>
//                       <div className="ml-8 flex justify-center items-center  flex-row  text-white gap-4 ">
//                         <div className="text-2xl">
//                           <MdOutlineMarkEmailRead />
//                         </div>
//                         <div className="">info@spydtech.com</div>
//                       </div>
//                     </div>
//                     <div className="text-black flex flex-row justify-center items-center ml-16 pt-8">
//                       <SocialIcons />
//                     </div>
//                   </div>

//                   {/* Main Section */}
//                   <div className=" mb-4   flex justify-center items-center flex-col border border-white p-8">
//                     <div className="text-xl font-bold mb-4 ">Main</div>
//                     <div>
//                       <ul className="text-center">
//                         <li className="mb-2">Home</li>
//                         <li className="mb-2">About Us</li>
//                         <li className="mb-2">Our Services</li>

//                         <li className="mb-2">Resources</li>
//                         <li className="mb-2">Contact Us</li>
//                       </ul>
//                     </div>
//                   </div>

//                   {/* Service Section */}
//                   <div className=" mb-4  flex justify-center items-center flex-col">
//                     <div className="text-2xl font-bold mb-4">Service</div>

//                     <ul className="text-center">
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
//                         ERPNext
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Design
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Resources
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
//                         Technology
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
//                         Data Analytics
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Focus Section */}

//                   {/* Industry Section */}
//                   <div className=" mb-4  flex justify-center items-center flex-col">
//                     <div className="text-2xl font-bold mb-4">Industry</div>

//                     <ul className="text-center">
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
//                         Manufacturing
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Logistic
//                       </li>
//                       {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li> */}
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
//                         Retail
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
//                         Distribution
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
//                         Automotive
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Startup
//                       </li>
//                     </ul>
//                   </div>

//                   <div className=" mb-4  flex justify-center items-center flex-col">
//                     <div className="text-2xl font-bold mb-4">Contact Us</div>

//                     <ul className="text-center">
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
//                         Manufacturing
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Logistic
//                       </li>

//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
//                         Retail
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
//                         Distribution
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
//                         Automotive
//                       </li>
//                       <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
//                         Startup
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             {/* Copyright Section */}
//             <div className=" text-center pb-0 ">
//               <p>&copy; 2024 Your Company. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>
//       </div>
//       <style>
//         {`
//         .slider-wave {
//           margin: auto;
//          overflow: hidden;
//          background: linear-gradient(315deg, rgb(255, 105, 104) 3%, rgb(6, 149, 255) 38%, rgb(163, 52, 250) 68%, rgb(255, 105, 104) 98%);
//          animation: gradient 15s ease infinite;
//          background-size: 400% 400%;
//          background-attachment: fixed;
// }

// @keyframes gradient {
//   0% {
//     background-position: 0% 0%;
//   }
//   50% {
//     background-position: 100% 100%;
//   }
//   100% {
//     background-position: 0% 0%;
//   }
// }

// .wave {
//   background: rgb(255 255 255 / 25%);
//   border-radius: 800% 800% 0 0;
//   position: fixed;
//   width: 200%;
//   height: 12em;
//   animation: wave 10s -3s linear infinite;
//   transform: translate3d(0, 0, 0);
//   opacity: 0.8;
//   bottom: 0;
//   left: 0;
//   z-index: -1;
// }

// @keyframes wave {
//   0%, 100% {
//     transform: translateX(0);
//   }

//   25% {
//     transform: translateX(-5%);
//   }

//   50% {
//     transform: translateX(-10%);
//   }

//   75% {
//     transform: translateX(-5%);
//   }
// }
//     `}
//       </style>
//     </>
//   );
// };

// export default ApprochUs;

import React from "react";
import Wave from "react-wavify";
import IMG from "../../assets/decore.png";
import { Button } from "@material-tailwind/react";
import LogoFull from "../../assets/spylogo1.png";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import SocialIcons from "./Socialicons";
const ApprochUs = () => {
  return (
    <>
      <div className="relative pt-24">
        <div className="  w-full md:w-[80%] py-8  h-full  ml-auto mr-auto shadow-inner slider rounded-xl mb-24">
          <div className=" text-center flex justify-center items-center flex-col">
            <div className=" w-full text-2xl md:text-3xl  text-white">
              Let’s Ignite Conversations in the World of Innovative Technology!
            </div>
            <img
              src={IMG}
              alt="talk"
              className="w-[27%] h-4 md:w-[40%] md:h-6 md:ml-[600px] "
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
            className="absolute h-full -z-10 top-10"
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
                <div className="grid  sm:grid-cols-2  md:grid-cols-4 justify-items-center w-full">
                  {/* contact */}
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
                  <div className=" mb-4  flex justify-center items-center flex-col lg:ml-48 sm:ml-20 md:pl-24  w-48">
                    <div className="text-xl font-bold mb-4 ">Main</div>
                    <div>
                      <ul className="text-center">
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                          Home
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                          About Us
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                          Our Services
                        </li>

                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                          Resources
                        </li>
                        <li className="mb-4 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                          Contact Us
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Service Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col md:pl-16  ">
                    <div className="text-2xl font-bold mb-4">Service</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">
                        ERPNext
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
                        Design
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
                        Resources
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
                        Technology
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
                        Data Analytics
                      </li>
                    </ul>
                  </div>

                  {/* Focus Section */}

                  {/* Industry Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col lg:mr-48 sm:ml-20 md:pr-20">
                    <div className="text-2xl font-bold mb-4">Industry</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">
                        Manufacturing
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
                        Logistic
                      </li>
                      {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li> */}
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">
                        Retail
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
                        Distribution
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">
                        Automotive
                      </li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">
                        Startup
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
         background: linear-gradient(315deg, rgb(255, 0, 0) 3%, rgb(0, 255, 0) 38%, rgb(0, 0, 255) 68%, rgb(255, 0, 0) 98%);
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
