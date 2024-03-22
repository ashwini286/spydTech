import React,{useState} from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Workflows = () => {
    const [rotate1, setRotate1] = useState(false)
    const [rotate2, setRotate2] = useState(false)
  return (
    <>
      <div className="bg-gray-100 flex justify-center items-center lg:flex-row flex-col gap-16 pb-16 pl-8 md:pl-0">
        <div>
          <img src="https://media.licdn.com/dms/image/sync/D4E27AQE_OaCQ76sdIA/articleshare-shrink_480/0/1709711949599?e=1711465200&v=beta&t=4ABMsOsVv-EX08ycxbmztZBqHG2BrJmGSfofwZAfLY4" />
        </div>
        <div >
          <div>
            <div className="text-xl pt-8">Drive Efficiency <span className="text-[#0284c7]">&#8212;&#8212; </span></div>
            <div className="md:text-5xl text-2xl md:w-[600px] font-bold py-8 text-[#0284c7]">Seamless Integrations & Automated Workflows</div>
            <div className="text-lg pb-8 md:w-[600px]">
              Our technology drives efficiency through seamless integrations and
              automated data workflows
            </div>
          </div>
          <div>
           <div className="flex justify-center items-start flex-col gap-8">
           <div className="flex justify-center items-center flex-row gap-8 cursor-pointer"
            onMouseEnter={() => setRotate1(true)}
            onMouseLeave={() => setRotate1(false)}
          
           >
           <div className="text-4xl bg-[#0284c7] p-6 rounded-full text-white hover:bg-[#001d3d]">
              <HiArrowRightOnRectangle     className={`${
                      rotate1 ? "rotate-icon" : "360deg "
                    }`}/>
            </div>
            <div>
              <div className="font-bold text-2xl" >Jobs Out</div>
              <div className="py-2">
                Customizing data for filters and search as well as job
                distribution.
              </div>
            </div>
           </div>

            <div>
         <div className="flex justify-center items-center flex-row gap-8 cursor-pointer"
           onMouseEnter={() => setRotate2(true)}
           onMouseLeave={() => setRotate2(false)}
         >
         <div className="text-4xl bg-[#0284c7] p-6 rounded-full text-white hover:bg-[#001d3d]">
              <HiArrowLeftOnRectangle className={`${
                      rotate2 ? "rotate-icon" : "360deg "
                    }`}/>
            </div>
            <div>
              <div className="font-bold text-2xl" >Candidates In</div>
              <div className="py-2">
              Source tracking, custom data capture, candidate pipelining and notes to track performance.
              </div>
            </div>
         </div>

            </div>
            <div class="max-w-md mx-auto mt-3 flex md:justify-center justify-start md:mt-6 md:items-center items-start">
          <div class="rounded-full shadow">
            <Link to="/TryADemo"> 
            <button
              type="button"
              class=" w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-4 md:text-2xl md:px-10"
            >
              Book A Demo
            </button>
            </Link>
            
          </div>
        </div>
           </div>
          </div>
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
    </>
  );
};

export default Workflows;
