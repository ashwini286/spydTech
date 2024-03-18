import React, { useState, useEffect } from "react";
import { layout } from "../../../style";
import Socialicons from "../../Home/APProchUs/SocialIcon";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
const LetsTalk = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [massage, setMassage] = useState("");

  const handle = (e) => {
    e.preventDefault();
    var LetsTalkdata = JSON.parse(localStorage.getItem("LetsTalkdata") || "[]");
    var data = {
      name,
      email,
      phoneNo,
      massage,
    };
    LetsTalkdata.push(data);
    localStorage.setItem("LetsTalkdata", JSON.stringify(LetsTalkdata));
    setName("");
    setEmail("");
    setPhoneNo("");
    setMassage("");
  };

  return (
    <>
      <div
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
          <section className={`${layout.section} max-w-full`}>
            <div
              className={`${layout.sectionInfo} text-center`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={layout.sectionImg}>
                <Card color="transparent" shadow={false}>
                  <Typography
                    color="white"
                    className="mb-[-15px] font-normal lg:text-[30px]  mr-[250px] flex-row"
                  >
                    Let's talk
                  </Typography>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80">
                    <div className="mb-1 flex flex-col gap-6">
                      <Input
                        color="white"
                        label="Name"
                        className="rounded-none "
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                      <Input
                        color="white"
                        label="Email"
                        className="rounded-none "
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <Input
                        color="white"
                        label="Phone No"
                        className="rounded-none "
                        onChange={(e) => setPhoneNo(e.target.value)}
                        value={phoneNo}
                      />
                      <div className="w-86 border-0">
                        <Textarea
                          color="blue"
                          label="Message"
                          variant="outlined"
                          className="rounded-none "
                          onChange={(e) => setMassage(e.target.value)}
                          value={massage}
                        />
                      </div>
                    </div>
                    <Button className="mt-6" fullWidth onClick={handle}>
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>

            <div
              className={`${layout.sectionInfo}  `}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <div>
                <h1 className="text-white p-4 lg:text-4xl">Quick Contacts</h1>
              </div>
              <div className="w-full flex justify-center items-center flex-col">
                <div className="h-[180px] lg:w-[300px] bg-[#2F4052] pt-6 pl-4 w-full">
                  <div className="text-white text-xl">
                    <h1>General Inquiries</h1>
                  </div>
                  <div className="flex flex-row xs:text-[10px] text-[15px] text-white  pt-2">
                    <div className="text-[20px] text-xl">
                      <MdOutlineMarkEmailRead />
                    </div>
                    <div className="ml-3"> info@spydtech.com</div>
                  </div>

                  <div className="flex flex-row xs:text-[10px] text-[15px] text-white  pt-2">
                    <div className="text-[20px] text-xl">
                      <MdOutlineMarkEmailRead />
                    </div>
                    <div className="ml-3">careers@spydtech.com</div>
                  </div>
                  <div className="flex flex-row xs:text-[10px] text-[15px] text-white  pt-2">
                    <div className="text-[20px]">
                      <FaPhoneAlt />
                    </div>
                    <div className="ml-3">+91 6305207832</div>
                  </div>
                  {/* <div className="flex  flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full pt-2">
                    <div className="text-[20px]">
                      <FaPhoneAlt />
                    </div>
                    <div className="ml-3"></div>
                  </div> */}
                </div>
                <br />
                <div className="bg-[#2F4052] h-[100px] lg:w-[300px] w-full">
                  <div className="text-white text-xl pt-4 pl-4">
                    <h1>Careers</h1>
                  </div>
                  <div className="flex flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full pt-2 pl-4">
                    <div className="text-[20px] text-xl">
                      <MdOutlineMarkEmailRead />
                    </div>
                    <div className="ml-3">careers@spydtech.com</div>
                  </div>
                </div>
              </div>
              {/* social media */}
              <div className="flex justify-center items-center flex-row font-poppins ">
                <div className="text-white">
                  <Socialicons />
                </div>
              </div>
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

export default LetsTalk;
