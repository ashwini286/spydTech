import React from 'react'
import "./footer.css"

function Footer3() {
  return (
    <div>
      <footer class="bg-[#60a5fa] text-white py-8 relative overflow-hidden pt-[20%]">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-4">
            {/* <!-- Your footer content goes here --> */}
            <p class="footer-text">© 2024 Your Company</p>
          </div>
          <div class="flex  space-x-4">
            {/* <!-- Social media icons or other footer links --> */}
            <a href="#" class="icon-link">
              <svg class="w-full h-32" fill="#22d3ee" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Your social media icon SVG --> */}
              </svg>
            </a>
            <a href="#" class="icon-link">
              <svg class="w-full h-32" fill="#22d3ee" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Your social media icon SVG --> */}
              </svg>
            </a>
            {/* <!-- Add more social media icons or footer links as needed --> */}
          </div>
        </div>
        {/* <!-- Wave animation --> */}
        <div class="absolute left-0 right-[100%] w-full">
          <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(0,0,0,0.2)" fill-opacity="4" d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,197.3C672,181,768,139,864,144C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div class="absolute right-10 left-[100%] w-full">
          <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#22d3ee" fill-opacity="4" d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,197.3C672,181,768,139,864,144C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div class="absolute left-20 right-[100%] w-full">
          <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#22d3ee" fill-opacity="4" d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,197.3C672,181,768,139,864,144C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </footer>


    </div>
  )
}

export default Footer3