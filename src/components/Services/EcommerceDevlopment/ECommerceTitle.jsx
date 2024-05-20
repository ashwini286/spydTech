import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import ChatBot from "../../Home/Home/ChatBot";
const ECommerceTitle = () => {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbarupp />
      <div>
        <img
          src="https://www.globaltimes.cn/Portals/0/attachment/2023/2023-09-03/6d075617-22f4-4a0b-8f51-80eead6d907c.jpeg"
          className=" object-cover w-full md:h-[550px]"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-70"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className="text-center text-2xl md:pt-16 w-[850px] md:mt-8 font-bold ">
          Empower Your Business with Seamless eCommerce Solutions: Unleashing
          the Future of{" "}
          <span className="text-blue-600 text-4xl mx-auto border-b-2 border-cyan-800 w-1/2">
            {" "}
            Digital E-Commerce{" "}
          </span>{" "}
        </div>
      </div>

      {/* Magento eCommerce Development  */}
      <div className="flex flex-col md:flex-row  items-center justify-center gap-8 ">
        <div
          className="md:w-[620px] md:h-[500px] flex justify-center items-justify flex-col md:pl-24 pl-4  "
          data-aos="fade-up"
        >
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className=""> Magento eCommerce Development </h1>
          </div>
          <div className="py-4  text-black md:leading-8">
            <p>
              Magento eCommerce Development empowers businesses to create
              engaging, scalable, and high-performing online stores that drive
              revenue and customer satisfaction. With its unparalleled
              flexibility, customization options, and rich feature set, Magento
              is the platform of choice for businesses looking to thrive in the
              competitive world of eCommerce.
            </p>
            <Link to="/services/magento_eCommerce_development">
              <button className="bg-[#ff8a00] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500] ">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        <div
          className="md:w-[620px] md:h-[500px] text-white flex justify-center items-justify flex-col "
          data-aos="fade-down"
        >
          <div>
            <img
              src="https://www.heliossolutions.co/blog/wp-content/uploads/2015/09/magento-development.png"
              alt=""
            />
            {/* <img src="https://e7.pngegg.com/pngimages/548/731/png-clipart-graphy-others-web-design-sticker.png" alt="" /> */}
          </div>
        </div>
      </div>

      {/* mobile commerce (mcommerce) */}
      <div className="flex flex-col-reverse md:flex-row  items-center justify-center">
        <div
          className="md:w-[620px] md:h-[500px] text-white flex justify-center items-justify flex-col "
          data-aos="fade-down"
        >
          <div>
            <img
              src="https://theinvestorsbook.com/wp-content/uploads/2020/03/features-of-m-commerce-2.jpg"
              alt=""
            />
          </div>
        </div>

        <div
          className="md:w-[620px] md:h-[500px] flex justify-center items-justify flex-col md:pl-24 pl-4 "
          data-aos="fade-up"
        >
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className=""> Mobile Commerce (M-Commerce) </h1>
          </div>
          <div className="py-4  text-black md:leading-8">
            In the era of constant connectivity, Mobile Commerce (mCommerce)
            emerges as the driving force behind the evolution of online
            shopping. As consumers increasingly turn to their smartphones and
            tablets for seamless, on-the-go experiences, businesses must harness
            the power of mCommerce to stay ahead in the competitive digital
            landscape.
          </div>
          <Link to="/services/mobile_commerce_(mCommerce)">
            <button className="bg-[#ff8a00] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500]">
              Read More
            </button>
          </Link>
        </div>
      </div>

      {/*  E-Commerce */}
      <div className="flex flex-col md:flex-row  items-center justify-center gap-8 ">
        <div
          className="md:w-[620px] md:h-[500px] flex justify-center items-justify flex-col md:pl-24 pl-4 "
          data-aos="fade-up"
        >
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className=""> E-Commerce </h1>
          </div>
          <div className="py-4  text-black md:leading-8">
            <p>
              In the digital era, eCommerce stands as the gateway to a
              revolutionary shopping experience, transforming the way we buy and
              sell goods and services. At its core, eCommerce, or Electronic
              Commerce, refers to the online exchange of products and services,
              fostering a virtual marketplace that transcends geographical
              boundaries. Let's explore the key elements that define and
              characterize the essence of eCommerce.
            </p>
            <Link to="/services/eCommerce">
              <button className="bg-[#ff8a00] text-white py-2 px-4 rounded-md  shadow-lg shadow-orange-700 mt-4 hover:bg-[#FF4500]">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div></div>
        <div
          className="md:w-[620px] md:h-[500px] text-white flex justify-center items-justify flex-col "
          data-aos="fade-down"
        >
          <div>
            <img
              src="https://www.thethrive.in/wp-content/uploads/2020/09/16092020-6.jpg"
              alt=""
            />
            {/* <img src="https://e7.pngegg.com/pngimages/548/731/png-clipart-graphy-others-web-design-sticker.png" alt="" /> */}
          </div>
        </div>
      </div>

      {/* How to help client  */}

      <div
        className="mt-10 md:px-4 mb-10 bg-[#242B40] rounded-lg md:mx-8 pt-8"
        data-aos="fade-down"
      >
        <div className="p-4 pl-16 md:text-3xl text-center text-white font-bold">
          Empower Your Business with SPY D Tech's eCommerce Solutions
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:px-8 text-white">
          <div className="flex items-center w-[89%] gap-4 pb-8 pl-6">
            <p>
              <BlurCircularIcon />
            </p>
            <p>
              Embark on eCommerce excellence with SPYD Tech. Our skilled team
              uses cutting-edge technologies to fortify web applications,
              ensuring utmost security for your digital assets.
            </p>
          </div>
          <div className="flex items-center w-[89%] gap-4 pb-8 pl-6">
            <p>
              <BlurCircularIcon />
            </p>
            <p>
              At SPYD Tech, we exceed industry standards. Our advanced security
              measures in frontend technologies secure your data, providing a
              foundation for all online business activities.
            </p>
          </div>
          <div className="flex items-center w-[89%] gap-4 pb-8 pl-6">
            <p>
              <BlurCircularIcon />
            </p>
            <p>
              Experience seamless integration with our modular frontend
              solutions. SPYD Tech ensures swift implementation, enhancing the
              efficiency of your eCommerce ecosystem.
            </p>
          </div>
          <div className="flex items-center w-[89%] gap-4 pl-6 pb-16">
            <p>
              <BlurCircularIcon />
            </p>
            <p>
              Committed to excellence, SPYD Tech strengthens security and
              optimizes development budgets. Trust us for secure, scalable, and
              cost-effective eCommerce solutions tailored to your business
              needs.
            </p>
          </div>
        </div>
      </div>

      <Approch />
      <ChatBot />
    </>
  );
};

export default ECommerceTitle;
