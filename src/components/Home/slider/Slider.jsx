import React, { useRef, useState, useEffect } from 'react';
import "./slider.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { PiPaperPlaneRightFill } from "react-icons/pi";

const Slider = () => {
  useEffect(() => {
    AOS.init();
  });
  const slideData = [
    {
      icons: <PiWebhooksLogoFill className='text-blue-800' />,
      name: "Strategic Web Planning",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/1_WEB_STRATEGY-2.png.webp",
      description: "Strategic web planning encompasses the meticulous planning and execution of strategies to achieve goals on the web. It involves defining objectives, identifying the target audience, and devising strategies for gaining a competitive edge in the digital space.",
      line1: "Determine optimal brand positioning",
      line2: "Gather target audience data and create user personas"
    },
    {
      icons: <RiPagesLine className='text-red-800' />,
      name: "StratInfo Framework (SIF)",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/2_PLANNING__INFORMATION_ARCHITECTURE-1.png.webp",
      description: "Strategic information architecture is the art and science of organizing and labeling content on websites and web applications. It ensures that users can easily find and comprehend the information they seek.",
      line1: "Design site structure, navigation, and page hierarchy",
      line2: "Map out the conversion funnel for each unique landing page"
    },
    {
      icons: <FaRegLightbulb className='text-yellow-800' />,
      name: "Designing Creatively Unleashed",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/3_CREATIVE_DESIGN-1.png.webp",
      description: "Creative design involves the visual and aesthetic aspects of web development. It includes designing layouts, graphics, and other visual elements to create an engaging and user-friendly experience.",
      line1: "Design your custom website",
      line2: "Incorporate your unique branding elements"
    },
    {
      icons: <FaCode className='text-cyan-900' />,
      name: "Responsive Development",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/4_RESPONSIVE_DEVELOPMENT-1.png.webp",
      description: "Responsive development focuses on creating websites and applications that adapt to different screen sizes and devices. It ensures a consistent and enjoyable user experience across desktops, tablets, and mobile devices.",
      line1: "Write and finalize coding for your website",
      line2: "Bring your custom solution to life in a secure staging site"
    },
    {
      icons: <FaRegThumbsUp className='text-green-900' />,
      name: "Quality Assurance (QA)",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/5_QUALITY_ASSURANCE-1.png.webp",
      description: "Quality assurance is the process of ensuring that a website or application meets the specified requirements and standards. It involves meticulous testing, debugging, and identifying and rectifying any issues or bugs.",
      line1: "Conduct rigorous testing across the frontend and backend",
      line2: "Ensure all features and functionalities work as intended"
    },
    {
      icons: <GrOptimize className='text-blue-800 ' />,
      name: "Launch & Optimization",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/6_LAUNCH__OPTIMIZATION-1.png.webp",
      description: "Launch optimization involves the final steps before launching a website or application. It includes performance optimization, security checks, and ensuring all elements are in place for a successful launch.",
      line1: "Perform final QA testing",
      line2: "Develop a comprehensive marketing plan for launch"
    }
  ];



  const imageRefs = slideData.map(() => useRef(null));
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);


  const scrollToImage = (index) => {
    setVisibleImageIndex(index);
    imageRefs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  };



  return (
    <>
      <div className='text-center'>
        <div className='py-6'>
          <p className='text-4xl font-semibold text-[#522D5B]'>Our Methodology for Website Design</p>
        </div>
        <div>
          <p className='text-lg text-[#000]'>Crafting a website that aligns with your distinct business objectives.</p>
          <p>Explore our meticulous design process, meticulously designed to deliver</p>
          <p>tailor-made and goal-centric digital solutions.</p>
        </div>
      </div>

      <div className='mx-auto max-w-screen-xl w-full pt-16 '>
        <div className='grid lg:grid-cols-6 gap-4 mb-12 md:grid-cols-3 grid-cols-1'>

          {slideData.map((slide, index) => (
            <div key={index} className='flex flex-col items-center justify-center space-y-2 relative '>
              <button

                className={` flex p-8 rounded-full bg-gray-300 text-4xl hover:bg-light-blue-400 `}
                onClick={() => scrollToImage(index)}
              >
                {slide.icons}
              </button>

              {index === visibleImageIndex && <div className='active-indicator   absolute w-[80px] h-[80px] '></div>}
              <div className='w-56 px-8'>
                <p
                  className={`text-gray-700 text-center hover:text-blue-400 font-extrabold cursor-pointer ${index === visibleImageIndex ? 'active' : ''
                    }`}
                  onClick={() => scrollToImage(index)}
                >
                  {slide.name}

                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex lg:flex-row  justify-center items-center swiper flex-col '>
          <div className='w-full lg:w-1/2 swiper-slide'>
            {slideData.map((slide, index) => (
              <div
                key={index}
                className={`md:h-[350px] pl-16 description-wrapper mb-4 ${index === visibleImageIndex ? 'visible' : 'hidden'
                  }`}
              >
                <div className=' py-4'>
                  <p className=' text-content text-3xl font-bold text-[#522D5B]  '>{slide.name}</p>
                </div>
                <div className=' py-4'>
                  <p className='text-gray-700 text-slide text-lg'>{slide.description}</p>
                </div>
                <div className='flex items-center gap-4'>
                  <div>
                    <PiPaperPlaneRightFill className='text-[#522D5B]' />
                  </div>
                  <div>
                    <p className='text-slide'>{slide.line1}</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div>
                    <PiPaperPlaneRightFill className='text-[#522D5B]' />
                  </div>
                  <div>
                    <p className='text-slide'>{slide.line2}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
          <div className='w-full lg:w-1/2 swiper-slide' >
            {slideData.map((slide, index) => (
              <div
                key={index}
                ref={imageRefs[index]}
                className={`image-wrapper flex justify-center items-center  ${index === visibleImageIndex ? 'visible' : 'hidden'
                  }`}
              >
                <img src={slide.image} alt={`Image ${index + 1}`} className=' h-auto image-slide' />
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
        .active-indicator {
          content: "";
          position: absolute;
       
          border-radius: 50%;
          box-shadow: 0 0 0 20px #522d5b;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .active-text {
        }

        /* Hide navigation buttons in large view */
     
        .image-slide{
          animation: slideFromBottom 0.5s ease forwards;

        }
        @keyframes slideFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px); /* Start from the bottom */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Slide to the top */
          }
        }
        .text-slide,.text-content{
         
          animation: slideFromRight 0.5s ease forwards;
          
        }
        @keyframes slideFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px); /* Start from the right */
          }
          100% {
            opacity: 1;
            transform: translateX(0); /* Slide to the left */
          }
        }
      `}
        </style>
      </div>


    </>



  );


};

export default Slider;


