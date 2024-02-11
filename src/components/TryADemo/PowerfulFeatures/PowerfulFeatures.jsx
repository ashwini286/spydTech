import React from 'react'
import svg1 from '../../assets/TryADemo/svg1.svg';
import svg2 from '../../assets/TryADemo/svg2.svg';
import svg3 from '../../assets/TryADemo/svg3.svg';
import svg4 from '../../assets/TryADemo/svg4.svg';
import svg5 from '../../assets/TryADemo/svg5.svg';
import svg6 from '../../assets/TryADemo/svg6.svg';
import svg7 from '../../assets/TryADemo/svg7.svg';
import svg8 from '../../assets/TryADemo/svg8.svg';
import svg9 from '../../assets/TryADemo/svg9.svg';
import svg10 from '../../assets/TryADemo/svg10.svg';
const PowerfulFeatures = () => {
  return (
    <>
    <div className='md:pl-[120px] pt-24 pl-4 bg-black pb-28'>
        <div>
            <div className='lg:pr-40'>
            <p className='lg:text-6xl font-bold text-white text-4xl'>
  Ready to explore further? <span className='text-[#0694A2]'>Discover the depth of our powerful features.</span>
</p>
s
            </div>

            <div className='grid lg:grid-cols-5 pr-8 gap-8 lg:pr-32 pt-[85px] md:grid-cols-2'>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg1}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Calling</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg2}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Emailing</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg3}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>SMS</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg4}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Video</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg5}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Reporting</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg6}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Call Coaching</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg7}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Workflows</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg8}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Smart Views</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg9}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Pipeline</p>
                    </div>
                </div>
                <div className='bg-[#1F1F1F] p-7 rounded-2xl hover:bg-[#0694A2]'>
                    <div>
                        <img src = {svg10}/>
                    </div>
                    <div>
                        <p className='text-white pt-8 text-xl'>Integrations</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PowerfulFeatures