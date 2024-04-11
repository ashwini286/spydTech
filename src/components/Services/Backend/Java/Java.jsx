import React from "react";
import { Link } from "react-router-dom";
import JavaPic from "../../../assets/javapic.png";
const Java = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-center  w-full ">
      <div className="md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ">
        <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
          <h1 className="text-black"> Java Development </h1>
        </div>
        <div className="py-4  text-black md:leading-8 ">
          <p>
            Java has emerged as a valuable asset for developers globally. Java,
            being an open-source programming language, provides pre-built code,
            relieving developers from the need to write everything from scratch.
            This eliminates the laborious process of manual coding, saving time,
            and facilitating swift development.
          </p>
          <Link to="/services/Java">
            <button className="bg-[#f18701] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500]">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div></div>
      <div className="md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ">
        <div>
          <img src={JavaPic} alt="" className="md:ml-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default Java;
