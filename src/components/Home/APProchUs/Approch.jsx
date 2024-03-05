import React, { useState, useEffect } from "react";
import Wave from 'react-wavify';
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
    <Wave
        fill="url(#gradient)"
        paused={false}
        className="absolute top-0 left-0 -z-10  h-full"
        options={{
          height: 5,
          amplitude: 20,
          speed: 1,
          points: 5
        }}
      >  <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="10%"  stopColor="#d4af37" />
        <stop offset="90%" stopColor="#f00" />
      </linearGradient>
    </defs></Wave >

    <div className='flex md:flex-row items-center flex-col justify-around py-12'>
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
      {/* <SocialIcons /> */}
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
    </div>
    </div>
    
    </>
  )
}

export default ApprochUs1