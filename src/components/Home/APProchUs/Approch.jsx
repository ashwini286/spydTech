import React, { useEffect } from "react";
import { layout } from "../../../style";
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

// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Approch = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div
      className=""
        style={{
          backgroundImage:
            'url("https://www.aspirantsoftsolutions.com/img/slides/footer-bg.jpg")',
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 6,
          }}
        >
          <section className={`${layout.section} max-w-full  w-full`}>
            <div
              className={`${layout.sectionInfo} text-center`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className=" text-center mr-[60px]">
                <div className="flex justify-center items-center flex-row pr-16">
                  <div>
                    <img src={Logo} alt="sorry" className="" />
                  </div>
                  <p
                    className="font-poppins md:text-[30px] text-white text-xl"
                  >
                    Approach Us
                  </p>
                </div>

                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"
                  
                >
                  <div className="text-[40px] ml-[15%]">
                    <LuMapPin />
                  </div>
                  <div className="ml-3">REACH US</div>
                </div>
                <div className="mt-4 flex justify-end items-justify ml-[120px]">
                  <p className="text-white w-[250px] ">
                    Meera complex Plot, No-852, 2nd floor
                    Madhapur Hyderabad, Telangana - 500081
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full leading-[80.8px]"
                >
                  <div className="text-[25px] ml-[20%]">
                    <FiPhoneCall />
                  </div>
                  <div className="ml-6">040-43334849</div>
                </div>
                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"
                >
                  <div className="text-[25px] ml-[20%]">
                    <MdOutlineMarkEmailRead />
                  </div>
                  <div className="ml-6">info@spydtech.com</div>
                </div>
                <Socialicons />
              </div>
            </div>

            <div className={layout.sectionImg}>
              <Card color="transparent" shadow={false}>
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
                    <Input color="white" label="Name" />
                    <Input color="white" label="Email" />
                    <Input color="white" label="Phone No" />
                    <div className="w-86 border-0">
                      <Textarea
                        color="blue"
                        label="Message"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <Button className="mt-6 w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </section>
        </div>

        {/* Background overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // opacity: 0.5,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust the alpha value as needed
            zIndex: 2,
          }}
        />
      </div>
    </>
  );
};

export default Approch;
