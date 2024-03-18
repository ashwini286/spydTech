import React,{useEffect} from "react";
import girl from "../../assets/carrer/girl.svg";
import { IoLocation } from "react-icons/io5";
const Card = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" pt-[130px]">
        <div>
          <p className="md:text-6xl text-2xl pl-8 pt-8">
            Are you open to joining us?
          </p>
        </div>
        <div className="pt-8 md:pl-8">
          <img src={girl} className="md:w-[850px] md:h-[550px]" />
        </div>
      </div>
      <div className="pt-8 ">
        <p className="md:text-5xl text-xl pl-8">
          Open to making connections on the moon{" "}
        </p>
        <p className="md:text-5xl text-xl pl-8 pt-2">
          and beyond? Check our top roles:
        </p>
      </div>
      <div className="flex items-center justify-center flex-col pt-12">
        <div className="py-4">
          <p className="md:text-4xl text-2xl">Openings</p>
        </div>
        <div className="md:w-[800px] pb-4 text-xl">
          <p className="text-center">
            From support to development, it's an ocean of opportunities in our
            business lifecycle. Walk-ins and referral programs are how we secure
            positions for talented SPY D in our team.
          </p>
        </div>
      </div>

      <div className="flex md:justify-end justify-center items-center flex-row mr-16">
        <div className="relative ">
          <IoLocation className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />

          <input
            type="text"
            placeholder="Location - Hyderabad"
            disabled
            className="pl-10 pr-4 py-2 rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
