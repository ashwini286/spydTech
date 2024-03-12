import React,{useEffect} from 'react'
import img1 from '../../../assets/IPhoneApplication/img1.png';
import img2 from '../../../assets/IPhoneApplication/img2.png';
import img3 from '../../../assets/IPhoneApplication/img3.png';
import AOS from "aos";
import "aos/dist/aos.css";

const OurCapabilities = () => {
    useEffect(() => {
        AOS.init();
      });
    return (
        <>
            <div className='md:px-16 px-4 py-4 md:mb-16'>

                <div data-aos="fade-up">
                    <p className='text-black text-center text-2xl font-bold'>We use the following technologies to build IOS based mobile</p> <br />
                    <p className='text-black text-center'>Objective-C, C, Swift, Invision, Balsamiq, Mocks, XC Test, OCmock, KIF, Xcode, Apple IDE (Integrated Development Environment for Mac & IOS apps)</p>
                </div>
                <div>
                    <div data-aos="fade-down">
                        <p className='text-center mt-8 text-2xl text-black'> Our Capabilities</p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-10 pt-[25px] '>
                        <div className='flex justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300' data-aos="fade-down">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img1} className='hover:animate-spin ' />
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black' >iPhone SDK</p>
                                <p className='text-center pt-[15px] text-black'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                            </div>
                        </div>


                        <div className='flex justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300' data-aos="fade-up">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img2} className='hover:animate-spin' />
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>iPhone SDK</p>
                                <p className='text-center pt-[15px] text-black'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                            </div>
                        </div>



                        <div className='flex justify-center items-center flex-col hover:-translate-y-4 transition-all duration-300' data-aos="fade-down">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img3} className='hover:animate-spin' />
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>iPhone SDK</p>
                                <p className='text-center pt-[15px] text-black'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities