import React from 'react'
import Cursor from '../../assets/TryADemo/Cursor.svg';
import People from '../../assets/TryADemo/people.svg';
const ReadyToTest = () => {
    return (
        <>
            <div>

                <div className='p-8'>
                    <p className='text-xl'>Ready to test drive Close?
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
                    <div className='w-[600px] h-[450px] bg-[#D4164B] rounded-2xl text-white p-24 '>
                        <div className='leading-7' >
                            <img src={Cursor} />
                            <p className='text-3xl font-semibold py-4'>Start your trial</p>
                            <p className='text-xl py-4'>Unlock the power of Close with a 14-day free trial of a Business plan. No credit card required.</p>
                            <div className='bg-black p-6 w-[150px] rounded-xl text-lg'>
                                <button>Try Close &#8594; </button>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gray-200 w-[600px] h-[450px]  rounded-2xl text-black p-24 '>
                        <div className='leading-7' >
                            <img src={People} />
                            <p className='text-3xl font-semibold py-4'>Talk to a human</p>
                            <p className='text-xl py-4'>Find out if Close is a good fit for your team and learn about our free migrations from any CRM.</p>
                            <div className='bg-black p-6 w-[170px] rounded-xl text-lg'>
                                <button className='text-white'>Book a Call &#8594; </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ReadyToTest