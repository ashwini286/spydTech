import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const SocialIcon = () => {
    const linkedinUrl = "https://www.linkedin.com/company/spy-d-technology/";
    const youTubeUrl = "https://www.youtube.com/channel/UC19J8SZKvvj10AEsI1VeIGw";
    const faceBookUrl =
      "https://www.facebook.com/people/SpY-D-Technology/100093011922221/";
    const instagramUrl =
      "https://www.instagram.com/spy_d_technology/?utm_source=qr&igsh=MWdtcXk5ODNsMG0zbg%3D%3D";

  return (
    <div className="flex flex-row justify-center items-center  pt-8">
      <div>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <button className="group w-12 hover:w-28 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
          <FaLinkedin className="w-8 h-8 shrink-0 fill-neutral-50" />
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            LinkedIn
          </span>
        </button>
        </a>
      </div>
      <div>
      <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
        <button className="group w-12 hover:w-28 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
          <FaYoutube className="w-8 h-8 shrink-0 fill-neutral-50" />
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Youtube
          </span>
        </button>
        </a>
      </div>
      <div>
      <a href={faceBookUrl} target="_blank" rel="noopener noreferrer">
        <button className="group w-12 md:hover:w-32 hover:w-28 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
          <FaFacebook className="w-8 h-8 shrink-0 fill-neutral-50" />
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Facebook
          </span>
        </button>
        </a>
      </div>
      <div>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <button className="group w-12 hover:w-28 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
          <FaInstagram className="w-8 h-8 shrink-0 fill-neutral-50" />
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Instagram
          </span>
        </button>
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
