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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-semibold text-white">
                What our clients say
              </h1>
            </div>
            <div>
              <p className="opacity-80 font-serif text-white">
                Our works are for clients who are spreading values and principles
                to the world to become a better place.
              </p>
            </div>

            <div>
              <h1 className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-normal text-white">
                Sp Y D private limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className="text-white text-sm">ABC - Manager.</p>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-semibold text-white">
                What our clients say
              </h1>
            </div>
            <div>
              <p className="opacity-80 font-serif text-white">
                Our works are for clients who are spreading values and principles
                to the world to become a better place.
              </p>
            </div>

            <div>
              <h1 className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-normal text-white">
                Sp Y D private limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className="text-white text-sm">ABC - Manager.</p>
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-semibold text-white">
                What our clients say
              </h1>
            </div>
            <div>
              <p className="opacity-80 font-serif text-white">
                Our works are for clients who are spreading values and principles
                to the world to become a better place.
              </p>
            </div>

            <div>
              <h1 className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-normal text-white">
                Sp Y D private limited is a company that believes in innovation. The entire team was so
                cooperative and polite.
              </h1>
              <div>
                <p className=" text-white text-sm">ABC - Manager.</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Client