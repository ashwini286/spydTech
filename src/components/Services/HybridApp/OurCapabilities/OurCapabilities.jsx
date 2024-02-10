import React from 'react'
import img1 from '../../../assets/IPhoneApplication/img1.png';
import img2 from '../../../assets/IPhoneApplication/img2.png';
import img3 from '../../../assets/IPhoneApplication/img3.png';


const OurCapabilities = () => {
    return (
        <>
            <div className='md:px-16 px-4 py-4 mb-16'>
           
            
                <div>
                    <div>
                       <p className='text-center mt-8 text-4xl text-[#656565]'> Our Capabilities</p>
                        </div>
                  <div className='grid md:grid-cols-3 gap-10 pt-[25px]'>
                  <div className='flex justify-center items-center flex-col '>
                        <div>
                            <img src={img1} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]' >React Native Development</p>
                            <p className='text-center pt-[15px] text-[#656565]'>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img2} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>PhoneGap Development</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Simpalm highly recommend PhoneGap development to develop amazing mobile apps with using simplest web technology. PhoneGap is the best cross platform framework to quickly transfer HTML, CSS and JavaScript written web applications into awesome mobile apps.</p>
                        </div>
                    </div>



                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img3} />
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>Ionic Development</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Ionic is an HTML 5 mobile app development platform which is used for development of cross platform mobile applications. These cross platform applications have many features like platform support, fast development and third party API integrations. </p>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities