import React from "react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";
import IMG from "../../assets/ecommerce.jpg";
import IMG2 from "../../assets/mobileanimation2k.gif";
import { MdOutlinePersonSearch } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { GrGroup } from "react-icons/gr";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { TbSocial } from "react-icons/tb";

function ECommerce() {
  return (
    <>
      <Navbarupp />
      <div>
        <img
          src="https://images.prismic.io//intuzwebsite/151ff770-ad5b-4896-97c0-0973c7239bec_Banner.png?w=1200&q=80&auto=format,compress&fm=png8"
          className=" object-cover w-full md:h-[550px]"
          alt="Background Image"
        />
      </div>
      <div className="grid sm:grid-flow-row md:grid-flow-row lg:grid-cols-2 p-4 ml-0  text-black">
        <div className="">
          <img
            src={IMG2}
            className="sm:w-[100%] h-[30rem] ml-[0%] lg:w-[90%] bg-gradient-to-bt from-black-900"
          />
        </div>
        <div className="w-full lg:pt-[-15%] pt-4 pl-4 space-y-2 text-left tracking-wider">
          <p>
            SPY D Technology, a trailblazer in E-Commerce development, is
            dedicated to crafting innovative and scalable solutions for
            businesses of all sizes worldwide. Our commitment to excellence is
            evident in the seamless integration of design thinking principles,
            ensuring an enriched user interface and experience.
          </p>
          <p>
            With a profound understanding of the E-Commerce landscape, we
            specialize in building robust platforms using leading technologies
            such as Magento, Shopify, Big Commerce, WooCommerce, Volusion, and
            3D Cart. Our focus on creating secure and user-friendly environments
            extends to the implementation of best practices in payment gateway
            integrations.
          </p>
          <p>
            Our E-Commerce websites boast enhanced features, exceptional
            performance, and agility, all wrapped in a visually appealing UI/UX.
            We prioritize safety through state-of-the-art protocols during
            development, and our flexible architecture lays the groundwork for
            future enhancements.
          </p>
          <p>
            Experience the seamless integration of product listings, shopping
            carts, and payment gateways, offering users a hassle-free journey
            for increased conversions. With value-added features that boost user
            engagement, SPY D Technology paves the way for revenue growth.
          </p>
        </div>
      </div>
      <div className="bg-[rgb(248,244,244)]   pt-5 py-4 px-4">
        <h1 className="text-2xl text-bold text-center pb-10 pl-4 tracking-wider">
          Grow Sales with Online Marketing
        </h1>
        {/* <div className='grid sm:grid-flow-row md:grid-flow-col-2 lg:grid-flow-col'> */}
        <div className=" grid sm:grid-row md:grid md:grid-row md:px-4 lg:grid-cols-3 gap-10 pl-4 ">
          <div className="grid sm:grid-row md:grid-col lg:grid-col-3  justify-center items-center ">
            <div className="flex ">
              <MdOutlinePersonSearch className="text-6xl  md:mt-7 text-white bg-red-500" />{" "}
              <h1 className=" p-5  text-2xl tracking-wider">
                Search Engine Optimization
              </h1>
            </div>
            <p className="tracking-wider ">
              We ensure the website visibility increase organically in the
              search engines for relevant and targeted keywords, drive traffic,
              and generate leads and conversions.
            </p>
          </div>

          <div className="grid sm:grid-row md:grid-col lg:grid-col  justify-center items-center ">
            <div className="flex ">
              <BiSolidOffer className="text-6xl md:mt-3 text-white bg-blue-900" />
              <h1 className="p-5 text-2xl tracking-wider">
                Offers & Discounts
              </h1>
            </div>
            <p className="tracking-wider">
              We offer innovative ideas and implement those techniques such as
              offers and discounts to create a shopping experience for your
              customers
            </p>
          </div>

          <div className="grid sm:grid-row md:grid-col lg:grid-col  justify-center items-center ">
            <div className="flex">
              <GrGroup className="text-6xl  text-white bg-red-700" />
              <h1 className="p-5 text-2xl tracking-wider">Referral Programs</h1>
            </div>
            <p className="tracking-wider">
              We help our clients integrate affiliate marketing program to
              create multiple revenue streams, maximize sales and grow rapidly.
            </p>
          </div>
          <div className="grid sm:grid-row md:grid-col lg:grid-col  justify-center items-center ">
            <div className="flex ">
              <TbTargetArrow className="text-6xl lg:mt-7 md:mt-7 text-white bg-orange-400" />
              <h1 className="p-5 text-2xl  tracking-wider">
                Google Adwords & Pay Per Click Advertising
              </h1>
            </div>
            <p className="tracking-wider">
              We excel in creating and launching paid campaigns in AdWords,
              Facebook and Instagram reduce CPC and increase conversions.
            </p>
          </div>
          <div className="grid sm:grid-row md:grid-col lg:grid-col justify-center items-center ">
            <div className="flex ">
              <SiAmazonsimpleemailservice className="text-6xl  text-white bg-[#2dd4bf]" />
              <h1 className="p-5 text-2xl  tracking-wider">Email Campaigns</h1>
            </div>
            <p className="tracking-wider">
              We create landing and squeeze pages generate email lists and
              execute email marketing campaigns leading to conversions
            </p>
          </div>
          <div className="grid sm:grid-row md:grid-col lg:grid-col  justify-center items-center ">
            <div className="flex  ">
              <TbSocial className="text-6xl pl-4 lg:mt-7 md:mt-10 text-white bg-[#0ea5e9]" />
              <h1 className="p-5 text-2xl tracking-wider">
                Create Social Media Presence
              </h1>
            </div>
            <p className="tracking-wider">
              Social Media Optimization and Marketing is our forte. We create
              social media business pages, interact, communicate and engage with
              users to drive quality traffic.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Approch />
    </>
  );
}

export default ECommerce;
