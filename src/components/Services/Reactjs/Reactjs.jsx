import React from 'react'
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Development from '../Reactjs/ReactDevelopmentCompany/Development';
import Benefits from './ReactImmenseBenefits/Benefits';


import Approch from '../../Home/APProchUs/Approch';

const Reactjs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <>
        <div>
          <Navbarupp />
        </div>


        <img
          src="https://www.getaprogrammer.com.au/wp-content/uploads/2020/04/react.jpg"
          className=" w-full"
          alt="Background Image"
        />
        <div className='flex items-center justify-center pt-8'>
        <div className='text-center md:text-2xl text-xl md:pt-16 w-[850px]  font-bold'>Building Dynamic and Responsive Web Applications: <br /> <span className="text-blue-600 md:text-4xl text-2xl mx-auto border-b-2 border-cyan-800 w-1/2"> Mastering ReactJS </span> </div>
      </div>
        <Development />
        <Benefits />
       
        <Approch />

      </>
    </>
  )
}

export default Reactjs