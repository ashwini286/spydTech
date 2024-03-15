import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="hero bg-blue-900 relative h-full overflow-hidden font-montserrat">
      <div className="hero__title absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl z-10">
       
      </div>
      
      <div className="cube absolute w-10 h-10 border border-blue-800 transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      <div className="cube absolute w-10 h-10 border border-purple-500 transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom" style={{ animationDelay: "2s", left: "25vw", top: "40vh" }}></div>
      <div className="cube absolute w-10 h-10 border border-pink-800 transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom" style={{ animationDelay: "4s", left: "75vw", top: "50vh" }}></div>
      <div className="cube absolute w-10 h-10 border border-green-600 transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom" style={{ animationDelay: "6s", left: "90vw", top: "10vh" }}></div>
      <div className="cube absolute w-10 h-10 border border-[#a21caf] transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom" style={{ animationDelay: "8s", left: "10vw", top: "85vh" }}></div>
      <div className="cube absolute w-10 h-10 border border-[#059669] transform origin-top-left scale-0 rotate-0 translate-x-1/2 translate-y-1/2 animate-pulse-custom" style={{ animationDelay: "10s", left: "50vw", top: "10vh" }}></div>



      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(20);
              opacity: 0;
            }
          }

          .animate-pulse-custom {
            animation: pulse 12s ease-in forwards infinite;
          }
        `}
      </style>
      
      <div className="container max-w-10xl p-10 mx-auto space-y-10 lg:px-8 lg:max-w-8xl text-white">
        <div className="">
          <h2 className="text-3xl font-bold text-center sm:text-5xl" data-aos="fade-up-right">Our Services</h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center" data-aos="fade-up-right">Explore the latest features that enhance your learning experience and make it even more exciting.</p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center ">
          <div>
            <div className="mt-4 space-y-12"  data-aos="fade-up-right">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-emerald-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4" data-aos="fade-up-right">
                  <h4 className="text-lg font-medium leading">Predictive Analytics</h4>
                  <p className="mt-2">Anticipate future trends and make proactive decisions based on predictive analytics.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"  data-aos="fade-up-right">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-emerald-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-plus">
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      <line x1="12" x2="12" y1="7" y2="13"></line>
                      <line x1="15" x2="9" y1="10" y2="10"></line>
                    </svg>
                  </div>
                </div>
                <div className="ml-4" data-aos="fade-up-right">
                  <h4 className="text-lg font-medium leading">Anomaly Detection</h4>
                  <p className="mt-2">Identify unusual patterns or behaviors in your data to detect potential threats or opportunities.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"  data-aos="fade-up-right">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-emerald-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video">
                      <path d="m22 8-6 4 6 4V8Z"></path>
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                </div>
                <div className="ml-4" data-aos="fade-up-right">
                  <h4 className="text-lg font-medium leading">Recommendation Systems</h4>
                  <p className="mt-2">Deliver personalized recommendations to your customers, increasing engagement and conversion rates.</p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0"  data-aos="fade-up-right">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-emerald-400 dark:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-question">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4" data-aos="fade-up-right">
                  <h4 className="text-lg font-medium leading" data-aos="fade-up-right">Natural Language Processing</h4>
                  <p className="mt-2">Analyze and interpret human language to extract valuable insights from text data.</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0  " data-aos="fade-up-right">
            <img width="600" height="600" src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" className="mx-auto h-full rounded-lg shadow-lg dark:bg-gray-500" style={{ color: 'transparent' }} />
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Hero;
