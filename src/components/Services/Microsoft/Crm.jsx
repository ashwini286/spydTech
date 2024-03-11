import React from 'react';
import IMG1 from "../../assets/Microsoft/CRM (21).jpg";

function Crm() {
  return (
    <>
      <div className="container max-w-sm p-6 mx-auto space-y-6 md:max-w-2xl lg:px-8 lg:max-w-7xl overflow-hidden">
        <div>
         
          <p className="max-w-5xl mx-auto mt-4 md:text-2xl text-lg text-center font-bold pb-4">Welcome to the future of customer relationship management with Microsoft Dynamics CRM, powered by "SpY D Technology".
         Our innovative solutions are designed to empower businesses of all sizes to build stronger customer connections, streamline processes, and drive growth. Explore how Microsoft Dynamics CRM can transform your business:
   </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium leading-6">Creating, Engaging, Building, Nurturing Customer Relations is at the heart of any business. We take care of the entire gamut of building robust, scalable CRM platforms to help our customers attract, engage, build and retain customers.</h4>
            </div>
            <div>
              <h4 className="text-lg font-medium leading-6">Our team of high-powered technologists possesses deep expertise in multiple state-of-the-art technologies such as Salesforce, Microsoft Technologies to build and deploy CRM platforms that offer a plethora of services such as sales, marketing, customer service, social engagement, and analytics.</h4>
            </div>
            <div>
              <h4 className="text-lg font-medium leading-6">Our services in CRM are not just confined to building and deployment but we also provide training, manual documentation, and maintenance services.</h4>
            </div>
            <div>
              <h4 className="text-lg font-medium leading-6">The best part of Aspirant Soft Solutions is that we go beyond building and deploying Customer Relationship Management applications. We excel in business integration services and integrate the new CRM applications with the existing applications seamlessly for smooth operations.</h4>
            </div>
            <div>
              <h4 className="text-lg font-medium leading-6">We use, implement and leverage state-of-the-art technologies that are in consonance with the existing technologies to ensure the integration process is smooth for efficient operations.</h4>
            </div>
          </div>
          <div aria-hidden="true" className="lg:flex lg:items-center">
            <img src={IMG1} alt="Microsoft CRM" className="w-full rounded-lg shadow-lg lg:w-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Crm;
