import React from 'react'
import { Carousel } from 'flowbite-react';

function Client() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover"
          style={{
            backgroundImage: 'url("https://www.aspirantsoftsolutions.com/img/testimonialbg.jpg")',
          }}
        >
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
              <h1 className="opacity-8 pt-4 md:pt-16 text-md md:text-2xl text-white">
                SpY D Technology Private Limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className="text-white text-sm md:text-xl">ABC - Manager.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover"
          style={{
            backgroundImage: 'url("https://www.aspirantsoftsolutions.com/img/testimonialbg.jpg")',
          }}
        >
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
              <h1 className="opacity-8 pt-4 md:pt-16 text-md md:text-2xl text-white">
              SpY D Technology Private Limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className="text-white text-sm md:text-xl">ABC - Manager.</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full items-center justify-center bg-cover bg-center sm:bg-cover md:bg-cover"
          style={{
            backgroundImage: 'url("https://www.aspirantsoftsolutions.com/img/testimonialbg.jpg")',
          }}
        >
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
              <h1 className="opacity-8 pt-4 md:pt-16 text-md md:text-2xl text-white">
              SpY D Technology Private Limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className="text-white text-sm md:text-xl">ABC - Manager.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Client