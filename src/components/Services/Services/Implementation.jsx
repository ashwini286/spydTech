import React from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Footer from '../../Home/Footer/Footer';

const Implementation = () => {
  return (
    <>
      <Navbarupp />
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
      <Footer />
    </>
  );
};

export default Implementation;
