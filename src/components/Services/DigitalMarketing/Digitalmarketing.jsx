import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import { Link } from 'react-router-dom';
import IMG from "../../assets/Digital marketing/main.jpg";
import IMG2 from "../../assets/Digital marketing/Digital marketing main.png";
import IMG3 from "../../assets/Digital marketing/SEO.png";
import IMG4 from "../../assets/Digital marketing/ppc.jpg";
import IMG5 from "../../assets/Digital marketing/SMM1.png";
import IMG6 from "../../assets/Digital marketing/contentwriting 2.jpg";
import AnimatedFooter from '../UniqueTeam/AnimatedFooter';

function Digitalmarketing() {
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbarupp />
      <div className='relative'>
        <img
          src='https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg'
          data-aos="fade-in"
          className="inset-0 md:h-[580px] w-full lg:w-full xl:w-full sm:w-full "
          alt="Background 1"
          style={{ filter: "brightness(80%)" }}
        />
        <div className="absolute inset-0 md:h-[580px] w-full lg:w-full lg:max-w-none sm:w-full bg-black bg-opacity-70 rounded-lg"></div>
        <div className='absolute top-1/2 left-[35%] transform -translate-x-1/2 -translate-y-1/2 md:left-[35%] md:w-[50%] lg:w-[50%] text-start text-white font-bold px-5'>
          <h1 className='text-2xl md:text-4xl lg:text-4xl '  data-aos="fade-up-right">The Future of Surveillance with "SpY D Technology"</h1>
          
         
          </div>
        </div>

        <p className='text-lg  py-10 text-center p-10 font-semibold'  data-aos="fade-up-right">"Introducing SpY D Technology, the cutting-edge solution revolutionizing surveillance in the digital age. 

Say goodbye to outdated methods and hello to unprecedented security and intelligence with our state-of-the-art technology".</p>

     
      <div className="relative overflow-hidden  pt-16 pb-32 space-y-24">
        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6" >
                  <h2 className="text-3xl font-bold tracking-tight " data-aos="fade-up-right">
                    What Is SEO?
                  </h2>
                  <p className="mt-4 text-lg text-black"  data-aos="fade-up-right">
                    SEO means Search Engine Optimization and is the process used to optimize a website's technical configuration,
                    content relevance and link popularity so its pages can become easily findable, more relevant and popular
                    towards user search queries, and as a consequence, search engines rank them better.
                  </p>
                  <div className="mt-6"  data-aos="fade-up-right">
                    <Link to="/Seo Services" className="bg-[#8543ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-purple-600 mt-4 hover:bg-[#3a0ca3] ">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0" >
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"  data-aos="fade-up-right">
                <img loading="lazy" width="647" height="486"
                  className="w-1/2 rounded-xl shadow-2xl ring-1  ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-1/2"
                  style={{ color: "transparent" }} src={IMG3} alt="NLP Image" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6" >
                  <h2 className="text-3xl font-bold tracking-tight "  data-aos="fade-up-right">
                    Pay Per Click (PPC) Marketing
                  </h2>
                  <p className="mt-4 text-lg "  data-aos="fade-up-right">
                    Pay per click marketing is a paid search model used to build brand awareness,
                    promote brand offerings and gain immediate traction from specific audience segments.
                    With PPC, advertisers only pay each time a user clicks on the PPC ads -- hence the name pay-per-click.</p>
                  <p className='text-lg pb-5 text-black'>People usually think of Google PPC when hearing or talking about what is pay per click.
                    But pay-per-click goes beyond the Google search engine results pages (SERPs) and the Google Display Network.
                    Social media sites, such as YouTube, Facebook, Pinterest and LinkedIn, also use the pay per click model.
                  </p>
                  <div className="mt-6"  data-aos="fade-up-right">
                    <Link to="/PPC Management Services" className="bg-[#8543ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-purple-600 mt-4 hover:bg-[#3a0ca3] ">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="ml-5 pr-6 md:nl-5 lg:relative lg:m-0 lg:h-full lg:px-0"  data-aos="fade-up-right">
                <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                  className="w-3/1 rounded-xl shadow-xl ring-1  ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-1/2"
                  style={{ color: "transparent" }}
                  src={IMG4}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
              <div>
                <div className="mt-6" >
                  <h2 className="text-3xl font-bold tracking-tight t"  data-aos="fade-up-right">
                    What Is Social Media Marketing (SMM)?
                  </h2>
                  <p className="mt-4 text-lg "  data-aos="fade-up-right">
                    Social media marketing (also known as digital marketing and e-marketing)
                    is the use of social media—the platforms on which users build social networks
                    and share information—to build a company's brand, increase sales,
                    and drive website traffic. In addition to providing companies with
                    a way to engage with existing customers and reach new ones,
                    SMM has purpose-built data analytics that allows marketers
                    to track the success of their efforts and identify even more ways to engage.
                  </p>
                  <div className="mt-6"  data-aos="fade-up-right">
                    <Link to="/SMM & Content Writing" className="bg-[#8543ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-purple-600 mt-4 hover:bg-[#3a0ca3] ">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0" >
              <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"  data-aos="fade-up-right">
                <img loading="lazy" width="646" height="485"
                  className="w-1/2 rounded-xl shadow-2xl ring-1  ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-3/1"
                  style={{ color: "transparent" }}
                  src={IMG5} alt="NLG Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6" >
                <h2 className="text-3xl font-bold tracking-tight "  data-aos="fade-up-right">
                  Why Content Writing is Important in Digital Marketing?
                </h2>
                <p className="mt-4 text-lg "  data-aos="fade-up-right">
                  As the world has witnessed a great shift of customer’s preference from a conventional advertising world to the digital sphere,
                  the growing use of internet, technology & digital media has raised the dependency of people on the online market.
                  Due to this, the brands are rooting their base in various digital platforms, since marketing is
                  one of the most essential aspect of a business plan.
                </p>
                <div className="mt-6"  data-aos="fade-up-right">
                  <Link to="/PPC Management Services" className="bg-[#8543ee] text-white py-2 px-4 rounded-md  shadow-lg shadow-purple-600 mt-4 hover:bg-[#3a0ca3] ">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="ml-5 pr-6 md:ml-5 lg:relative lg:m-0 lg:h-full lg:px-0"  data-aos="fade-up-right">
              <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                className="w-3/1 rounded-xl shadow-xl ring-1  ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-3/1"
                style={{ color: "transparent" }}
                src={IMG6}
              />
            </div>
          </div>
        </div>
        <div className=''>
          <div  data-aos="fade-up-right" class="p-10 flex flex-1 w-full flex-col items-center justify-center text-center  bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
            <a href="" class="border border-white-700 dark:border-gray-900 rounded-lg py-2 px-4 text-white-400 dark:text-gray-900 text-sm mb-5 md:mb-10 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-900">
              Get Started Today
            </a>
            <h1  data-aos="fade-up-right" class="mx-auto max-w-4xl font-display text-3xl md:text-5xl font-bold tracking-normal text-white-300 dark:text-gray-300 sm:text-5xl">
              "SpY D Technology" Leads the Way
              <span class="relative whitespace-nowrap text-white-600 dark:text-gray-300"></span>
              <span class="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
                <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span  data-aos="fade-up-right" class="relative">in Digital Marketing</span>
              </span>
            </h1>
            <h2  data-aos="fade-up-right" class="mx-auto mt-8 max-w-xl text-base sm:text-lg text-white-500 dark:text-gray-300 leading-7 md:leading-9">
              Experience the future of surveillance with SpY D. Contact us to learn more about our products and services, and discover how SpY D can transform your security infrastructure for the better. Don't settle for outdated technology – embrace the future with SpY D.
            </h2>
            <a  data-aos="fade-up-right"  class="bg-orange-600 dark:bg-gray-800 rounded-xl text-white dark:text-gray-300 font-medium px-4 py-3 mt-8 md:mt-12 hover:bg-orange-500 dark:hover:bg-gray-600 transition" href="">Get started</a>
          </div>
        </div>
      </div>
      <Approch />
    </>
  )
}

export default Digitalmarketing;
