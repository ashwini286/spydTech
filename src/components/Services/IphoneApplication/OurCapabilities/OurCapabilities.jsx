import React from 'react'
import img1 from '../../../assets/IPhoneApplication/img1.png';
import img2 from '../../../assets/IPhoneApplication/img2.png';
import img3 from '../../../assets/IPhoneApplication/img3.png';
import img4 from '../../../assets/IPhoneApplication/img4.png';
import img5 from '../../../assets/IPhoneApplication/img5.png';
import img6 from '../../../assets/IPhoneApplication/img6.png';
import img7 from '../../../assets/IPhoneApplication/img7.png';


const OurCapabilities = () => {
    return (
        <>
            <div className='py-8 px-20'>
                <div>
                    <p className='text-[#656565] text-center text-2xl'>We use the following technologies to build IOS based mobile</p> <br />
                    <p className='text-[#656565] text-center'>Objective-C, C, Swift, Invision, Balsamiq, Mocks, XC Test, OCmock, KIF, Xcode, Apple IDE (Integrated Development Environment for Mac & IOS apps)</p>
                </div>
                <div>
                    <div>
                       <p className='text-center'> Our Capabilities</p>
                        </div>
                  <div className='grid grid-cols-3 gap-10'>
                  <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img1} />
                        </div>
                        <div>
                            <p className='text-center' >iPhone SDK</p>
                            <p className='text-center'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img2} />
                        </div>
                        <div>
                            <p className='text-center'>iPhone SDK</p>
                            <p className='text-center'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>



                    <div className='flex justify-center items-center flex-col'>
                        <div>
                            <img src={img3} />
                        </div>
                        <div>
                            <p className='text-center'>iPhone SDK</p>
                            <p className='text-center'>Using latest iPhone SDK to enhance app functionality and develop engaging games </p>
                        </div>
                    </div>
                  </div>

                </div>
            </div>
        </>
    )
}

export default OurCapabilities