import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IMG from "../../assets/Microsoft/CRM1.png";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";

import IMG2 from "../../assets/Microsoft/CMR sevices1.png";
import IMG3 from "../../assets/Microsoft/CMR sevices2.png";
import IMG4 from "../../assets/Microsoft/CMR sevices3.png";
import IMG5 from "../../assets/Microsoft/CMR sevices4.png";
import IMG6 from "../../assets/Microsoft/CMR sevices5.png";
import IMG7 from "../../assets/Microsoft/CMR sevices6.png";
import IMG8 from "../../assets/Microsoft/dynamic-crm.png";
import Crm from "./Crm";

function MicrosoftCRM() {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbarupp />

      {/* <div className="relative">
        <img
          className="w-full rounded-b-2xl md:h-[500px] h-[200px]"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/business-central-Hero_background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=1120&qlt=100&fit=constrain"
        />
      
        <div className="absolute mt-[-20%] md:mt-[-25%] text-sm md:text-2xl text-white font-bold w-[200px]  md:w-[650px] mx-[60px] md:leading-[48px]">
          <h1>
            Transforming Customer Relationships: <span className="text-[#B566D3] md:text-4xl mx-auto border-b-2 border-[#FFB802] w-1/2 text-md">Unleashing the Power of
            Microsoft Dynamics CRM with SpY D Technology </span>
          </h1>
          <a></a>
        </div>
      </div> */}
      <div className="md:h-[550px]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/business-central-Hero_background?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=3200&hei=1120&qlt=100&fit=constrain"
          className=" w-full object-cover md:h-[550px] absolute h-[300px]"
          alt="Background 2"
        />
        <div className="relative flex justify-center flex-col">
          <div className="relative pt-[100px] md:pt-[200px] md:w-[750px] w-[300px]  md:text-6xl text-xl font-bold text-white pl-12">
            <p> Transforming Customer Relationships: </p>
          </div>
          <div className="relative text-white pl-12 md:w-[650px] w-[300px]">
            {" "}
            <span className="text-[#B566D3] md:text-4xl mx-auto border-b-2 border-[#FFB802] w-1/2 text-md">
              Unleashing the Power of Microsoft Dynamics CRM with SpY D
              Technology{" "}
            </span>
          </div>
        </div>
      </div>
      <Crm />

      <div className="bg-[#7b87f1] py-8">
        <h1 className="text-4xl text-center pb-8 " data-aos="fade-up">
          Our CRM Services include
        </h1>
        <div className="flex justify-center items-center md:flex-row flex-col">
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8"
            data-aos="fade-down"
          >
            {/* First row */}

            <div className="flex flex-col items-center ">
              <img src={IMG2} className="img" alt="Image 2" />
              <p className="text-center">
                Enhancing the existing functionality
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={IMG3} className="img" alt="Image 3" />
              <p className="text-center ">
                Increase in-house capability to deploy single tenant and
                multi-tenant solutions
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={IMG4} className="img" alt="Image 4" />
              <p className="text-center ">
                Offer user-friendly design with special settings installation
              </p>
            </div>
            {/* Second row */}

            <div className="flex flex-col items-center">
              <img src={IMG5} className="img" alt="Image 5" />
              <p className="text-center ">
                Provide workflow customizations specific to your company’s
                business processes
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={IMG6} className="img" alt="Image 6" />
              <p className="text-center">
                Extending the solutions to WCF web services
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={IMG7} className="img" alt="Image 7" />
              <p className="text-center ">
                Offer advanced customization that requires integration with
                third-party solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-2xl my-4 mx-auto">
        <div class="border-2 border-indigo-500 p-4 md:p-6 rounded-lg text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">
            Microsoft CRM
          </h2>

          <p class="text-lg mb-4 text-gray-700" data-aos="fade-down">
            <strong>SpY D Technology</strong>.
            <br />
            provides Customer Relationship Management (CRM) solutions specially
            designed by our experts to meet our clients' ever-demanding needs.
            We utilize our domain expertise to implement SMBs and LMEs level
            solutions that meet all the business needs of our clients. With our
            deep knowledge of CRM processes, we are experts in building
            multichannel customer interactive systems and Microsoft CRM
            architecture that reduces the total cost involved in the actual
            development and enhances the overall services.
          </p>

          <a
            href="#"
            data-aos="fade-up"
            class="font-bold inline-block bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-100 transition duration-300 ease-in-out"
          >
            Take Survey
          </a>
        </div>
      </div>

      <h1
        className="text-4xl lg:text-5xl text-center  text-black pt-5"
        data-aos="fade-up"
      >
        The key benefits of CRM solutions include
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row items-center justify-center py-12">
       <div>
       <img
          src={IMG8}
          className="p-5 lg:pl-0"
          alt="Key Benefits Image"
          data-aos="fade-up"
        />
       </div>

        <div
          className="ml-0 lg:ml-10 mt-2 space-y-5 lg:space-y-0  text-black"
          data-aos="fade-down"
        >
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">Pay-as-you-go pricing model</p>
          </div>
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">
              Dedicated API for each service offered
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">
              Increase profitability and efficiency
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">Seamless Database Management</p>
          </div>
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">
              Security through compliance program and highly secure data centers
            </p>
          </div>
          <div className="flex items-center">
            <span className="text-[#38bdf8] lg:text-xl mr-2">&gt;</span>
            <p className="text-sm lg:text-base">
              Scalability regardless of application size
            </p>
          </div>
        </div>
      </div>
      <div class="min-h-screen flex flex-col gap-4 p-8 sm:p-16 md:p-24 justify-center bg-white">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <h2 class="sr-only" data-aos="fade-down">
            Featured case study
          </h2>
          <section class="font-sans text-black">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img
                        class="h-full object-cover"
                        data-aos="fade-up"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey" data-aos="fade-down">
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-4xl font-bold">
                    SpY D Technology: Experience Transformation
                  </h2>
                  <p class="mt-4">
                    With more than a decade of experience, our CRM Development
                    India team has achieved a new height of unprecedented
                    success through our CRM solutions and services and helped us
                    to explore a new dimension to customer service. We also
                    focus on leveraging the platform to support any relationship
                    scenario you want to develop with our CRM services.
                  </p>
                  <p class="mt-4"></p>
                  <p>
                    <a
                      class="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Explore this event
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div class="mx-auto max-w-6xl sm:px-6 lg:px-5">
        <div
          class="relative isolate overflow-hidden bg-blue-800 px-6 py-24 shadow-2xl sm:rounded-3xl  "
          data-aos="fade-up"
        >
          <h2 class="mx-auto max-w-2xl text-center text-xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unlock the full potential of your customer relationships with
            Microsoft Dynamics CRM by Spyd Technology. Get Started Today!
          </h2>
          <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200">
            Contact us today to learn more about our tailored solutions and
            start driving meaningful business outcomes.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              class="rounded-md bg-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              href="/signup"
            >
              Get Started Now
            </a>
          </div>
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            ></circle>
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#7775D6"></stop>
                <stop offset="1" stop-color="#E935C1" stop-opacity="0"></stop>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <Approch />
    </>
  );
}

export default MicrosoftCRM;
