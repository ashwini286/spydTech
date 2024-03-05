import React, { useState, useEffect } from "react";
import Wave from 'react-wavify';
import LogoFull from '../../assets/spylogo1.png';
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Logo from "../../assets/logo.png";
import {
    Input,
    Button,
    Textarea,
  } from "@material-tailwind/react";
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
    <div className="relative">
    <Wave fill='#184e77'
        paused={false}
        className="absolute top-0 left-0 -z-10  h-full"
        options={{
          height: 5,
          amplitude: 20,
          speed: 1,
          points: 5
        }}
  />
  
  <footer className=" text-white pt-8">
        <div className=''></div>
        <div className="container mx-auto mb-[-10%]">
          <div className="flex flex-wrap justify-center items-center py-8">

            {/* Logo Section */}
            <div className="flex flex-col justify-center items-center">
              <div class=" " >
                <img src={LogoFull} alt="Your Logo" className="h-20 " />
              </div>
              <div className="text-center w-[51%] justify-items-center ">
                <p className=" ">
                  We make an impact, we live by it in everything we do.
                  Every work we do, project, and interaction we create must function smoothly, too. Obsessed with perfection.
                </p>
              </div>
            </div>
            <div className='grid  grid-cols-2 md:grid-cols-5 pt-8'>
              {/* Main Section */}
              <div className="w-full  mb-4">
                <h2 className="text-xl font-bold mb-4">Main</h2>
                <ul>
                  <li className="mb-2">Home</li> 
                  <li className="mb-2">About Us</li>
                  <li className="mb-2">Our Services</li>
                  <li className="mb-2">Our Philosophy</li>
                  <li className="mb-2">Resources</li>
                  <li className="mb-2">Contact Us</li>
                </ul>
              </div>

              {/* Service Section */}
              <div className="w-full mb-4">
                <h2 className="text-2xl font-bold mb-4">Service</h2>
                <ul>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-[30%] after:transition-all after:duration-300 cursor-pointer">ERPNext</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Design</li>


                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Technology</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Data Analytics</li>
                </ul>
              </div>

              {/* Focus Section */}
              <div className="w-full mb-4 ml-auto text-left">
                <h2 className="text-2xl font-bold mb-4">Focus</h2>
                <ul className='w-full'>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-40 after:transition-all after:duration-300 cursor-pointer">ERPNext Consultation</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">ERPNext Implementation</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">ERPNext Development</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Headless Ecommerce with ERPNext</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Websites with ERPNext</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-44 after:transition-all after:duration-300 cursor-pointer">Third-Party Integrations</li>
                </ul>
              </div>

              {/* Industry Section */}
              <div className="w-full mb-4 ml-5">
                <h2 className="text-2xl font-bold mb-4">Industry</h2>
                <ul>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Manufacturing</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Logistic</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">Retail</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Distribution</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Automotive</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Startup</li>
                </ul>
              </div>

              <div className="w-full mb-4">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <ul>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-24 after:transition-all after:duration-300 cursor-pointer">Manufacturing</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Logistic</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-36 after:transition-all after:duration-300 cursor-pointer">Tele-Communication</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-10 after:transition-all after:duration-300 cursor-pointer">Retail</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Distribution</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-20 after:transition-all after:duration-300 cursor-pointer">Automotive</li>
                  <li className="mb-2 relative after:bg-white after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-12 after:transition-all after:duration-300 cursor-pointer">Startup</li>
                </ul>
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
      <div className=' border-blue-400 ml-8'>
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
                <div className="w-86 border-0">
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