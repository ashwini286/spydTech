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
            <div className='md:px-16 px-4 py-4 mb-16'>


                <div>
                    <div data-aos="fade-up">
                        <p className='text-center mt-8 text-4xl text-black'> Our Capabilities</p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-10 pt-[25px]'>
                        <div className='flex justify-center items-center flex-col ' data-aos="fade-up">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img1} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black' >React Native Development</p>
                                <p className='text-center pt-[15px] text-black'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                            </div>
                        </div>


                        <div className='flex justify-center items-center flex-col' data-aos="fade-down">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img2} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>PhoneGap Development</p>
                                <p className='text-center pt-[15px] text-black'>Simpalm highly recommend PhoneGap development to develop amazing mobile apps with using simplest web technology. PhoneGap is the best cross platform framework to quickly transfer HTML, CSS and JavaScript written web applications into awesome mobile apps.</p>
                            </div>
                        </div>



                        <div className='flex justify-center items-center flex-col' data-aos="fade-up">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img3} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>Ionic Development</p>
                                <p className='text-center pt-[15px] text-black'>Ionic is an HTML 5 mobile app development platform which is used for development of cross platform mobile applications. These cross platform applications have many features like platform support, fast development and third party API integrations. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities