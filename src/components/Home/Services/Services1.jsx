import React, { useState, useEffect } from 'react';
import img from '../../assets/home/img1.svg';
import Slider from '../slider/Slider';
import AOS from "aos";
import "aos/dist/aos.css";
import SpdApproch from "../Home/SpdApproch";
import Loading2 from './Loading2';

const Services1 = () => {
  useEffect(() => {
    AOS.init();
  });

  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  useEffect(() => {
    // Simulate a delay to mimic loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!isLoading) {
      const originalText = "Welcome to SpY D Technology";
      let index = 0;
      const intervalId = setInterval(() => {
        if (index <= originalText.length) {
          setText(originalText.slice(0, index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isLoading]);
  
  return (
    <div>
      {isLoading ? (
        <Loading2 />
      ) : (
        <div className='max-w-screen-2xl mx-auto'>
          <div className='mt-20 md:w-2/2 mx-auto text-center w-full' data-aos="fade-up">
            <div className="text-container">
            <h1 className="animated-text ">
  {text.split('').map((letter, index) => (
    <span key={index} className="animated-letter " style={{ animationDelay: `${index * 100}ms` }}>{letter}</span>
  ))}
</h1>

              <p className='text-black px-4'>SpY D Technology private limited is India’s leading, one stop, full scale, full service software and information technology that thrives on cutting edge, state of the art, emerging technologies offering wide range, wide spectrum services and solutions in areas such as Web Technologies, Mobility Applications, Web & Mobile Products, Custom Applications, End-to-End Digital Transformation, Augmented and Virtual reality, and Design Thinking Innovation and Digital Marketing Services.</p>
            </div>
          </div>
          <SpdApproch />
          <div className='md:px-14 px-4 max-w-screen-2xl mx-auto'>
            <div className='mt-16 md:w-2/2 mx-auto text-center w-full' data-aos="fade-down">
              <p className='text-black'>We are one stop, full service, and turnkey solutions provider for</p>
              <h2 className='text-2xl md:text-3xl text-black font-normal mb-3'>Web, Mobility and Digital Marketing Services.</h2>
              <div className='flex justify-center items-center' data-aos="fade-right">
                <img src={img} className="w-[350px] h-[350px] drop-shadow-xl" />
              </div>
            </div>
          </div>
          <Slider />
        </div>
      )}
      <style jsx>
        {`
          .text-container {
            text-align: center;
          }

          .animated-text {
            font-size: 48px;
            font-weight: bold;
            
           
          }

          .animated-letter {
            opacity: 0;
            animation: fadeInAnimation 0.5s forwards;
            background: linear-gradient(to right, #4a90e2, #8e44ad); /* Gradient color for the text */
  -webkit-background-clip: text; /* Clip the background to the text */
  -webkit-text-fill-color: transparent;
          }

          @keyframes fadeInAnimation {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Services1;
