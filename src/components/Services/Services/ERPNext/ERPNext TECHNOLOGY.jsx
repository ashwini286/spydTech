import React from 'react';
import IMG from '../../../assets/ERPNXT1.jpg';
import IMG1 from '../../../assets/ERPNXT2.jpg';
import IMG2 from '../../../assets/ERPNXT3.jpg';
import IMG3 from '../../../assets/ERPNXT4.jpg';
import IMG4 from '../../../assets/ERPNXT5.jpg';
import IMG5 from '../../../assets/ERPNXT6.jpg';
import IMG6 from '../../../assets/ERPNXT7.jpg';




function ERPNext () {
  return (
    <>
       
    
       <h2 className="text-2xl font-bold mb-4">Our Services</h2>
   {/* Add the card section */}
   <div className="mt-8 p-1 bg-white rounded-lg shadow-md overflow-x-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 1</h3>
            <p>Description of Service 1.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG1}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 2</h3>
            <p>Description of Service 2.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG2}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 3</h3>
            <p>Description of Service 3.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG3}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 4</h3>
            <p>Description of Service 4.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG4}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 5</h3>
            <p>Description of Service 5.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG5}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 6</h3>
            <p>Description of Service 6.</p>
          </div>

          {/* Card 7 */}
          <div className="bg-gray-100 p-6 rounded-lg">
          <img
          src={IMG6}
          className="object-cover"
          alt="Background Image"
        />
            <h3 className="text-xl font-bold mb-2">Service 7</h3>
            <p>Description of Service 7.</p>
          </div>
        </div>
      </div>

      
      
   
    </>
  )
}

export default ERPNext