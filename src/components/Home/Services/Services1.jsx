import React, { useEffect } from "react";
import img from '../../assets/home/img1.svg'
import img1 from '../../assets/home/ERPNXT2.png'
import img2 from '../../assets/home/ERPNXT3.png'
import img3 from '../../assets/home/ERPNXT4.png'
import img4 from '../../assets/home/ERPNXT5.png'
import img5 from '../../assets/home/ERPNXT6.png'
import Slider from '../slider/Slider'

import AOS from "aos";
import "aos/dist/aos.css";
import SpdApproch from "../Home/SpdApproch";
import Spydflipcard from "../Home/Spydflipcard";


const Services1 = () => {
  useEffect(() => {
    AOS.init();
  });
  // const Services = [
  //   { id: 1, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img1 },
  //   { id: 2, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img2 },
  //   { id: 3, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img3},
  //   { id: 4, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img4 },
  //   { id: 5, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img5 },
  //   { id: 6, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: img2},

  // ]
  return (
    <>
      <div className=' max-w-screen-2xl mx-auto'>

        <div className='mt-20 md:w-2/2 mx-auto text-center w-full' data-aos="fade-up">
          <h2 className='text-2xl md:text-4xl text-[#656565] font-semibold mb-3 '>Welcome to SpY D Technology</h2>
          <p className='text-[#656565] px-4'>SpY D Technology private limited is India’s leading, one stop, full scale, full service software and information technology that thrives on cutting edge, state of the art, emerging technologies offering wide range, wide spectrum services and solutions in areas such as Web Technologies, Mobility Applications, Web & Mobile Products, Custom Applications, End-to-End Digital Transformation, Augmented and Virtual reality, and Design Thinking Innovation and Digital Marketing Services.</p>
        </div>
      </div >

      <SpdApproch />
      {/* <Spydflipcard /> */}

      <div className='md:px-14 px-4  max-w-screen-2xl mx-auto'>
        <div className='mt-16 md:w-2/2 mx-auto text-center w-full' data-aos="fade-down">
          <p className='text-[#656565]'>We are one stop, full service, and turnkey solutions provider for</p>
          <h2 className='text-2xl md:text-3xl text-[#656565] font-normal mb-3'>Web, Mobility and Digital Marketing Services.</h2>
          <div className='flex justify-center items-center ' data-aos="fade-right">
            <img src={img} className="w-[350px] h-[350px]" />
          </div>
        </div>

        {/* <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-7'>
          {
            Services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
          mx-auto md:h-88 rounded-md shadow-2xl cursor-pointer hover:translate-y-5 hover:border-b-4
hover:border-gray-800 transition-all duration-300 flex items-center justify-center h-full'>
              <div data-aos="fade-down">
                <div className=' mb-4 mx-auto rounded-tl-3xl rounded-br-3xl text-center'><img src={service.image} style={{backgroundColor:"none"}}/></div>   
              
                <h4 className='text-2xl font-bold  mb-2 px-2 text-[#656565]' >{service.title}</h4>
                <p className='text-sm text-[#656565]'>{service.descraption}</p>

              </div>
            </div>)
          }
        </div> */}

      </div>
      <Slider />

    </>
  )
}

export default Services1