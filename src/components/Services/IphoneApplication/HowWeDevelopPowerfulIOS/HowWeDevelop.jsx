import React,{useEffect} from 'react'
import Link from '../../../assets/IPhoneApplication/Line.png';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AOS from "aos";
import "aos/dist/aos.css";
const HowWeDevelop = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <div className='md:text-center md:pt-16 pl-4' data-aos="fade-down">
          <div className='md:text-3xl text-xl text-black font-bold text-center'><p>How We Develop Powerful iOS Apps to Increase Your Business Performance</p></div>
          <div className='md:px-16 py-4 text-lg text-black'><p>
            Being one of the best iOS app development companies India, we develop iPhone and iPad apps with an intention to increase your business performance. Before developing an app, we conduct thorough research on your app objective, your competitors’ apps analysis. That’s why we are called as one of the best iOS application developers in Bangalore, India..
          </p></div>
        </div>
        <div>
          <img src={Link} />
        </div>
        <div>
        </div>
      </div>
    </>
  )
}

export default HowWeDevelop