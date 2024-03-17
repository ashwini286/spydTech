import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";
import IMG1 from "../../assets/Microsoft/MIcroSoft Main.jpeg";
import IMG2 from "../../assets/Microsoft/CRM-Main.jpg";
import IMG3 from "../../assets/Microsoft/DotNet.png";
import { Link } from "react-router-dom";
import IMG4 from "../../assets/Microsoft/power-bi2.png";


function Microsoft() {
  useEffect(() => {
    AOS.init();
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbarupp />
      <div className="relative w-full">
        <img
          src="https://4kwallpapers.com/images/wallpapers/windows-logo-m1-chip-black-background-gradient-windows-10-5k-3440x1440-5918.jpg"
          className=" w-full object-cover  "
          alt="Background 1"
          style={{ filter: "brightness(100%)" }}
        />
        <div class="absolute inset-0 md:h-[490px] h-[415px] bg-black bg-opacity-50 "></div>
        <div className="absolute inset-0  flex flex-col  items-center justify-center text-center text-white">
          <h1 className="text-2xl font-bold md:text-4xl py-4">
          Elevate Your Business with "SpY D Technologies" Microsoft Solutions
          </h1>
         
        </div>
      </div>
      <h1 className="text-xl  text-center py-5 pt-5 font-bold">
             Where innovation meets expertise in
            Microsoft technology solutions. With our comprehensive suite of
            services, we empower businesses to unlock their full potential and
            thrive in today's digital landscape. Explore how SpY D Technology can transform
            your business with Microsoft technology:
          </h1>

      <div className='flex items-center justify-center '>
        <div className='text-center md:text-2xl text-xl md:pt-16 w-[850px]  font-bold'>Empower Your Business with Cutting-Edge Microsoft Solutions: <br /> <span className="text-blue-600 md:text-4xl text-2xl mx-auto border-b-2 border-cyan-800 w-1/2">  Transformative Technologies for Seamless Success </span> </div>
      </div>
      {/* <div className='relative'>
  <img
    src='https://4kwallpapers.com/images/wallpapers/windows-logo-m1-chip-black-background-gradient-windows-10-5k-3440x1440-5918.jpg'
    className='rounded-b-2xl w-full h-auto'
    alt="Background Image"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-2xl"></div>
  <div className='absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold p-10'>
    <h1 className='text-md md:text-4xl '>Elevate Your Business with "SpY D Technologies" Microsoft Solutions</h1>
 
  </div>
</div>  */}

      {/* <h1 className="text-md py-8 md:text-2xl  text-center md:p-10">
        Welcome to Spyd Technology, where innovation meets expertise in
        Microsoft technology solutions. With our comprehensive suite of
        services, we empower businesses to unlock their full potential and
        thrive in today's digital landscape. Explore how Spyd can transform your
        business with Microsoft technology:
      </h1> */}
      
     
      <div class="max-w-screen-xl mx-auto p-16">
        <div class="sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10">
          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8  ">
              <img
                src="https://www.matrixbricks.com/img/services/azure-cloud-migrations.jpg"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Microsoft Azure Integration and Migration:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Harness the power of the cloud with Microsoft Azure. Our experts
                specialize in seamless integration and migration to Azure,
                enabling you to scale your infrastructure, enhance agility, and
                drive innovation while optimizing costs.
              </p>
              <img
                src="https://www.matrixbricks.com/img/services/azure-cloud-migrations.jpg"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://www.fusionmanageit.co.uk/wp-content/uploads/2023/02/Resources-page-graphics-1-1-1024x569-1024x585-1.webp"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Office 365 Collaboration and Productivity:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Boost productivity and collaboration with Office 365. From email
                and document management to real-time collaboration tools like
                Teams, Spyd ensures you leverage the full potential of Office
                365 to streamline workflows and enhance communication.
              </p>
              <img
                src="https://www.fusionmanageit.co.uk/wp-content/uploads/2023/02/Resources-page-graphics-1-1-1024x569-1024x585-1.webp"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Microsoft Dynamics 365 CRM and ERP Solutions:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Transform customer relationships and streamline business
                processes with Microsoft Dynamics 365. Our tailored CRM and ERP
                solutions empower you to deliver exceptional customer
                experiences, optimize operations, and drive growth.
              </p>
              <img
                src="https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Dynamics-365-CRM-Logo.png"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://cdn.sanity.io/images/tlr8oxjg/production/2d8450596e26adafc8e47e88a65bce42104b732a-1456x816.png?w=3840&q=80&fit=clip&auto=format"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Power BI Analytics and Reporting:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Make informed decisions with Power BI. Spyd's Power BI experts
                help you unlock insights from your data with interactive
                dashboards, rich visualizations, and advanced analytics,
                empowering you to drive strategic initiatives and stay ahead of
                the competition.
              </p>
              <img
                src="https://cdn.sanity.io/images/tlr8oxjg/production/2d8450596e26adafc8e47e88a65bce42104b732a-1456x816.png?w=3840&q=80&fit=clip&auto=format"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://www.scnsoft.com/blog-pictures/sharepoint/office_365_security-01_1.png"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Microsoft 365 Security and Compliance:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Protect your business and data with Microsoft 365 security
                solutions. Spyd provides comprehensive security and compliance
                services, including threat protection, identity management, and
                data governance, ensuring your organization remains secure and
                compliant.
              </p>
              <img
                src="https://www.scnsoft.com/blog-pictures/sharepoint/office_365_security-01_1.png"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://www.twai.com/Blog/image.axd?picture=/Role-of-a-custom-API-development-and-Integration-service-provider.jpg"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Custom Development and Integration Services:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Tailor Microsoft solutions to your unique needs with Spyd's
                custom development and integration services. Our experienced
                developers specialize in building bespoke applications and
                seamless integrations that drive efficiency, innovation, and
                competitive advantage.
              </p>
              <img
                src="https://www.twai.com/Blog/image.axd?picture=/Role-of-a-custom-API-development-and-Integration-service-provider.jpg"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>

          <div class="hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg">
            <div class="py-4 px-8">
              <img
                src="https://servicestrategies.com/wp-content/uploads/507987701_service-leader-2.jpg"
                class="rounded-full h-12 w-12 mb-4"
              />
              <a href="#">
                <h4 class="text-lg mb-3 font-semibold">
                  Training and Support:
                </h4>
              </a>
              <p class="mb-2 text-sm text-gray-600">
                Empower your team with Spyd's training and support services.
                From user training to ongoing technical support, we ensure your
                team has the knowledge and resources they need to maximize the
                value of Microsoft technology and drive business success.
              </p>
              <img
                src="https://servicestrategies.com/wp-content/uploads/507987701_service-leader-2.jpg"
                class="w-100"
              />
              <hr class="mt-4" />
              <span class="text-xs">ARTICLE</span>
              &nbsp;<span class="text-xs text-gray-500">PROCESS</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col md:flex-row ">
        <img
          src={IMG2}
          className="w-full md:w-1/2 h-64 md:h-auto"
          alt="Image"
          data-aos="fade-up"
        />
        <div className="md:ml-10 p-10 space-y-5" data-aos="fade-down">
          <h1 className="text-3xl font-bold">What is CRM?</h1>
          <p>
            Customer relationship management (CRM) is a set of integrated,
            data-driven software solutions that help manage, track, and store
            information related to your company’s current and potential
            customers. By keeping this information in a centralized system,
            business teams have access to the insights they need, the moment
            they need them.
          </p>
          <Link to="/Dynamics CRM">
          <button className='bg-[#4361ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-blue-600 mt-4 hover:bg-[#3a0ca3]'>Read More</button>
          </Link>
        </div>
      </div>
      <div className="p-10 flex flex-col md:flex-row md:items-center">
        <div className="space-y-5 ml-10" data-aos="fade-up">
          <h1 className="text-3xl font-bold">What is .NET Framework?</h1>
          <p>
            .NET Framework is a software development framework for building and
            running applications on Windows.
          </p>
          <p>
            There are various implementations of .NET. Each implementation
            allows .NET code to execute in different places—Linux, macOS,
            Windows, iOS, Android, and many more.
          </p>
          <Link to="/ASP.NET Web Application">
          <button className='bg-[#4361ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-blue-600 mt-4 hover:bg-[#3a0ca3]'>Read More</button>
          </Link>
        </div>
        <img src={IMG3} data-aos="fade-up" />
      </div>
      <div className="p-10 flex flex-col md:flex-row md:items-center">
        <img
          src={IMG4}
          data-aos="fade-up"
          className="w-full md:w-1/2 h-64 md:h-auto"
        />
        <div className=" p-10 space-y-5" data-aos="fade-down">
          <h1 className="text-3xl font-bold" data-aos="fade-down">
            Power BI Analytics and Reporting:
          </h1>
          <p>
            Make informed decisions with Power BI. SpY D Technology's Power BI
            experts help you unlock insights from your data with interactive
            dashboards, rich visualizations, and advanced analytics, empowering
            you to drive strategic initiatives and stay ahead of the
            competition.
          </p>
          <Link to="/PowerBI" data-aos="fade-down">
          <button className='bg-[#4361ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-blue-600 mt-4 hover:bg-[#3a0ca3]'>Read More</button>
          </Link>
        </div>
      </div>

      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative isolate overflow-hidden bg-blue-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Experience the power of Microsoft technology with SpY D Technology by
            your side. Get Started Today!
          </h2>
          <p class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200">
            Contact us today to learn more about how our solutions can elevate
            your business and propel you towards success in the digital age.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            {/* <a
              class="rounded-md bg-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              href="/signup"
            >
              Get Started Now
            </a> */}
            <button className='bg-green-500 text-white py-2 px-4 rounded-md  shadow-lg shadow-green-600 mt-4 hover:bg-green-500'> Get Started Now</button>
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

export default Microsoft;
