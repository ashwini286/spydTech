import React, { useEffect } from "react";
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
            <div className='md:px-16 px-4 py-4 mb-16 flex justify-center items-center flex-col md:flex-row'>
                <div>
                    <div data-aos="fade-down">
                        <p className='text-center mt-8 md:text-4xl text-2xl text-black'> Our Capabilities</p>
                    </div>
                    <div className='grid md:grid-cols-3 gap-10 pt-[25px]'>
                        <div className='flex justify-center items-center flex-col ' data-aos="fade-up">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img1} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black' >Designing Tools</p>
                                <p className='text-center pt-[15px] text-black'>Marvel, Invision, Android Sketch Paper, PopApp, Android Patterns, Adobe Kuler</p>
                            </div>
                        </div>


                        <div className='flex justify-center items-center flex-col' data-aos="fade-down">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img2} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>Development Technologies</p>
                                <p className='text-center pt-[15px] text-black'>Java, Phonegap, Ionic, React Native, Flutter, Titanium, HTML 5 </p>
                            </div>
                        </div>



                        <div className='flex justify-center items-center flex-col' data-aos="fade-up">
                            <div className='shadow-2xl rounded-full '>
                                <img src={img3} className='hover:animate-spin '/>
                            </div>
                            <div>
                                <p className='text-center pt-[15px] text-black'>Testing Tools</p>
                                <p className='text-center pt-[15px] text-black'>Google Android Emulator, The official Android SDK Emulator, MobiOne, eggplant</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities