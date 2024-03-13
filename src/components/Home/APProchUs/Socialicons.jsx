import React from "react";
import "./social.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Socialicons() {
  const linkedinUrl = "https://www.linkedin.com/company/spy-d-technology/";
  const youTubeUrl = "https://www.youtube.com/channel/UC19J8SZKvvj10AEsI1VeIGw";
  const faceBookUrl =
    "https://www.facebook.com/people/SpY-D-Technology/100093011922221/";
  const instagramUrl =
    "https://www.instagram.com/spy_d_technology/?utm_source=qr&igsh=MWdtcXk5ODNsMG0zbg%3D%3D";
  return (
    <div className="">
      <ul class="wrapper">
        <li class="icon facebook">
          <a href={faceBookUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Facebook</span>
            <FaFacebook>
              <i class="fab fa-facebook-f"></i>
            </FaFacebook>
          </a>
        </li>
        <li class="icon twitter">
          <a href="" target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Twitter</span>
            <FaTwitter>
              <i class="fab fa-x-twitter"></i>
            </FaTwitter>
          </a>
        </li>
        <li class="icon instagram">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Linkedin</span>
            <FaLinkedin>
              <i class="fab fa-instagram"></i>
            </FaLinkedin>
          </a>
        </li>
        <li class="icon github">
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Instagram</span>
            <FaInstagram>
              <i class="fab fa-github"></i>
            </FaInstagram>
          </a>
        </li>
        <li class="icon youtube">
          <a href={youTubeUrl} target="_blank" rel="noopener noreferrer">
            <span class="tooltip">Youtube</span>
            <FaYoutube>
              <i class="fab fa-youtube"></i>
            </FaYoutube>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socialicons;
