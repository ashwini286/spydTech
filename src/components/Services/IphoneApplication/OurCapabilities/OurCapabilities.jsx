import React from 'react'
import img1 from '../../../assets/IPhoneApplication/img1.png';
import img2 from '../../../assets/IPhoneApplication/img2.png';
import img3 from '../../../assets/IPhoneApplication/img3.png';


const OurCapabilities = () => {
    return (
        <>
            <div className='md:px-16 px-4 py-4 mb-16'>
           
                <div>
                    <p className='text-[#656565] text-center md:text-2xl font-bold'>We use the following technologies to build IOS based mobile</p> <br />
                    <p className='text-[#656565] text-center'>Objective-C, C, Swift, Invision, Balsamiq, Mocks, XC Test, OCmock, KIF, Xcode, Apple IDE (Integrated Development Environment for Mac & IOS apps)</p>
                </div>
                <div>
                    <div>
                       <p className='text-center mt-8 text-2xl text-[#656565]'> Our Capabilities</p>
                        </div>
                  <div className='grid md:grid-cols-3 gap-10 pt-[25px]'>
                  <div className='flex justify-center items-center flex-col '>
                        <div>
                            <img src={img1}  className='hover:animate-spin'/>
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]' >iPhone SDK</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img2}  className='hover:animate-spin'/>
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>iPhone SDK</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>



                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img3} className='hover:animate-spin'/>
                        </div>
                        <div>
                            <p className='text-center pt-[15px] text-[#656565]'>iPhone SDK</p>
                            <p className='text-center pt-[15px] text-[#656565]'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities