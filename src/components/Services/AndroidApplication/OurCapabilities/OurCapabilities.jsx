import React from 'react'
import img1 from '../../../assets/IPhoneApplication/img1.png';
import img2 from '../../../assets/IPhoneApplication/img2.png';
import img3 from '../../../assets/IPhoneApplication/img3.png';


const OurCapabilities = () => {
    return (
        <>
            <div className='md:px-16 px-4 py-4 mb-16 flex justify-center items-center flex-col md:flex-row'>
                <div>
                    <div>
                       <p className='text-center mt-8 md:text-4xl text-2xl text-[#656565]'> Our Capabilities</p>
                        </div>
                  <div className='grid md:grid-cols-3 gap-10 pt-[25px]'>
                  <div className='flex justify-center items-center flex-col '>
                        <div>
                            <img src={img1} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]' >Designing Tools</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Marvel, Invision, Android Sketch Paper, PopApp, Android Patterns, Adobe Kuler</p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img2} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>Development Technologies</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Java, Phonegap, Ionic, React Native, Flutter, Titanium, HTML 5 </p>
                        </div>
                    </div>



                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img3} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>Testing Tools</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Google Android Emulator, The official Android SDK Emulator, MobiOne, eggplant</p>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities