import React, { useState, useEffect } from "react";
import { layout } from "../../../style";
import Wave from 'react-wavify';
import Logo from "../../assets/logo.png";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Socialicons from "./Socialicons";

const Approch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [massage, setMassage] = useState("");

  useEffect(() => {
    AOS.init();
  });

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
    <div style={{ position: 'relative' }}>
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
      <div className={`${layout.section} max-w-full  w-full`}>
        <div
          className={`${layout.sectionInfo} text-center`}
          style={{
           
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className=" text-center mr-[150px] shadow-2xl">
            <div className="flex justify-right items-center flex-row  ml-32" >
              <div>
                <img src={Logo} alt="sorry" className="" />
              </div>
              <p
                className="font-poppins md:text-[30px]  text-white text-xl pl-2"
              >
                Approach Us
              </p>
            </div>

            <div
              className=" pl-[100px] flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"

            >
              <div className="text-[40px]  ">
                <LuMapPin />
              </div>
              <div className="ml-2">REACH US</div>
            </div>
            <div className=" mt-4 flex justify-end items-justify">
              <p className="text-white w-[265px] mr-16">
                Meera complex Plot, No-852, 2nd floor
                Madhapur Hyderabad, Telangana - 500081
              </p>
            </div>
            <div
              className="flex justify-center items-center pl-[100px] flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full leading-[80.8px]"
            >
              <div className="text-[25px] ml-[10%]">
                <FiPhoneCall />
              </div>
              <div className="ml-6">040-43334849</div>
            </div>
            <div
              className="flex justify-center items-center pl-[100px] flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"
            >
              <div className="text-[25px] ml-[20%]">
                <MdOutlineMarkEmailRead />
              </div>
              <div className="ml-6">info@spydtech.com</div>
            </div>
           <div className="ml-[150px]"> 
           <Socialicons classsName="ml-[100px]" />
           </div>
          </div>
        </div>

        <div className={layout.sectionImg}>
          <Card color="transparent" shadow={true} className="p-12 shadow-2xl">
            <Typography
              color="white"
              className="mb-[-15px] font-normal md:text-[30px]"
            >
              Request For Free Demo
            </Typography>
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
              <Button className="mt-6 w-full" onClick={handle}>
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Approch;
