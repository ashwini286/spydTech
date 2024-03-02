import React from 'react'
import IMG from "../../assets/SMM.jpg"
import Main from './SMMmain/Main'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import Welcome from '../../Home/Home/Welcom'


function SMMpage() {
  return (
    <>
      <Navbarupp />
      <div>
        <img
          // src={IMG}
          src='https://wallpapercave.com/wp/wp6626261.jpg'
          className='pb-10'
        />
      </div>
      <div className='text-center p-10'>
        <h1>DIGITAL STRATEGY =<a>OUR COMPANY'S BACKBONE!</a>
</h1>
<div className='text-center'>
<p className='p-10'>The digital marketing strategy document will be the backbone of your company’s marketing initiatives.
   It will outline in detail what will happen and what will be delivered in each phase/stage of the project.</p>
   </div>
      </div>
      <Main />
<Welcome />
      <Approch />
    </>
  )
}

export default SMMpage