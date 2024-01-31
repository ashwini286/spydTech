import React from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer1 from '../UniqueTeam/Footer1';
import IMG from '../../assets/Blue.webp';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";
import { Bs4Circle } from "react-icons/bs";
import { Bs5Circle } from "react-icons/bs";
import { Bs6Circle } from "react-icons/bs";

const Implementation = () => {
  return (
    <>
     <div>
      <Navbarupp />
      </div>   
       <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-8">Implementation Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card>
            <CardHeader color="blue" contentPosition="top">
              <img
                src="https://placekitten.com/400/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">Cloud Implementation</h2>
              <p className="text-gray-600">
                Seamlessly migrate your business operations to the cloud for
                improved scalability, security, and accessibility.
              </p>
            </CardBody>
          </Card>

          {/* Card 2 */}
          <Card>
            <CardHeader color="green" contentPosition="top">
              <img
                src="https://placekitten.com/401/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">ERP Implementation</h2>
              <p className="text-gray-600">
                Implement state-of-the-art Enterprise Resource Planning systems
                tailored to your business needs for improved efficiency.
              </p>
            </CardBody>
          </Card>

          {/* Card 3 */}
          <Card>
            <CardHeader color="red" contentPosition="top">
              <img
                src="https://placekitten.com/402/200"
                alt="Card Image"
                className="w-full h-32 object-cover"
              />
            </CardHeader>
            <CardBody>
              <h2 className="text-xl font-semibold mb-2">Software Integration</h2>
              <p className="text-gray-600">
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
