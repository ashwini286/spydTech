import React, { useState, useEffect } from "react";
import Wave from 'react-wavify';
import IMG from "../../assets/decore.png"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import LogoFull from '../../assets/spylogo1.png';
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Card1 from '../../Services/UniqueTeam/ERPCard'

import SocialIcons from './Socialicons'
const ApprochUs1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [massage, setMassage] = useState("");

  const handle = (e) => {
    e.preventDefault();
    var Alldata = JSON.parse(localStorage.getItem('Alldata') || "[]");
    var data = {
      name,
      email,
      phoneNo,
      massage
    };
    Alldata.push(data);
    localStorage.setItem('Alldata', JSON.stringify(Alldata));
    setName('');
    setEmail('');
    setPhoneNo('');
    setMassage('');
  };
  return (
    <>
      {/* <div className='relative  -red-800 '>
      <Card1  />
    </div> */}
      <div className="relative py-16">

        <Card className="w-[80%] h-full md:h-[18rem] ml-[10%] shadow-inner bg-blue-400">
          <CardBody className="text-center ">
            <p className="flex w-full text-xl md:text-4xl justify-center text-center">
              Let’s Ignite Conversations in the World of <span className="text-blue-900 md:pl-4">Innovative Technology!</span>
            </p>
            <img
              src={IMG}
              alt='talk'
              className='w-[27%] h-4 md:ml-[57%] ' // Adjusted margin for better spacing
            />
          </CardBody>
          <div className="text-center px-6 md:px-16"> {/* Adjusted px for better responsiveness */}
            <p>
              Join us in a dialogue that transcends boundaries. At the heart of our passion lies innovation, where ideas meet execution, crafting a seamless and beautiful experience. Your thoughts matter—let's explore the future of technology together. Reach out via call or email, and let the conversation begin.
            </p>
          </div>


          <CardFooter className="flex justify-center items-center">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <footer className=" text-white">
          <Wave fill='#184e77'
            paused={false}
            className="absolute top-48 left-0 -z-10 border h-full"
            options={{
              height: 5,
              amplitude: 20,
              speed: 1,
              points: 5
            }}
          />

          <div className='pb-4'></div>
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-start ">

              {/* Logo Section */}
              <div className="grid w-full justify-items-center ">
                <div class="grid justify-items-center p-10" >
                  <img src={LogoFull} alt="Your Logo" className="h-16  " />
                </div>
                <div>
                  <p className="w-[51%] ml-[25%] text-justify mb-10">
                    We make an impact, we live by it in everything we do.
                    Every work we do, project, and interaction we create must function smoothly, too. Obsessed with perfection.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center  flex-row w-full       ">
                <div className='grid  grid-cols-2 md:grid-cols-5 justify-items-center w-full'>
                  {/* Main Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col">
                    <div className="text-xl font-bold mb-4 ">Main</div>
                    <div>
                      <ul className="text-center" >
                        <li className="mb-2">Home</li>
                        <li className="mb-2">About Us</li>
                        <li className="mb-2">Our Services</li>

                        <li className="mb-2">Resources</li>
                        <li className="mb-2">Contact Us</li>
                      </ul>
                    </div>
                  </div>

                  {/* Service Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col">
                    <div className="text-2xl font-bold mb-4">Service</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">ERPNext</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Design</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Resources</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Technology</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Data Analytics</li>
                    </ul>
                  </div>


                  {/* Focus Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col">
                    <div className="text-2xl font-bold mb-4">Focus</div>

                    <ul className='w-full text-center'>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">ERPNext Consultation</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">ERPNext Implementation</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">ERPNext Development</li>
                      {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Headless Ecommerce with ERPNext</li> */}
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Websites with ERPNext</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Third-Party Integrations</li>
                    </ul>


                  </div>

                  {/* Industry Section */}
                  <div className=" mb-4  flex justify-center items-center flex-col">
                    <div className="text-2xl font-bold mb-4">Industry</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Manufacturing</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Logistic</li>
                      {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li> */}
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">Retail</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Distribution</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Automotive</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Startup</li>
                    </ul>

                  </div>

                  <div className=" mb-4  flex justify-center items-center flex-col">
                    <div className="text-2xl font-bold mb-4">Contact Us</div>

                    <ul className="text-center">
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Manufacturing</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Logistic</li>
                      {/* <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li> */}
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">Retail</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Distribution</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Automotive</li>
                      <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Startup</li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Copyright Section */}

          </div>

        </footer>
        <div className=" text-center pb-0 ">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
        {/* <div className='flex md:flex-row items-center flex-col justify-around py-12'>
        <div className='flex justify-center items-center flex-col text-center'>
        <div className="flex justify-center items-center flex-row gap-4" >
              <div>
                <img src={Logo} alt="sorry" className="" />
              </div>
              <div
                className="md:text-[30px]  text-white text-xl "
              >
                Approach Us
              </div>
            </div>
      <div className=' -blue-400 ml-8'>
      <div
              className="  flex justify-center items-center flex-row  text-white w-full gap-8"

            >
              <div className="text-[40px]  ">
                <LuMapPin />
              </div>
              <div className="">REACH US</div>
            </div>
            <div className="text-white w-52 ml-16 mt-4 ">
             
                Meera complex Plot, No-852, 2nd floor
                Madhapur Hyderabad, Telangana - 500081
             
            </div>
            <div
              className="flex justify-center items-center  flex-row  text-white w-full leading-[80.8px] gap-8"
            >
              <div className="text-xl">
                <FiPhoneCall />
              </div>
              <div className="">040-43334849</div>
            </div>
            <div
              className="ml-8 flex justify-center items-center  flex-row  text-white gap-4 "
            >
              <div className="text-2xl">
                <MdOutlineMarkEmailRead />
              </div>
              <div className="">info@spydtech.com</div>
            </div>
      </div> 
     
        </div>

        <div className=' p-4 shadow-2xl' >
           <div  className="mb-[-15px] font-normal md:text-[30px] text-white" > Request For Free Demo</div>
           <div>
           <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80">
              <div
                className="mb-1 flex flex-col gap-y-6"
              >
                   <Input color="white" label="Name" onChange={(e) => setName(e.target.value)} value={name} />
                <Input color="white" label="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input color="white" label="Phone No" onChange={(e) => setPhoneNo(e.target.value)} value={phoneNo} />
                <div className="w-86 -0">
                  <Textarea
                    color="blue"
                    label="Message"
                    variant="outlined"
                    onChange={(e) => setMassage(e.target.value)} value={massage}
                  />
                </div>
              </div>
              <Button className="mt-6 w-full" onClick={handle} >
                Send Message
              </Button>
            </form>
           </div>
        </div>
    </div> */}
      </div>

    </>
  )
}

export default ApprochUs1