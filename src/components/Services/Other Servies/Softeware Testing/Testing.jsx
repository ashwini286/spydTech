import React from 'react'
import IMG1 from "../../../assets/Software testing/testing-1.png"
import Navbarupp from '../../../Home/Navbar/Navbarupp'
import IMG2 from "../../../assets/Software testing/etl-testing-introduction2.png"
import Approch from '../../../Home/APProchUs/Approch'
import IMG3 from "../../../assets/Software testing/selenium testing.webp"
import IMG4 from "../../../assets/Software testing/QA testing2.png"
import IMG5 from "../../../assets/Software testing/Manual testing 1.png"

function Testing() {
  return (
    <>
    <Navbarupp />
    <div>
        <img 
        src={IMG1}
        className='h-[40rem] w-[100rem]'
        />
    </div>
    <div className='p-10 flex flex-col md:flex-row mt-5'>
        <img 
        src={IMG2}
        className='shadow-xl  rounded-2xl'
        />
        <div className='p-10'>
        <h1 className='text-4xl'>ETL Testing  </h1>
        <p>ETL in testing means an extract, transform and load process that reads data from multiple source systems,
             transports it to a data transformation layer for further processing which includes cleaning, 
             consolidating, integrating, and then loading into a target database or file.</p>
             </div>

    </div>
             <div className='p-10 flex flex-col md:flex-row mt-5'>
                <div className='p-5'>
                    <h1 className='text-4xl'>Selenium Testing</h1>
                    <p>Selenium is a free (open-source) automated testing framework used to validate web applications across different browsers and platforms.
                         You can use multiple programming languages like Java, C#, Python, etc to create Selenium Test Scripts.
                          Testing done using the Selenium testing tool is usually referred to as Selenium Testing.</p>
                </div>
                <img 
                src={IMG3}
                className='shadow-xl rounded-2xl'
                />
             </div>

             <div className='p-10 flex flex-col md:flex-row mt-5'>
        <img 
        src={IMG4}
        className='shadow-xl  rounded-2xl items-center'
        />
        <div className='p-10'>
        <h1 className='text-4xl'>QA Testing  </h1>
        <p>Quality assurance testing, or QA testing, 
            is a vital step in the software development cycle. 
            Effective QA testing reveals errors and inconsistencies that can affect the real-world use of the software being developed.
             When done correctly, QA testing ensures product longevity while saving companies time and money.</p>
             </div>

    </div>
    

    <div className='p-10 flex flex-col md:flex-row mt-5'>
                <div className='p-5'>
                    <h1 className='text-4xl'>Manual Testing</h1>
                    <p>Manual testing is the process of manually testing software for defects. 
                        It requires a tester to play the role of an end user where by they use most of 
                        the application's features to ensure correct behaviour.</p>
                </div>
                <img 
                src={IMG5}
                className='shadow-xl rounded-2xl'
                />
             </div>


    <Approch />
    </>
  )
}

export default Testing