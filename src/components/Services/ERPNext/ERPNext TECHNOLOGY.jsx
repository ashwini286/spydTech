import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import { Link } from "react-router-dom";
import IMG from "../../assets/Blue.webp";

import IMG12 from "../../assets/ERPNXT1.jpg";
import IMG1 from "../../assets/ERPNXT2.jpg";
import IMG2 from "../../assets/ERPNXT3.jpg";
import IMG3 from "../../assets/ERPNXT4.jpg";
import IMG4 from "../../assets/ERPNXT5.jpg";
import IMG5 from "../../assets/ERPNXT6.jpg";
import IMG6 from "../../assets/ERPNXT7.jpg";
import UniqueTeam12 from "../UniqueTeam/UniqueTeam12";
// import LatestPost from "../../UniqueTeam/LatestPost";
import Footer1 from "../UniqueTeam/Footer1";
import ChatBot from "../../Home/Home/ChatBot";

function ERPNext() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Navbarupp />
      </div>

      <div className="h-[550px] relative">
        <img
          src={IMG}
          className=" w-full object-cover h-[550px] rounded-b-2xl "
          alt="Background 2"
          style={{ filter: "brightness(90%)" }}
        />
        <div class="absolute inset-0 m-auto flex flex-col items-center justify-center w-[90%] md:w-[60%]">
          <div
            class="text-4xl text-white font-bold w-full text-center"
            data-aos="fade-up-right"
          >
            Our Services
          </div>
          <div
            class="text-xl text-white text-center my-4"
            data-aos="fade-up-right"
          >
            Building Cost-Effective Digital Business Capabilities around the
            ERPNext, focusing on the right balance of Digitization, Flexibility,
            and Process mapping.
          </div>
        </div>
      </div>

      <UniqueTeam12 />

      {/* Add the card section */}
      <div className=" p-4 bg-white rounded-xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
            <img
              src={IMG12}
              className="w-[85%]"
              alt="Background Image"
              data-aos="fade-up-right"
            />
            <h2 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              ERPNext Consulting
            </h2>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              Our Consultants gather all the necessary details about your
              company, its business processes, business challenges, expected end
              goals, and more. It is a very crucial stage as it lays a strong
              foundation. At Akhilam, you are assured that you are working with
              an experienced, dedicated team of Consultants.
            </p>
            <Link to="/Consulting">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 ">
            <img
              src={IMG1}
              className="w-[90%]"
              alt="Background Image"
              data-aos="fade-up-right"
            />
            <h2 className="text-xl font-bold  p-4" data-aos="fade-up-right">
              ERPNext Implementation
            </h2>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              We focus on organizing the overall structure and behavior of all
              the doctypes, required reports, and required dashboards. From a
              customization and custom development aspect our technology team
              ensures technical functionalities are defined, and all pieces fit
              together perfectly; creating a larger picture of how items relate
              with each other within the system.
            </p>
            <Link to="/Implementation">
              <button
                data-aos="fade-up-right"
                className="mt-4 bg-blue-900  text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500"
            data-aos="fade-up-right"
          >
            <img src={IMG2} className="w-[85%]" alt="Background Image" />
            <h3 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              ERPNext Development
            </h3>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              For the out of box requirement, Our technical team prepares
              prototypes for clients, and clients have approved them, we now go
              ahead and do the coding. We use the best coding tactics to ensure
              quality results. And, our standard process allows clients to scale
              ERPNext solutions with the latest and future versions.
            </p>
            <Link to="/Implementation">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 4 */}
          <div
            className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 "
            data-aos="fade-up-right"
          >
            <img src={IMG3} className="w-[85%]" alt="Background Image" />
            <h2 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              Website with ERPNext
            </h2>
            <p className="w-[100%]  tracking-wider" data-aos="fade-up-right">
              We help small businesses and NGOs to start their digital
              transformation journey and a presence in the digital world with a
              dynamic, easy-to-update, interacting website at a minimal cost.
              Also, it allows customizing the website's appearance and layout
              for any screen size with Bootstrap’s cutting-edge technology.
            </p>
            <Link to="/Third-Party Integrations">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 5 */}
          <div
            className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500 "
            data-aos="fade-up-right"
          >
            <img
              src={IMG4}
              className="w-[85%]"
              alt="Background Image"
              data-aos="fade-up-right"
            />
            <h2 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              Ecommerce with ERPNext
            </h2>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              We help in the seamless integration of the eCommerce store with a
              modern, cloud-based ERPNext solution. Together, they extend the
              company’s breadth and depth, connecting processes and procedures
              for a cohesive, future-proofed operation. And, it helps to
              centralize data on a single, unified data hub rather than silos.
            </p>
            <Link to="/Implementation">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 6 */}
          <div
            className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500"
            data-aos="fade-up-right"
          >
            <img
              src={IMG5}
              className="w-[85%]"
              alt="Background Image"
              data-aos="fade-up-right"
            />
            <h2 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              Third-Party Integrations with ERPNext
            </h2>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              We are experts in any kind of third-party integration with
              ERPNext, and third-party integrations allow you to quickly add
              features and tools to business processes that might take many
              months to develop own. By utilizing third-party integrations, We
              incorporate superior features to your ERPNext.
            </p>
            <Link to="/Third-Party Integrations">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Card 7 */}
          <div
            className="bg-white p-4 rounded-lg hover:scale-105 transition-all duration-500"
            data-aos="fade-up-right"
          >
            <img
              src={IMG6}
              className="w-[85%]"
              alt="Background Image"
              data-aos="fade-up-right"
            />
            <h2 className="text-xl font-bold mb-2 p-5" data-aos="fade-up-right">
              Data Analysis with BI Tools & ERPNext
            </h2>
            <p
              className="w-[100%]  text-justify tracking-wider"
              data-aos="fade-up-right"
            >
              DATA is NEW OIL. And, Having real-time insights from each decision
              point, improves productivity and empowers informed
              decision-making. We have been helping MSMEs to connect their
              ERPNext systems with powerful tools like PowerBI, Tableau, and
              Metabase.
            </p>
            <Link to="/Third-Party Integrations">
              <button
                data-aos="fade-up-right"
                className="mt-4  bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* <LatestPost /> */}
      <Footer1 />
      <ChatBot />
    </>
  );
}

export default ERPNext;
