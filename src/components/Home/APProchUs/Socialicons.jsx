import React from 'react'
import "./social.css"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Socialicons() {
  return (
    <div className='p-4 ml-8'>

<ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <FaFacebook><i class="fab fa-facebook-f"></i></FaFacebook>
  </li>
  <li class="icon twitter">
    <span class="tooltip">Twitter</span>
    <FaTwitter><i class="fab fa-x-twitter"></i></FaTwitter>
  </li>
  <li class="icon instagram">
    <span class="tooltip">Linkedin</span>
    <FaLinkedin><i class="fab fa-instagram"></i></FaLinkedin>
  </li>
  <li class="icon github">
    <span class="tooltip">Instagram</span>
    <FaInstagram><i class="fab fa-github"></i></FaInstagram>
  </li>
  <li class="icon youtube">
    <span class="tooltip">Youtube</span>
    <FaYoutube><i class="fab fa-youtube"></i></FaYoutube>
  </li>
</ul>
    </div>
  )
}

export default Socialicons