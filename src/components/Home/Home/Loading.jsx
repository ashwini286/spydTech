// Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className='ml-[48%] pt-10'>
    <div className='welcome '>
      <div className='sound-wave'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style>
        {`


        @keyframes audio-wave {
          0% {
            height: 6px;
            transform: translateY(0px);
            background: #ff8e3a;
          }
          25% {
            height: 40px;
            transform: translateY(-5px) scaleY(1.7);
            background: #ed509e;
          }
          50% {
            height: 6px;
            transform: translateY(0px);
            background: #9c73f8;
          }
          100% {
            height: 6px;
            transform: translateY(0px);
            background: #0fccce;
          }
        }

        .sound-wave {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
          width: 60px;
          height: 40px;
        }

        .sound-wave div {
          height: 40px;
          width: 10px;
          border-radius: 8px;
          background: orange;
          animation: audio-wave 2.2s infinite ease-in-out;
        }

        .sound-wave div:nth-child(2) {
          left: 11px;
          animation-delay: 0.2s;
        }

        .sound-wave div:nth-child(3) {
          left: 22px;
          animation-delay: 0.4s;
        }

        .sound-wave div:nth-child(4) {
          left: 33px;
          animation-delay: 0.6s;
        }

        .sound-wave div:nth-child(5) {
          left: 44px;
          animation-delay: 0.8s;
        }

        .sound-wave div:nth-child(6) {
          left: 55px;
          animation-delay: 1s;
        }
        `}
      </style>
    </div>
    </div>
  );
};

export default Loading;
