import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbArrowsShuffle2 } from "react-icons/tb";
import { TbJumpRope } from "react-icons/tb";
import { MdGroup } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { BsBrowserChrome } from "react-icons/bs";
import { FaBrain } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { AiOutlineGoogle } from "react-icons/ai";
import { GrWheelchair } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFiletypeXml } from "react-icons/bs";
import { AiOutlineExclamation } from "react-icons/ai";
import { BsDropbox } from "react-icons/bs";
import { AiOutlineApartment } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import ApprochUs from "../../Home/APProchUs/Approch";

const features = [
  { Icon: TbJumpRope, title: "Integrations", description: "Explore our industry Integrations marketplace and partners" },
  { Icon: MdGroup, title: "Job Manager", description: "Manage your job listings through our Management system" },
  { Icon: TbArrowsShuffle2, title: "Apply workflow", description: "Customize your Candidate application workflow to suite your business needs." },
  { Icon: BsMegaphone, title: "Job Alerts", description: "Intelligent Job alerts that bring active job seekers back to your jobs" },
  { Icon: AiOutlineSearch, title: "Job Search", description: "Powerful job search solutions embedded on your website" },
  { Icon: FaRegChartBar, title: "Reports & Analytics", description: "Traffic, Conversations, Source Tracking and more to ensure and measured ROI" },

  { Icon: BsPhone, title: "Text Alerts", description: "Explore our industry Integrations marketplace and partners" },
  { Icon: BsBrowserChrome, title: "Job Manager", description: "Manage your job listings through our Management system" },
  { Icon: FaBrain, title: "Apply workflow", description: "Customize your Candidate application workflow to suite your business needs." },
  { Icon: AiFillEye, title: "Job Alerts", description: "Intelligent Job alerts that bring active job seekers back to your jobs" },
  { Icon: MdLibraryBooks, title: "Job Search", description: "Powerful job search solutions embedded on your website" },
  { Icon: ImPower, title: "Reports & Analytics", description: "Traffic, Conversations, Source Tracking and more to ensure and measured ROI" },


  { Icon: AiOutlineGoogle, title: "Integrations", description: "Explore our industry Integrations marketplace and partners" },
  { Icon: GrWheelchair, title: "Job Manager", description: "Manage your job listings through our Management system" },
  { Icon: FaDatabase, title: "Apply workflow", description: "Customize your Candidate application workflow to suite your business needs." },
  { Icon: AiOutlineApartment, title: "Job Alerts", description: "Intelligent Job alerts that bring active job seekers back to your jobs" },
  { Icon: PiNotePencilBold, title: "Job Search", description: "Powerful job search solutions embedded on your website" },
  { Icon: BsCodeSlash, title: "Reports & Analytics", description: "Traffic, Conversations, Source Tracking and more to ensure and measured ROI" },

  { Icon: BiGitBranch, title: "Integrations", description: "Explore our industry Integrations marketplace and partners" },
  { Icon: AiOutlinePlus, title: "Job Manager", description: "Manage your job listings through our Management system" },
  { Icon: BsFiletypeXml, title: "Apply workflow", description: "Customize your Candidate application workflow to suite your business needs." },
  { Icon: AiOutlineExclamation, title: "Job Alerts", description: "Intelligent Job alerts that bring active job seekers back to your jobs" },
  { Icon: BsDropbox, title: "Job Search", description: "Powerful job search solutions embedded on your website" },
  { Icon: FiUser, title: "Reports & Analytics", description: "Traffic, Conversations, Source Tracking and more to ensure and measured ROI" }
 
];

function SeeAllFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
    <Navbarupp />
    <div className="w-full py-20 bg-[#0284c7]">
        <h1 className="text-3xl font-bold tracking-normal text-gray-900 md:text-4xl w-full">
          <span className="block text-center text-white">The Features of SpY D Technology</span>
        </h1>
      </div>
       <div className="bg-gray-100 p-10">
      <div className="w-full pt-20">
        <h1 className="text-3xl font-bold tracking-normal text-gray-900 md:text-4xl w-full">
          <span className="block text-center">Rich Features That Attract & Convert Candidates</span>
        </h1>
      </div>
      <div className="flex justify-center items-center md:flex-row flex-col pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-DropIn"
              className={`relative cursor-pointer bg-gray-100 hover:bg-[#0284c7] hover:text-white transition-all duration-300  rounded-xl h-52`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-center items-center md:flex-row flex-col md:gap-8 gap-4">
                <div>
                  <feature.Icon
                    className={`text-4xl md:text-6xl mt-10 md:ml-4 ${
                      hoveredIndex === index ? "rotate-icon" : "360" // Apply rotation class only if hoveredIndex matches index
                    }`}
                  />
                </div>
                <div>
                  <div className="flex justify-center items-center md:items-start flex-col md:mt-12 md:gap-4 gap-2">
                    <div className="text-2xl font-bold">{feature.title}</div>
                    <div className="md:text-base text-center md:text-left md:w-[250px] px-4 md:px-0">{feature.description}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        /* Add this CSS to your stylesheet */
        .rotate-icon {
          transform: rotateY(
            360deg
          ); /* Adjust the degree of rotation as needed */
          transition: transform 0.3s ease; /* Add a smooth transition effect */
        }
      `}</style>
      <div class="max-w-md mx-auto mt-3 sm:flex sm:justify-center md:mt-6 items-center">
        <div class="rounded-full shadow">
  <a
    href="/TryADemo"
    class="flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10"
  >
    Book a Demo
  </a>
</div>

        </div>
    </div>
    <ApprochUs />
    </>

  );
}

export default SeeAllFeatures;
