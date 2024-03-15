import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IMG from "../../assets/SMM.jpg";
import Main from "./SMMmain/Main";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";
import Welcome from "../../Home/Home/Welcom";
import Media from "./Media";
import MediaProcess from "./MediaProcess";
import People from "../../assets/Digital marketing/people.svg";

function SMMpage() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbarupp />
      <div className="relative">
        <img
          src="https://wallpapercave.com/wp/wp6626261.jpg"
          className="rounded-b-2xl h-[50vh] w-full md:h-[550px] md:w-max-auto object-fit "
          style={{ filter: "brightness(100%)" }}
          alt="Background"
        />
        <div className="absolute w-[100%] object-cover inset-0 h-[50vh] md:h-[550px] bg-black bg-opacity-50 rounded-b-2xl "></div>
      </div>
      <div className="text-white md:p-10 flex items-center justify-center flex-col">
        <div
          className="font-bold text-4xl text-center md:text-6xl bg-gradient-to-l from-pink-500 to-blue-500
 inline-block text-transparent bg-clip-text py-4"
        >
          SOCIAL MEDIA MARKETING
        </div>
        <div className="text-xl text-black text-center ">
          Reach out to your target audience / ultimate customer, utilizing the
          unlimited power that social media platforms provide and the relatively
          low-cost budgeting: Facebook, Instagram & LinkedIn{" "}
        </div>
      </div>
      <div className=" text-center md:p-10 space-y-4" data-aos="fade-up">
        <h1 className="text-3xl font-bold py-8">
          WE CAN{" "}
          <span className='text-blue-600 text-4xl mx-auto border-b-2 border-cyan-800 w-1/2"'>
            HELP YOU OUT!
          </span>
        </h1>

        <div className="bg-[#2b2d42] rounded-xl w-full">
          <div className="flex flex-col md:flex-row  items-center justify-center ">
            <div
              className="md:w-[720px] pt-8  md:h-[500px] text-left flex flex-row items-center justify-center "
              data-aos="fade-up"
            >
              <div className=" text-white w-full pl-4">
                <div>
                  The pervasive influence of social media on the lives of
                  individuals worldwide, including those in Cyprus, is
                  indisputable. According to a study by Statista, social media
                  engagement ranks among the most prevalent online activities,
                  with an estimated 2.65 billion users in 2018, projected to
                  rise to nearly 3.1 billion by 2021. This statistic underscores
                  the significance of social media platforms as hubs where
                  potential customers actively engage. Across these platforms,
                  users seek information and engage in discussions on diverse
                  topics. Recognizing this trend, our company maintains a
                  presence on social media channels to promptly address customer
                  inquiries, comments, and reviews, thus integrating social
                  media into our core digital strategy. For businesses yet to
                  establish a foothold in the realm of social media, DomainStar
                  offers expertise and guidance to navigate these channels
                  effectively. Leveraging our experience, we specialize in
                  crafting and managing campaigns on prominent platforms such as
                  Facebook, Instagram, and LinkedIn. With DomainStar, your
                  company can harness the power of social media to connect with
                  your target audience efficiently.
                </div>
              </div>
            </div>

           
            <div
              className="md:w-[500px] md:h-[450px] text-white flex justify-center items-justify flex-col "
              data-aos="fade-down"
            >
              <div>
                <img src={People} className="h-[450px]" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Media />
      <MediaProcess />

      <Approch />
    </>
  );
}

export default SMMpage;
