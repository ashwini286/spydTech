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
import ChatBot from "../../Home/Home/ChatBot";

const features = [
  { Icon: TbJumpRope, title: "Partner Integrations", description: "Explore our industry Integrations marketplace and partners." },
  { Icon: MdGroup, title: "Job Manager", description: "Manage your job listings through our Management system." },
  { Icon: TbArrowsShuffle2, title: "Apply workflow", description: "Customize your Candidate application workflow to suite your business needs." },
  { Icon: BsMegaphone, title: "Job Alerts", description: "Intelligent Job alerts that bring active job seekers back to your jobs." },
  { Icon: AiOutlineSearch, title: "Job Search", description: "Powerful job search solutions embedded on your website." },
  { Icon: FaRegChartBar, title: "Reports & Analytics", description: "Traffic, Conversations, Source Tracking and more to ensure and measured ROI." },

  { Icon: BsPhone, title: "Text Alerts", description: "Integrated text alerts to job seekers based on their job search" },
  { Icon: BsBrowserChrome, title: "In Browser Alerts", description: "Push job alerts to any desktop or mobile browser based on  search criteria." },
  { Icon: FaBrain, title: "Learning Engine", description: "Technology to serve related jobs alerts based on visitors search history." },
  { Icon: AiFillEye, title: "SEO Landing Pages", description: "Maximize job exposure by automated SEO landing pages for jobs & locations." },
  { Icon: MdLibraryBooks, title: "Blogs & News", description: "Showcase your latest blogs and news through the website CMS." },
  { Icon: ImPower, title: "Page Speed", description: "Using the latest CDN and Edge Catching techniques for high speed page delivery." },


  { Icon: AiOutlineGoogle, title: "AMP", description: "Accelerated mobile Pages for maximum load Speed and performance in Google." },
  { Icon: GrWheelchair, title: "ADA", description: "Ensuring your site is Americans with Disabilities Act compliant." },
  { Icon: FaDatabase, title: "Data Compliance", description: "Ensuring your site is data compliant based on local data laws(GDPR etc)." },
  { Icon: AiOutlineApartment, title: "Job Syndication", description: "Distribution of your jobs to a wider aggregator network globally." },
  { Icon: PiNotePencilBold, title: "CMS Site Control", description: "Powerful page editors to easily drag and drop design components on pages." },
  { Icon: BsCodeSlash, title: "Job SEO", description: "Automated job SEO and schema markup for Google for jobs presence" },

  { Icon: BiGitBranch, title: "UTM Tracking", description: "Track your campaigns through to job application and ATS push" },
  { Icon: AiOutlinePlus, title: "Related Jobs", description: "Display related jobs to users based on specific search trigger for better engagement." },
  { Icon: BsFiletypeXml, title: "XML Feeds", description: "Industry standard XML feeds for indeed, Linkedin, and many more." },
  { Icon: AiOutlineExclamation, title: "Quick Apply", description: "Convert faster with quick apply technology such as LinkedIn, indeed apply etc." },
  { Icon: BsDropbox, title: "Drive/Dropbox", description: "Attach using Google Drive or Dropbox integrations on your application froms." },
  { Icon: FiUser, title: "Candidate Portal", description: "Fully integrated candidate portal functionality for profile management and data synch." }
 
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
              // data-aos="zoomIn"
              //   data-aos-delay={`${1.5 + index * 200}`}
              data-aos="fade-down-zoomIn"
              className={`relative cursor-pointer bg-gray-100 hover:bg-[#0284c7] hover:text-white transition-all duration-300  rounded-xl h-52 `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
             
             
            >
              <div className="flex justify-center items-center md:flex-row flex-col md:gap-8 gap-4 " >
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
         
         
          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0);
            }
            to {
              opacity: 1;
              transform: scale(75);
            }
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
    <ChatBot />
    </>

  );
}

export default SeeAllFeatures;
