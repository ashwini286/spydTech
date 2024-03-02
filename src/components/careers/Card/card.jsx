import React from 'react'
import girl from '../../assets/carrer/girl.svg'
const card = () => {
  return (
    <div className=' pt-[130px]'>
       <div><p className='md:text-6xl text-2xl pl-8'>Are you open to joining us?</p></div>
      <div className='pt-8 md:pl-8'>
        <img src={girl} className='md:w-[850px] md:h-[550px]' />
      </div>
    </div>
  )
}

export default card