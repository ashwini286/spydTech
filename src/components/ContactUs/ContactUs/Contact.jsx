import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from '../../Home/Navbar/Navbarupp';
import GetInTouch from '../GetInTouch/GetInTouch';
import LetsTalk from '../LetsTalk/LetsTalk';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
   
      <Navbarupp />
    
    <div className='mt-16 ' >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121797.7749059575!2d78.31039743892126!3d17.45107444800503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9107fdd2049d%3A0xc828116f8f70b747!2sVisa%20Global%20365!5e0!3m2!1sen!2sin!4v1706198889906!5m2!1sen!2sin"
      
    className='w-[100%] h-[400px]'
        allowFullScreen="true"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <GetInTouch />
    <LetsTalk />

    </>
  )
}

export default Contact