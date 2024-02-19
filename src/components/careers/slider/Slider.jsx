import React, { useRef, useState , useEffect} from 'react';
import Swiper from 'swiper';
import "./slider.css"
import 'swiper/css';
import AOS from "aos";
import "aos/dist/aos.css";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { RiPagesLine } from "react-icons/ri";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const Slider = () => {
    useEffect(() => {
        AOS.init();
      });
  const slideData = [
    {
      icons: <PiWebhooksLogoFill className='text-blue-800 '/>,
      name: "WEB STRATEGY",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/1_WEB_STRATEGY-2.png.webp",
    
      description: "Web strategy involves planning and execution of strategies to achieve goals on the web. It includes defining objectives, target audience, and ways to achieve a competitive edge in the digital space."
    },
    {
      icons: <RiPagesLine className='text-red-800'/>,
      name: "Planning & Information Architecture",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/2_PLANNING__INFORMATION_ARCHITECTURE-1.png.webp", "data-aos": "fade-right",
      description: "Information architecture is the art and science of organizing and labeling content on websites and web applications. It ensures that users can easily find and understand the information they're looking for."
    },
    {
      icons: <FaRegLightbulb className='text-yellow-800'/>,
      name: "Creative Design",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/3_CREATIVE_DESIGN-1.png.webp", "data-aos": "fade-right",
      description: "Creative design involves the visual and aesthetic aspects of web development. It includes designing layouts, graphics, and other visual elements to create an engaging and user-friendly experience."
    },
    {
      icons: <FaCode className='text-cyan-900' />,
      name: "Responsive Development",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/4_RESPONSIVE_DEVELOPMENT-1.png.webp",
      description: "Responsive development focuses on creating websites and applications that adapt to different screen sizes and devices. It ensures a consistent and enjoyable user experience across desktops, tablets, and mobile devices."
    },
    {
      icons: <FaRegThumbsUp className='text-green-900' />,
      name: "Quality Assurance (QA)",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/5_QUALITY_ASSURANCE-1.png.webp",
      description: "Quality assurance is the process of ensuring that a website or application meets the specified requirements and standards. It involves testing, debugging, and identifying and fixing any issues or bugs."
    },
    {
      icons: <GrOptimize className='text-blue-800'/>,
      name: "Launch & optimization",
      image: "https://www.digitalsilk.com/wp-content/uploads/2023/09/6_LAUNCH__OPTIMIZATION-1.png.webp",
      description: "Launch optimization involves the final steps before launching a website or application. It includes performance optimization, security checks, and ensuring all elements are in place for a successful launch."
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
    <div className='mx-auto max-w-screen-xl w-full pt-16'>
    <div className='grid lg:grid-cols-6 gap-4 mb-12 md:grid-cols-2 grid-cols-1'>
      {slideData.map((slide, index) => (
        <div key={index} className='flex flex-col items-center space-y-2 relative '>
          <button
            className={`p-10 rounded-full bg-gray-300 text-4xl hover:bg-light-blue-400 ${
              index === visibleImageIndex ? 'active' : ''
            } ${
              index === visibleImageIndex - 1 && index !== 0 ? 'lg:left-0 hidden lg:block' : ''
            } ${
              index === visibleImageIndex + 1 && index !== slideData.length - 1 ? 'lg:right-0 hidden lg:block' : ''
            }`}
            onClick={() => scrollToImage(index)}
          >
            {index === visibleImageIndex - 1 && index !== 0 && <FaChevronLeft className='left-0 lg:hidden' />}
            {index === visibleImageIndex + 1 && index !== slideData.length - 1 && (
              <FaChevronRight className='right-0 lg:hidden' />
            )}
            {slide.icons}
          </button>

          {index === visibleImageIndex && <div className='active-indicator'></div>}
          <div className='w-56 px-8 '>
            <p
              className={`text-gray-700 text-center hover:text-blue-400 font-extrabold cursor-pointer ${
                index === visibleImageIndex ? 'active' : ''
              }`}
              onClick={() => scrollToImage(index)}
            >
              {slide.name}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className='flex lg:flex-row justify-center items-center swiper flex-col'>
      <div className='w-full lg:w-1/2 swiper-slide'>
        {slideData.map((slide, index) => (
          <div
            key={index}
            className={`description-wrapper mb-4 ${
              index === visibleImageIndex ? 'visible' : 'hidden'
            }`}
          >
            <p className='text-gray-700'>{slide.name}</p>
            <p className='text-gray-700'>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className='w-full lg:w-1/2 swiper-slide' data-aos='fade-left'>
        {slideData.map((slide, index) => (
          <div
            key={index}
            ref={imageRefs[index]}
            className={`image-wrapper mb-4 ${
              index === visibleImageIndex ? 'visible' : 'hidden'
            }`}
          >
            <img src={slide.image} alt={`Image ${index + 1}`} className='w-full h-auto' />
          </div>
        ))}
      </div>
    </div>
    <style>
      {`
        .active-indicator {
          content: "";
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          box-shadow: 0 0 0 20px #522d5b;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .active-text {
        }

        /* Hide navigation buttons in large view */
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none;
          }
        }
      `}
    </style>
  </div>
);


};

export default Slider;
