import React from 'react'
import IMG from"../../../../assets/AI and ML/AI-2.jpg"
import Navbarupp from '../../../../Home/Navbar/Navbarupp'
import Approch from '../../../../Home/APProchUs/Approch'

function Ai() {
  return (
    <>
    <Navbarupp />
    <div>
        <img 
        src={IMG}
        />
    </div>
    <Approch />
    </>
  )
}

export default Ai