import React from 'react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer1 from '../UniqueTeam/Footer1'
import IMG from '../../assets/Blue.webp';
import UniqueTeam from '../UniqueTeam/UniqueTeam';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";



const Consulting = () => {

  return (
    <>
      <div>
        <Navbarupp />
      </div>
      <div class="relative h-screen w-full rounded-b-2xl ">
    <img src={IMG} alt="Background Image" class="absolute inset-0 w-full h-[80vh] rounded-b-2xl  object-cover filter blur-sm" />
    <div class="absolute inset-0 h-[80vh] bg-black bg-opacity-50 rounded-b-2xl "></div>
    <div class="absolute inset-0  flex flex-col md:flex-row items-center justify-center ml-10">
        <h1 class="text-4xl text-white font-bold w-full p-10">ERPNext Consultancy</h1>
        <p class="text-xl text-white mt-4 -ml-10 p-10">Building Cost-Effective Digital Business Capabilities around the ERPNext, 
        focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
    </div>
</div>

      <UniqueTeam />
      {/* My code */}
      <div className='flex flex-col md:flex-row'>
        <div>
          <VerticalTimeline
            layout='1-column-left'
            lineColor='#074f8b'
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', backgroundColor: "#074f8b" }}

            >
              <div className="flex flex-col-reverse">
                <p className=' text-black'>
                  Our Consultants gather the business information by talking to stakeholders,
                  visiting them, and analyzing the process they have been following.
                  Business Analysis is a key stage because it gives a better perspective for the improvements.
                </p>
                <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Business Analysis</h3>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<BellIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold"> Define Problem</h3>
              <p className=' text-black'>
                This culminates into brainstorming the conceptualized plan further to
                enhance the features. It's time to document the entire process, formulating the
                roadmap implementation plan.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<CurrencyDollarIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">  Eradicate Problems with ERPNext</h3>
              <p>
                Our Consultants demonstrate how can stakeholders eradicate problems with the help of ERPNext.
                Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<CurrencyDollarIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">  Eradicate Problems with ERPNext</h3>
              <p>
                Our Consultants demonstrate how can stakeholders eradicate problems with the help of ERPNext.
                Also, how ERPNext will help them to improvise the business functions and decision-making process with the help of real-time data with accuracy.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>

        <div>
          <VerticalTimeline
            layout='1-column-left'
            lineColor='black'
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<HomeIcon />}
            >
              <div className="flex flex-col-reverse">
                <p className=' text-black'>
                  After the approval of stakeholders, Our Consultants will prepare and submit the Implementation roadmap to stakeholders.
                </p>
                <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Implementation Road Map with ERPNext</h3>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<BellIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Support during implementation</h3>
              <p className=' text-black'>
                Our Consultants will be there to support, help, guide, and assist stakeholders’ intake decisions during the implementation stage and also consult them if process change is required.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<CurrencyDollarIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">User training</h3>
              <p>
                Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid black' }}
              iconStyle={{ border: '1px solid gray', color: "white", backgroundColor: "#074f8b" }}
              icon={<CurrencyDollarIcon />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">User training</h3>
              <p>
                Our consultant designs training materials and makes sure that stakeholders get full knowledge of the ERPNext and the implementation that is being implemented.
              </p>
            </VerticalTimelineElement>

          </VerticalTimeline>
        </div>
      </div>






      <Footer1 />
    </>
  );
};

export default Consulting;
