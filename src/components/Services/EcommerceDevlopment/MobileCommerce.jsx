import React from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import IMG from "../../assets/e-commerce-Mobile.webp";
import Approch from "../../Home/APProchUs/Approch";
import IMG1 from "../../assets/mobileIcon.avif";
import { PiNumberOne } from "react-icons/pi";
import { PiNumberTwo } from "react-icons/pi";
import { PiNumberThree } from "react-icons/pi";
import { PiNumberFour } from "react-icons/pi";
import { PiNumberFive } from "react-icons/pi";
import { PiNumberSix } from "react-icons/pi";
import IMG23 from "../../assets/MOBILEanimation.gif";

function MobileCommerce() {
  return (
    <>
      <Navbarupp />
      <div>
        <img
          src={IMG}
          className="md:w-[100%] h-full object-cover rounded-bl-[5%] rounded-br-[5%] rounded"
          alt="Background Image"
        />
      </div>
      <div className="flex items-center justify-center pt-8">
        <div className="text-center text-2xl md:pt-16 w-[850px] md:mt-8 font-bold ">
        Elevate Your Shopping Experience with Seamless E-Commerce{" "}
          <span className="text-blue-600 text-4xl mx-auto border-b-2 border-cyan-800 w-1/2">
            {" "}
            Mobile Marvel{" "}
          </span>{" "}
        </div>
      </div>
      <div className="flex  flex-row-reverse md:flex-col">
        <div className="p-5 grid  md:grid-flow-col-dense ">
          <div>
            <img src={IMG23} className="sm:pl-8 w-[80%] h-[30rem]" />
          </div>

          <div className="sm:w-full lg:mt-8 text-left mt-4 space-y-3   text-black pl-4">
            <p>
              India is the fastest growing country in E-Commerce niche with
              revenue expected to surpass US$ 120 Billion by 2020.
            </p>
            <p>
              About 65 Crore Indians use mobile phone and about 30 Crores of
              them use smart phone, which is expected to grow to 53 Crore smart
              phones users by the end 2019.
            </p>
            <p>
              And increasing number of start-ups coming up in India in
              E-Commerce sector offering virtually everything online from
              apparels, electronic, home appliance, medicines and food, mobile
              commerce is posed to play a significant role in driving overall
              e-commerce growth in India.
            </p>
            <p>
              We at SpyD technology have hired, trained and nurtured exceptional
              talented manpower to meet the growing demands of M-Commerce. We
              offer turnkey solutions by bundling E-Commerce and M-Commerce to
              ensure the products are accessible to users on multiple platforms.
            </p>
            <p>
              We offer Mobile Commerce solutions for native operating systems
              such as Android, IOS and also build hybrid apps accessible on
              multiple devices irrespective of the operating system. Our time
              tested, global accepted best practices in designing, developing
              and deploying M-Commerce mobile applications have won accolades
              from our clients world over.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#2dd4bf] w-[100%] p-5">
        <h1 className="text-white text-4xl ml-[0%] text-center tracking-widest pb-2">
          Mobile eCommerce
        </h1>
        <p className="text-white text-1xl ml-[0%] text-center tracking-widest pb-10">
          as per with latest technology
        </p>
        <div className="w-full text-left space-y-2 text-white pt-5 pl-4 tracking-wide">
          <p className="sm:line-clamp-3">
            Expertise mobile commerce solutions fully integrates with your
            existing e Commerce website that includes product catalogue,
            inventory, shipping methods, payments and checkout as well as all
            other functionalities.
          </p>
          <p className="sm:pl-7.5">
            Designing a new store & integrating your existing online store with
            a mobile app with e Commerce features, helps you with the perfect
            solution for your business. If you are looking at expanding your
            current boundaries and venturing out into the mobile space, we can
            assist you with the affordable up gradation. Mobile commerce apps
            are not just business online, but opportunities for business
            expansion that includes tapping the huge mobile user base and
            getting an edge over the competition
          </p>
        </div>
      </div>
      <div className="grid lg:grid-flow-col pl-4">
        <div className="">
          <img src={IMG1} className="w-[80%] h-[100%] text-center pl-8" />
        </div>
        <div className="">
          <div className="grid sm:grid-flow-row lg:grid-flow-row pb-4">
            <h1 className="text-2xl lg:mt-16 pt-2  pl-4 ml-2">
              Our Mobile Commerce Development Services Include
            </h1>

            <div className="mt-[5%]  text-black text-left pl-4 space-y-2">
              <div className="flex items-center  flex-row gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberOne className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  Mobile- friendly technology{" "}
                </div>{" "}
              </div>
              <div className="flex items-center flex-row gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberTwo className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  {" "}
                  with your existing online websites{" "}
                </div>{" "}
              </div>
              <div className="flex items-center flex-row  gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberThree className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  Support for multiple stores{" "}
                </div>{" "}
              </div>
              <div className="flex items-center flex-row  gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberFour className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  Marketing Power Tools
                </div>{" "}
              </div>
              <div className="flex items-center flex-row  gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberFive className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  Customer-Attraction Features{" "}
                </div>{" "}
              </div>
              <div className="flex items-center flex-row gap-4">
                {" "}
                <div>
                  {" "}
                  <PiNumberSix className=" md:text-2xl " />
                </div>
                <div className="text-md md:text-2xl ">
                  Compatible with multiple devices{" "}
                </div>{" "}
              </div>
              {/* <div className='flex '> <PiNumberTwo className='text-2xl  ' />Zero-interruption data integration
                with your existing online websites</div>
              <div className='flex '> <PiNumberThree className='text-2xl ' />Support for multiple stores</div>
            </div>

            <div className=' mt-[2%]  ml-15 space-y-2  text-black pl-4 pb-4 '>


              <div className='flex '> <PiNumberFour className='text-2xl ' />Powerful features to incorporate marketing</div>
              <div className='flex '><PiNumberFive className='text-2xl  ' />Features that are compelling and attract new customers</div>
              <div className='flex  '><PiNumberSix className='text-2xl  ' />Compatible with multiple devices</div>
 */}
            </div>
          </div>
        </div>
      </div>
      <Approch />=
    </>
  );
}

export default MobileCommerce;
