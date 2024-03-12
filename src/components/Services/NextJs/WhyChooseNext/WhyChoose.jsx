import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
const WhyChoose = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="flex flex-col md:flex-row  items-center justify-center md:gap-8 pb-8">
        <div
          className="md:w-[620px] flex justify-center items-justify flex-col md:pl-24 pl-4 h-[400px]"
          data-aos="fade-up"
        >
          <div className="text-2xl text-black  md:px-4 ">
            <h1 className=" md:font-extrabold md:text-4xl font-bold md:pb-[40px] py-8">
              Elevate Your Projects with Next.js
            </h1>
          </div>

          <div className=" ">
            <div className="flex items-center gap-4">
              <p>
                <RadioButtonCheckedIcon className="text-[#ff9800]" />
              </p>
              <p className="text-black">Unlocking Potential with Next.js</p>
            </div>
            <br />
            <br />
            <div className="flex items-center gap-4  mt-[-30px]">
              <p>
                <RadioButtonCheckedIcon className="text-[#ff9800]" />
              </p>
              <p className="text-black">
                Next.js apps remove bottlenecks, seamlessly integrate services,
                enhance operations, and boost efficiency, contributing to
                improved productivity for clients.
              </p>
            </div>
            <br />
            <br />
            <div className="flex items-center gap-4  mt-[-30px]">
              <p>
                <RadioButtonCheckedIcon className="text-[#ff9800]" />
              </p>
              <p className="text-black">
                Next.js applications eliminate bottlenecks, seamlessly
                integrating services for clients, enhancing operations,
                improving efficiency, and boosting productivity.
              </p>
            </div>
          </div>
        </div>

        <div></div>
        <div
          className="md:w-[620px]  text-white flex justify-center items-justify flex-col "
          data-aos="fade-right"
        >
          <div className="">
            <img
              src="https://www.datocms-assets.com/48401/1644864897-next-framework.jpeg?fit=max&w=900 "
              alt=""
              className="hover:shadow-xl  pt-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
