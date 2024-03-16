import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ERPNextSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

 
  return (
    <>
      <div className="wpb_wrapper grid">
        <h2 className="text-left text-4xl font-bold text-blue-800 animate__animated animate__fadeInUp">
          Implement most affordable ERP on the planet <b> ERPNext </b>
        </h2>
        <div className="text-justify animate__animated animate__fadeInUp">
          <p>
            ERPNext provides a complete package that advances Procurement, Sales, Inventory, HR, and Accounting with real transparency and decision-making dashboards and charts.
          </p>
        </div>

        {/* Key Icon Boxes */}
        <div className="flex justify-between space-x-4 mt-8 mb-12">
          <div className="key-icon-box w-1/3 bg-transparent">
            <div className="tt-iconbox-customimg">
              <img src="https://akhilaminc.com/wp-content/uploads/2022/07/Star-1.svg" className="w-full h-auto" alt="Star 1" />
            </div>
            <h4 className="text-blue-800">Simplicity</h4>
            <p>Simple, Neat, Elegant and Easy to use interface helps users navigate easily and also helps them adopt the system quickly with less training time.</p>
          </div>
          <div className="key-icon-box w-1/3 bg-transparent">
            <div className="tt-iconbox-customimg">
              <img src="https://akhilaminc.com/wp-content/uploads/2022/07/Star-1.svg" className="w-full h-auto" alt="Star 1" />
            </div>
            <h4 className="text-blue-800">Powerful</h4>
            <p>ERPNext runs smoothly even while performing tasks parallelly by multiple users, and also it handles a large number of requests smoothly.</p>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <div className="kd-photo-group group-layout-right-left large-shadow enable-parallax">
              {/* Your image code remains unchanged */}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ERPNextSection;
