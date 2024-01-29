import React from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';
import IMG from '../../assets/Blue.webp';
import { Typography, Button } from "@material-tailwind/react";

const Consulting = () => {
  return (
    <>
      <Navbarupp />
      <div className="max-w-screen mx-auto min-h-screen h-screen relative">
      <img
  src={IMG}
  className="w-full h-3/4 object-cover rounded-b-3xl rounded-b-16"
  alt="Background Image"
/>



  <div className="absolute inset-0 grid h-40 w-full items-end pt-10">
    <div className="mt-32 ml-10 pt-20 ">
    <Typography
  className="font-calibri text-white text-4xl"
>
  ERPNext Consultancy
</Typography>



      </div>
      <div className="absolute inset-0 grid h-40 w-full items-end pt-10 ml-10">
      <div className="mt-20 ml-40 pt-20 ">
      <Typography
        
        color="white"
        className="ml-96 font-sans text-start flex grid w-1/2 mb-20 font-Constantia"
      >
      Building Cost-Effective Digital Business Capabilities around the ERPNext,
       focusing on the right balance of Digitization, Flexibility, and Process mapping.
      </Typography>
      </div>
    </div>
  </div>
</div>

      
      <div className="container mx-auto mt-10">
        

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
              <h2 className="text-xl font-semibold mb-2">Strategy Consulting</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas gravida velit felis.
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
              <h2 className="text-xl font-semibold mb-2">Financial Consulting</h2>
              <p className="text-gray-600">
                Vestibulum non posuere turpis. Curabitur euismod justo sit amet
                risus congue, eget tincidunt nulla efficitur.
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
              <h2 className="text-xl font-semibold mb-2">Technology Consulting</h2>
              <p className="text-gray-600">
                Fusce in sapien sit amet justo cursus ultricies nec at elit.
                Phasellus congue rhoncus ipsum.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consulting;
