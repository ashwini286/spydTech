import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import IMG from "../../assets/PPC-2.jpg";
import IMG1 from "../../assets/Digital-marketing-PPC1.jpg";

function PPCManagement() {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbarupp />
      <div className="w-full">
        <img
          src="https://www.safaltaguru.com/wp-content/uploads/2023/01/PPC.jpg"
          className=" w-full object-cover md:h-[550px]"
          alt="PPC Management Banner"
        />
      </div>
      <div
        className="bg-gray-300 p-10 space-y-5"
        data-te-animation-init
        data-te-animation-start="onScroll"
        data-aos="fade-down"
      >
        <h1 className="text-4xl text-center">
          Digital Marketing and PPC Services and Management Strategy
        </h1>
        <p className=" tracking-wider  text-black">
          <a className="text-2xl text-[#d97706] font-bold">
            Pay per Click (PPC)
          </a>{" "}
          is advertising service offered by search engines such as Google, Bing,
          Yahoo and social media platforms such as Facebook, Twitter, LinkedIn,
          and Instagram. Google’s Ad Words is the most popular ad campaign
          targeted using the relevant keywords, and geography. As this technique
          leverages demography, geography, and users interests, it offers
          immediate and instant visibility wherever the ad is placed either on
          search engines or on the chosen social media platform. The analytics
          are extensively used to track, analyse the report and make informed
          decisions. We aspirant soft solutions provide best PPC services in
          Hyderabad.
        </p>
      </div>

      <div className="bg-[#4d7c0f] rounded-2xl ">
        <div class="max-w-screen-2xl mx-auto py-8 px-4 lg:py-16 lg:px-6  rounded-2xl ">
          <div class="text-center mb-10">
            <h2
              class="text-4xl tracking-tight font-bold text-primary-800"
              data-aos="fade-down"
            >
              MORE ABOUT
            </h2>
          </div>

          <div class="flex flex-col md:flex-row">
            <div class="mr-0 md:mr-8 mb-6 md:mb-0" data-aos="fade-up">
              <img
                class="w-3/1 md:w-3/1 mx-auto h-full shadow-2xl "
                src={IMG1}
                alt="can_help_banner"
              />
            </div>

            <div
              class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2"
              data-aos="fade-down"
            >
              <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl shadow-2xl">
                  <h3 class="text-2xl font-bold text-md mb-6">
                    PPC Services Strategy:
                  </h3>
                  <p class="text-sm">
                    Though we’re a PPC agency based in Hyderabad, we also
                    provide PPC services in Bengaluru, India and across the
                    globe.
                  </p>
                </div>
              </div>
              <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl shadow-2xl">
                  <h3 class="text-2xl font-bold text-md mb-6">
                    Strategic keyword recommendations:
                  </h3>
                  <p class="text-sm">
                    {" "}
                    Choosing the right keyword can make lot of difference in
                    your campaigns, determining that how well your ads rank on
                    Google and search engines.
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl shadow-2xl">
                  <h3 class="text-2xl font-bold text-md mb-6">
                    Bid Management:
                  </h3>
                  <p class="text-sm">
                    This is one of the important areas in the field of PPC
                    advertising, it is the main task during campaign setup. It
                    improves the quality of ad and will display in better place
                    in search engines.
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl shadow-2xl">
                  <h3 class="text-2xl font-bold text-md mb-6">
                    PPC Copywriting:
                  </h3>
                  <p class="text-sm">
                    PPC Copywriting is nothing but an Ad copy writing, it’s a
                    term for the main text of the clickable advertisement. We
                    create ad copy in a unique way, as we make sure that your
                    business will grow long run and generate a goodresult,
                    within a short span.
                  </p>
                </div>
              </div>

              <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl shadow-2xl">
                  <h3 class="text-2xl font-bold text-md mb-6">
                    ROI rate report:
                  </h3>
                  <p class="text-sm">
                    All campaign reports regularly shared with clients, we will
                    give accurate reports that will help our clients to
                    evaluate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="p-10" data-aos="fade-down">
          <a className="text-2xl text-[#d97706] font-bold">
            {" "}
            Pay Per Click or PPC
          </a>{" "}
          is an online advertising model used to direct traffic to websites,
          where advertisers pay the website owners when the ad is clicked.
          Sponsored ads you see at the top of Google’s search results page that
          is PPC advertising. When an online user clicks on the ad, the person
          lands on your site and you only pay the search engine a little fee.
        </p>
      </div>

      <section class="bg-white pb-6">
        <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:">
          <div class="container mx-auto px-6 p-6 bg-white">
            <div class="mb-16 text-center" data-aos="fade-down">
              <p class="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                PPC Campaign Management
              </p>
            </div>
            <p className="text-xl text-gray-500" data-aos="fade-up">
              In PPC Campaign you can show your ads on Smartphone’s, tablets,
              and other devices or also you can also specify certain settings
              within your PPC campaign, like the times or day, locations that
              you want to target and how much money you want to spend per day.
              With PPC campaigns you can have direct interface with the target
              customer, who is searching queries on Google, Yahoo, Bing or any
              social media network such as Facebook, twitter.
            </p>

            <p className="text-xl text-gray-500" data-aos="fade-up">
              For example: Get Online sales through PPC services, at Aspirant
              Soft Solutions offering professional PPC services from India which
              can help you to get more online sales including brand imprint and
              attract multiple customers to your business. We know that the
              success of PPC is not measured by the technology and tools, but by
              the best strategy.
            </p>

            <h1 className="text-xl text-gray-500 pt-5" data-aos="fade-down">
              PPC campaigns also include mobile ads and remarketing options
              including:
            </h1>

          <div className="flex items-center justify-center md:flex-row flex-col my-16 w-full" data-aos="fade-down">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

              <div class="w-full shadow-xl p-4">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">PPC Landing Page Creation</div>
                </div>
              </div>

              <div className="w-full shadow-xl p-4 ">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">
                    Creating Ad Copyright And Ad Campaign Set Up
                  </div>
                </div>
              </div>

              <div class="w-full shadow-xl p-4  ">
                <div class="flex items-center mb-6 justify-center">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">
                    Paid Search Strategy Implementation
                  </div>
                </div>
              </div>
              <div class="w-full shadow-xl p-4  ">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">
                  Improved ROI And Reduced CPC
                  </div>
                </div>
              </div>
              <div class="w-full shadow-xl p-4">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">Increased Paid Traffic</div>
                </div>
              </div>

              <div class="w-full shadow-xl p-4 ">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">Better Leads And Sales</div>
                </div>
              </div>

      

              <div class="w-full shadow-xl p-4  ">
                <div class="flex items-center justify-center mb-6">
                <div><FaRegCircleCheck className="w-6 h-6 text-indigo-500" /></div>
                  <div class="ml-4 text-xl">
                    Bid Management And Re-Targeting
                  </div>
                </div>
              </div>
            </div>
          </div>
            <p class="text-xl leading-8 text-gray-500" data-aos="fade-up">
              Successful PPC campaign management comes from many years
              experience in managing Pay Per Click campaigns for companies
              Aspirant team is dedicated to provide the utmost level of PPC
              campaign management at cost-benefit prices and make sure that your
              PPC campaign is a success, from keyword research to campaign
              set-up, monitoring and management to measurement- reporting. Broad
              keyword analysis and Competition comparison helps your business,
              and using those keywords that will provide you a great number of
              enquiries.
            </p>
          </div>
        </div>
      </section>

      <div class="p-4 w-full h-full">
        <div
          data-aos="fade-down"
          class="mx-auto flex h-[500px] max-w-[90rem] flex-col items-center justify-center rounded-2xl bg-blue-500 bg-opacity-5 px-4 text-blue-500 dark:bg-opacity-20 md:h-[400px] lg:h-[500px]  relative border-4 shadow-xl p-4lue-500"
        >
          <div class="pointer-events-none absolute left-0 top-0 z-[-1] h-full w-full rounded-xl bg-white dark:bg-black"></div>
          <span class=" text-center text-4xl font-bold">Why Choose Us</span>
          <div class="flex justify-center items-center md:gap-8 md:flex-row flex-col  text-sm font-medium text-gray-700 dark:text-white sm:text-base md:mx-auto md:max-w-screen-xl">
          <div className="flex justify-center flex-col p-4">
          <div className="my-1 flex  gap-4 items-center md:w-[400px]">
           <div><FaCheck /></div>
            <div >  Experienced And Dedicated Professionals To Manage PPC Accounts</div>
            </div>
            <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
           <div>   Effective And ROI On Your Ad Spend</div>
            </div>
            <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
              <div>Quality PPC Management At Affordable Prices</div>
            </div>
            <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
              <div>100% Satisfactory Outcomes</div>
            </div>
            </div>
        
        <div className="flex justify-center  flex-col  p-4">
        <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
            <div>  Transparent Business Policy</div>
            </div>
         
            <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
             <div> 24 /7 Hour Communication Support</div>
            </div>
            <div class="my-1 flex  gap-4 items-center">
           <div><FaCheck /></div>
            <div>  Reliable And Effective Services</div>
            </div>
            <div class="my-1 flex  gap-4 items-center md:w-[400px]">
           <div><FaCheck /></div>
              Wondering that why your PPC is not paying off for you? Contact us
              to learn why. We are a renowned PPC advertising agency and can
              boost your lead generation and profit.
            </div>  
        </div>
          </div>
        </div>
      </div>

      <div className="pl-4 md:pl-14 bg-orange-300 p-4 md:p-10 rounded-3xl">
        <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
          The value we add to our clients
        </h1>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 p-10"
          data-aos="fade-down"
        >
          <div class=" rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow-lg">
            <div class="flex border border-gray-500 rounded-lg p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-500 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <div class="ml-2">
                <h4 class="font-semibold text-base text-primary tracking-normal">
                  Our PPC experts come with deep experience in AdWords and
                  Social Media paid to advertise.
                </h4>
              </div>
            </div>
          </div>
          <div class=" rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow-lg">
            <div class="flex border border-gray-500 rounded-lg p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-500 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <div class="ml-2">
                <h4 class="font-semibold text-base text-primary tracking-normal">
                  We are consistent in tracking, analysing and reporting on
                  analytics to make informed decisions
                </h4>
              </div>
            </div>
          </div>
          <div class=" rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow-lg">
            <div class="flex border border-gray-500 rounded-lg p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-500 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <div class="ml-2">
                <h4 class="font-semibold text-base text-primary tracking-normal">
                  Aspirant professionals are trained and certified in Ad Words
                  from fundamentals, display, video, mobile, shopping, and
                  analytics.
                </h4>
              </div>
            </div>
          </div>
          <div class=" rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow-lg">
            <div class="flex border border-gray-500 rounded-lg p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-500 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <div class="ml-2">
                <h4 class="font-semibold text-base text-primary tracking-normal">
                  We create effective landing pages with persuasive and
                  compelling copy that help in increasing the
                </h4>
              </div>
            </div>
          </div>

          <div class=" rounded-lg bg-gradient-to-tr from-pink-500 to-blue-500 p-0.5 shadow-lg">
            <div class="flex border  rounded-lg p-4 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-green-500 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
              <div class="ml-2 ">
                <h4 class="font-semibold text-base text-primary tracking-normal">
                  We plan, and executive an optimized campaign that helps our
                  clients reduce the CPC increases the CTR and conversion rate.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Approch />
    </>
  );
}

export default PPCManagement;
