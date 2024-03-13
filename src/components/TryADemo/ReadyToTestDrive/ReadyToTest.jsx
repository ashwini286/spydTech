// import React from 'react'
// import Cursor from '../../assets/TryADemo/Cursor.svg';
// import People from '../../assets/TryADemo/people.svg';
// const ReadyToTest = () => {
//     return (
//         <>
//             <div className='pl-[20px] pb-24'>

//                 <div className='md:p-24 py-8'>
//                     <p className='md:text-6xl text-4xl md:pl-4 font-bold'>Ready to test drive Close?
//                     </p>
//                 </div>
//                 <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
//                     <div className=' flex flex-col justify-center items-center md:w-[600px] h-[350px] md:h-[450px] bg-[#0694A2] rounded-2xl text-white md:p-24 '>
//                         <div className='md:leading-7' >
//                             <img src={Cursor} />
//                             <div className='md:text-3xl font-semibold py-4 text-xl'>Start your trial</div>
//                             <div className='md:text-xl py-4 text-lg'>Unlock the power of Close with a 14-day free trial of a Business plan. No credit card required.</div>
//                             <div className='bg-black md:p-6 md:w-[170px] rounded-xl text-lg'>
//                                 <button>Try Close &#8594; </button>
//                             </div>
//                         </div>

//                     </div>
//                     <div className='bg-gray-100 md:w-[600px] h-[450px]  rounded-2xl text-black md:p-24 '>
//                         <div className='leading-7 ' >
//                             <img src={People} />
//                             <p className='text-3xl font-semibold py-4'>Talk to a human</p>
//                             <p className='text-xl py-4'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</p>
//                             <div className='bg-black p-6 w-[190px] rounded-xl text-lg'>
//                                 <button className='text-white'>Book a Call &#8594; </button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default ReadyToTest

import React from 'react'
import Cursor from '../../assets/TryADemo/Cursor.svg';
import People from '../../assets/TryADemo/people.svg';
const ReadyToTest = () => {
    return (
        <>
            <div className=' pb-24'>

                <div className='md:p-24 py-8'>
                    <p className='md:text-6xl text-4xl pl-4 font-bold'>Ready to test drive Close?
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                    <div className='pt-8 md:w-[600px] md:h-[450px] h-[400px] bg-[#0694A2] rounded-2xl text-white md:p-24 '>
                        <div className='leading-7 flex flex-col items-center md:items-start' >
                            <div><img src={Cursor} /></div>
                            <div className='text-3xl font-semibold py-4'>Start your trial</div>
                            <div className='text-xl py-4 text-center md:text-left'>Unlock the power of Close with a 14-day free trial of a Business plan. No credit card required.</div>
                            <div className='bg-black p-6 w-[150px] rounded-xl text-lg hover:bg-white hover:text-black'>
                                <button >Try Close &#8594; </button>
                            </div>
                        </div>

                    </div>
                    <div className='pt-8 md:w-[600px] md:h-[450px] h-[400px] bg-gray-100 rounded-2xl text-black md:p-24 '>
                        <div className='leading-7 flex flex-col items-center md:items-start' >
                            <div > <img src={People} /></div>
                            <div className='text-3xl font-semibold py-4'>Talk to a human</div>
                            <div className='text-xl py-4 text-center md:text-left'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</div>
                            <div className='bg-black p-6 w-[170px] rounded-xl text-lg text-white hover:bg-white hover:text-black hover:border border-black'>
                                <button>Book a Call &#8594; </button>
                            </div>
                        </div>

                    </div>
                    {/* <div className='bg-gray-100 md:w-[600px] md:h-[450px] h-[400px] rounded-2xl text-black md:p-24 '>
                        <div className='leading-7' >
                            <img src={People} />
                            <p className='text-3xl font-semibold py-4'>Talk to a human</p>
                            <p className='text-xl py-4'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</p>
                            <div className='bg-black p-6 w-[170px] rounded-xl text-lg'>
                                <button className='text-white'>Book a Call &#8594; </button>
                            </div>
                        </div>

                    </div> */}
                </div>

            </div>
        </>
    )
}

export default ReadyToTest