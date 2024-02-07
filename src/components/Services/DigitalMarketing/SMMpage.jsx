import React from 'react'
import IMG from "../../assets/SMM.jpg"
import Main from './SMMmain/Main'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import SpdApproch from '../../Home/Home/SpdApproch'

function SMMpage() {
  return (
    <>
    <Navbarupp />
    <div>
        <img
        src={IMG}
        className='w-[100%] h-[35rem] pb-10'
        />
    </div>
    <Main />
    <SpdApproch />
    <Approch />
    </>
  )
}

export default SMMpage