import React from 'react'
import { Carousel } from 'flowbite-react';
// import Card1 from '../../Services/UniqueTeam/ERPCard'
function Client() {
  return (
    <>
  
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 slider-wave">
      <Carousel>
      <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover slider-wave ">
          <div className='wave'>
            <div className='wave'>
              <div className='wave'>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-12 mx-auto">

            <div>
              <h1 className="text-xl md:text-4xl text-white">
                What our clients say's
              </h1>
            </div>
            <div>
              <p className="opacity-8 font-serif text-white md:text-xl">
              Our esteemed clients are committed to promoting core values and principles, contributing to the betterment of our global community.
              </p>
            </div>

            <div>
              <h1 className="opacity-8 pt-4 md:pt-8 text-md md:text-2xl text-white">
              SpY D Technology Private Limited is an innovative company. The entire team demonstrated exceptional cooperation and professionalism.
              </h1>
              <div>
             
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover slider-wave ">
          <div className='wave'>
            <div className='wave'>
              <div className='wave'>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-12 mx-auto">

            <div>
              <h1 className="text-xl md:text-4xl text-white">
                What our clients say's
              </h1>
            </div>
            <div>
              <p className="opacity-8 font-serif text-white md:text-xl">
              Our valued clients are dedicated to promoting values and principles, making a positive impact on the world.
              </p>
            </div>

            <div>
              <h1 className="opacity-8 pt-4 md:pt-8 text-md md:text-2xl text-white">
              SpY D Technology Private Limited is renowned for its commitment to innovation. The team's high level of cooperation and professionalism is commendable.
              </h1>
              <div>
           
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover slider-wave "
        >
          <div className='wave'>
            <div className='wave'>
              <div className='wave'>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center max-w-screen-lg p-4 sm:p-6 md:p-8 lg:p-12 mx-auto">
            <div>
              <h1 className="text-xl md:text-4xl text-white">
                What our clients say's
              </h1>
            </div>
            <div>
              <p className="opacity-80 font-serif text-white md:text-xl">
                Our works are for clients who are spreading values and principles
                to the world to become a better place.
              </p>
            </div>

            <div>
              <h1 className="opacity-8 pt-4 md:pt-8 text-md md:text-2xl text-white">
                SpY D Technology Private Limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
           
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      <style>
        {`
        .slider-wave {
          margin: auto; 
         overflow: hidden;
         background: linear-gradient(315deg, #393932, #414833);

        //  background: linear-gradient(315deg, rgb(255, 105, 104) 3%, rgb(6, 149, 255) 38%, rgb(163, 52, 250) 68%, rgb(255, 105, 104) 98%);
         animation: gradient 15s ease infinite;
         background-size: 400% 400%;
         background-attachment: fixed;
}

@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.wave {
  background: rgb(255 255 255 / 25%);
  border-radius: 800% 800% 0 0;
  position: fixed;
  width: 200%;
  height: 12em;
  animation: wave 10s -3s linear infinite;
  transform: translate3d(0, 0, 0);
  opacity: 0.8;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.wave:nth-of-type(2) {
  bottom: -1.25em;
  animation: wave 18s linear reverse infinite;
  opacity: 0.9;
}

.wave:nth-of-type(3) {
  bottom: -2.5em;
  animation: wave 20s -1s reverse infinite;
  opacity: 1;

}

@keyframes wave {
  0%, 100% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5%);
  }

  50% {
    transform: translateX(-10%);
  }

  75% {
    transform: translateX(-5%);
  }
}
    `}
      </style>
    </div>
   
   
    </>
  );
}

export default Client