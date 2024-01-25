import React from 'react';
import Img1 from '../../assets/work1.png';
import Img2 from '../../assets/work2.png';
import Img3 from '../../assets/work3.png';
import { Button } from "@material-tailwind/react";

const OurWork = () => {
  const project = [
    { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img1 },
    { id: 2, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img2 },
    { id: 3, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img3 },
    { id: 4, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img1 },
    { id: 5, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img2 },
    { id: 6, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img3 }
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-gray-800  mb-4 md:w-4/5 text-center mx-auto '>Our Works </h2>
        <p className=' text-sm text-gray-400 mb-8 md:w-3/4 mx-auto  '>
          Our works are for clients who are spreading values and principles
          to the world to become a better place.
        </p>
      </div>


      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center'>
        {
          project.map(pro => <div key={pro.id} className='mx-auto relative mb-12 cursor-pointer '>
            <img src={pro.image} alt="" className='h-[250px] hover:scale-105 transition-all duration-500 shadow-2xl' />

            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md
            md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300
            '>
              <h3>{pro.title}</h3>
            </div>
          </div>)
        }

      </div>
      <div className='flex justify-center items-center m-10'>
        <Button size="md" className='font-serif bg-[#5bc0de] rounded'>
          view all
        </Button>
      </div>

    </div>
  )
}

export default OurWork