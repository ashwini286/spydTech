import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Footer1 from "../UniqueTeam/Footer1";
import IMG from "../../assets/Blue.webp";
import UniqueTeam14 from "../UniqueTeam/UniqueTeam14";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { Bs5Circle } from "react-icons/bs";
import { Bs6Circle } from "react-icons/bs";
import { Bs7Circle } from "react-icons/bs";
import { Bs8Circle } from "react-icons/bs";

const Implementation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbarupp />
      {/* <div class="relative h-screen w-full rounded-b-2xl ">
    <img src={IMG} alt="Background Image" class="absolute inset-0 w-full h-[80vh] rounded-b-2xl  object-cover filter blur-sm" />
    <div class="absolute inset-0 h-[80vh] bg-black bg-opacity-50 rounded-b-2xl "></div>
    <div class="absolute inset-0  flex flex-col md:flex-row items-center justify-center ml-10">
        <h1 class="text-4xl text-white font-bold w-full p-10">ERPNext Implementation</h1>
        <p class="text-xl text-white mt-4 -ml-10 p-10">Building Cost-Effective Digital Business Capabilities around the ERPNext, 
        focusing on the right balance of Digitization, Flexibility, and Process mapping.</p>
    </div>
</div> */}
      <div className="h-[550px] relative">
        <img
          src={IMG}
          className=" w-full object-cover h-[550px] rounded-b-2xl "
          alt="Background 2"
          style={{filter:"brightness(90%)"}}
        />
        <div  class="absolute inset-0 m-auto flex flex-col items-center justify-center w-[90%] md:w-[60%]">
          <div class="text-4xl text-white font-bold w-full text-center" data-aos="fade-up-right">
          ERPNext Implementation
          </div>
          <div class="text-xl text-white text-center my-4" data-aos="fade-up-right">
          Building Cost-Effective Digital Business Capabilities around the ERPNext, 
        focusing on the right balance of Digitization, Flexibility, and Process mapping.
          </div>
        </div>
      </div>
      <UniqueTeam14 />
      {/* 1st line */}
      <div className="flex flex-col md:flex-row">
        <div>
          <VerticalTimeline layout="1-column-left" lineColor="#074f8b">
            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs1Circle />}
            >
              <div className="flex flex-col-reverse">
                <p className=" text-black">
                  Our Implementation team starts business process mapping with
                  ERPNext, and during this stage, if required they consult
                  involved stakeholders to reengineer the process to maximize
                  the results with the ERPNext.
                </p>
                <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                  {" "}
                  Process Mapping with ERPNext
                </h3>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs2Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                {" "}
                Configuration of ERPNext
              </h3>
              <p className=" text-black">
                We configure ERPNext, Company, and basic setting as per the
                company and its business goals.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs3Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                {" "}
                Implementation of Process into ERPNext
              </h3>
              <p>
                Our Team start implementing the derived business processes into
                the ERPNext module by module. During this process, we actively
                check stakeholders’ expectations from that specific business
                process.
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs4Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                {" "}
                Customization of ERPNext
              </h3>
              <p>
                Once basic implementation is done, We start the customization of
                ERPNext to achieve the expected results. And, customization is
                key as it differs from business domain to domain.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div>
          <VerticalTimeline layout="1-column-left" lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs5Circle />}
            >
              <div className="flex flex-col-reverse">
                <p className=" text-black">
                  Once Implementation and Customization are done, We start
                  building the required reports and intuitive dashboard to allow
                  them to make business decisions data-oriented.{" "}
                </p>
                <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                  Reports and Intuitive Dashboards
                </h3>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work bg-cover"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs6Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                Live Setup and Data Migration
              </h3>
              <p className=" text-black">
                Our Consultants will be there to support, help, guide, and
                assist stakeholders’ intake decisions during the implementation
                stage and also consult them if process change is required.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs7Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                Testing
              </h3>
              <p>
                Our consultant designs training materials and makes sure that
                stakeholders get full knowledge of the ERPNext and the
                implementation that is being implemented.{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              iconStyle={{
                border: "1px solid gray",
                color: "white",
                backgroundColor: "#074f8b",
              }}
              icon={<Bs8Circle />}
            >
              <h3 className="vertical-timeline-element-title justify-end items-end font-semibold">
                Go Live
              </h3>
              <p>
                Our consultant designs training materials and makes sure that
                stakeholders get full knowledge of the ERPNext and the
                implementation that is being implemented.{" "}
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-8" data-aos="fade-up-right">Implementation Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card>
            <CardHeader color="blue" contentPosition="top" data-aos="fade-up-right">
              <img
                src="https://veritis.com/wp-content/uploads/2020/11/portfolio-of-cloud-implementation-services-1.jpg"
                alt="Card Image"
                className="w-full h-52 object-cover"
              />
            </CardHeader>
            <CardBody data-aos="fade-up-right">
              <h2 className="text-xl font-semibold mb-2">
                Cloud Implementation
              </h2>
              <p className=" text-black">
                Seamlessly migrate your business operations to the cloud for
                improved scalability, security, and accessibility.
              </p>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader color="green" contentPosition="top" data-aos="fade-up-right">
              <img
                src="https://www.acumatica.com/media/2022/11/erp_implementaion_process_v1.webp"
                alt="Card Image"
                className="w-full h-52 object-cover"
              />
            </CardHeader>
            <CardBody data-aos="fade-up-right">
              <h2 className="text-xl font-semibold mb-2">ERP Implementation</h2>
              <p className=" text-black">
                Implement state-of-the-art Enterprise Resource Planning systems
                tailored to your business needs for improved efficiency.
              </p>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader color="red" contentPosition="top" data-aos="fade-up-right">
              <img
                src="https://www.intellectsoft.net/blog/wp-content/uploads/Enterprise-System-Integration-min.jpg"
                alt="Card Image"
                className="w-full h-52 object-cover"
              />
            </CardHeader>
            <CardBody data-aos="fade-up-right">
              <h2 className="text-xl font-semibold mb-2">
                Software Integration
              </h2>
              <p className=" text-black">
                Streamline your business processes by integrating various
                software solutions to work seamlessly together.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Implementation;
