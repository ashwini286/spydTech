import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Social = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="   px-2 py-2 rounded-lg flex items-center cursor-pointer hover-container transition-transform duration-500 transform hover:-translate-x-2 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="">
        {/* {icon === 'facebook' && <FaFacebook className="w-6 h-6 hover:red text-blue-900" />} */}
        {icon === 'facebook' && <FaFacebook className="w-6 h-6  text-blue-900 " />}
        {icon === 'twitter' && <FaTwitter className="w-6 h-6 text-blue-900" />}
        {icon === 'instagram' && <FaInstagram className="w-6 h-6 text-pink-900" />}
        {icon === 'linkedin' && <FaLinkedin className="w-6 h-6 text-blue-900" />}
        {icon === 'youtube' && <FaYoutube className="w-6 h-6 text-red-900" />}
      </div>
      {isHovered && (
        <div className="transition-opacity duration-300 delay-5000 border-2  rounded-lg">
          <p className="text-blue-800 font-semibold bg-blue-400 rounded ">{text}</p>

        </div>
        
      )}
    </div>
  );
};

const SocialIcon = () => {
  return (
      <div className=" flex items-center justify-center gap-3 mb-3">
      <div className='bg-white hover:text-red-500 rounded-t-full rounded-b-full rounded-r-full rounded-l-full'>
      <Social icon="facebook" text="Facebook" className="text-red-400" />

      </div>

      <div className='bg-white rounded-t-full rounded-b-full rounded-r-full rounded-l-full'>

      <Social icon="twitter" text="Twitter" />
      </div>
      <div className='bg-white rounded-t-full rounded-b-full rounded-r-full rounded-l-full'>

      <Social icon="instagram" text="Instagram" />
      </div>
      <div className='bg-white rounded-t-full rounded-b-full rounded-r-full rounded-l-full'>

      <Social icon="linkedin" text="LinkedIn" />
      </div>
      <div className='bg-white rounded-t-full rounded-b-full rounded-r-full rounded-l-full'>

      <Social icon="youtube" text="YouTube" />
      </div>
    
    </div>
  );
};

export default SocialIcon;
