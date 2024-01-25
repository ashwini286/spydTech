import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaMeetup } from "react-icons/fa6";
import { GiTeamIdea } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { GrTestDesktop } from "react-icons/gr";
import { MdRocketLaunch } from "react-icons/md";
import Img1 from './img1';
import Img2 from './Img2';
import Img3 from './Img3';
import Img4 from './Img4';
import Img5 from './Img5';
import 'react-vertical-timeline-component/style.min.css';
const OurApproch = () => {
  return (
    <div 
    // style={{ backgroundImage: 'url(https://www.aspirantsoftsolutions.com/img/background-image_new.png)',  backgroundRepeat: "no-repeat", clipPath: 'polygon(0 9%, 100% 0%, 100% 100%, 0% 100%)'}}
      className='w-full h-full lg:pb-[100px]'
    >
      <div>
        <div className=' md:w-2/2 mx-auto text-center w-full'>
          <h1 className='text-4xl text-gray-600 pt-[70px] leading-10'>Our Approach</h1>
          <p className='text-gray-400 pb-[40px]'>Our Approach is based on time tested, globally accepted best standards such as
          </p>
        </div>
        <VerticalTimeline >
          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', borderStyle: 'dashed' }}
            icon={<FaMeetup className='font-4xl' />}

            date={<Img1 />}
          >

            <div className="flex flex-col-reverse">
              <p className='text-gray-400'>
                The initial process begins with discussion, debate, and ideate with the
                core requirements. It leads to conceptualizing the idea into action centered on the
                requirements.
              </p>
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Meet</h3>

            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work bg-cover"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', borderStyle: 'dashed' }}
            icon={<GiTeamIdea />}
            date={<Img2 />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Planning</h3>

            <p className='text-gray-400'>
              This culminates into brainstorming the conceptualized plan further to
              enhance the features.It's time to document the entire process, formulating the
              roadmap implementation plan.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', borderStyle: 'dashed' }}
            icon={<FaLightbulb />}
            date={<Img3 />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Design & development</h3>
            <p>
              The UI, UX process starts in consonance with the laid out plan in
              consonance with the structure and layout.The functional part development process
              begins by coding the features of the solution.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', borderStyle: 'dashed' }}
            icon={<GrTestDesktop />}
            date={<Img4 />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Testing</h3>

            <p className='text-gray-400'>
              The entire deliverables will be tested, including front-end, core
              functionality, and backend using time-tested manual and automated testing.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid black' }}
            iconStyle={{ border: '1px solid gray', borderStyle: 'dashed' }}
            icon={<MdRocketLaunch />}
            date={<Img5 />}
          >
            <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">Launch</h3>

            <p className='text-gray-400'>
              After user acceptance test the solution will be deployed.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  )
}

export default OurApproch