import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MediaProcess() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    AOS.init();
});
  const tabs = [
    {
      title: 'Discovery',
      icon: 'M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z',
      ImgURL:'https://media.licdn.com/dms/image/D5612AQH58A8rDfp-yg/article-cover_image-shrink_720_1280/0/1673545861667?e=2147483647&v=beta&t=GoI5jtR3Ymsd_jreyw-SPHI253DyTTgepzVDcFTrIz8',
      content:'The discovery phase is usually comprised of the first meeting with the client along with understanding the client business’ objectives and end goals.We are here to listen to your objectives & goals and consult you along the way.' 
     },
    {
      title: 'Strategy Development',
      icon: 'M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z',
      ImgURL:'https://media.licdn.com/dms/image/D5612AQFNww2qieu33w/article-cover_image-shrink_720_1280/0/1685543747509?e=2147483647&v=beta&t=RGveo5_ClCR95iXHUrAIejJfeiR3gtlLF1d7Gd_hszo',
      content: 'The first deliverable will be the creation of the client’s digital marketing strategy. The digital marketing strategy document will be the backbone of your company marketing initiatives. It will outline in detail what will happen and what will be delivered in each phase/stage of the project.'
     },
    {
      title: ' Monthly Content Creation',
      icon: 'M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z',
      ImgURL:'https://img.freepik.com/free-vector/happy-seo-planning-campaign-social-media-isolated-flat-illustration_74855-10793.jpg?size=626&ext=jpg&ga=GA1.1.1319243779.1708905600&semt=ais',
      content: 'This includes the design of Facebook/Instagram ads templates that will be used in sponsored campaigns along with the creation of written content for monthly social media posts. The client is sent a monthly social media calendar plan, including all agreed posts, which he/she will review and approve accordingly.'
     },
    {
      title: 'Account & Ads Management',
      icon: 'M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z',
      ImgURL:'https://www.socialchamp.io/wp-content/uploads/2021/02/Feature-Banner_April-May2021_1125x600_12.jpg',
      content:'Your dedicated account manager will be monitoring the campaigns in order to make sure that everything is proceeding as planned. The campaign management includes monitoring & optimising the agreed campaigns. Moreover, the buyer personas’ characteristics & demographics will be utilised and A/B tested, when running the Facebook/Instagram campaigns'
     },
    {
        title: 'Performance Reporting',
        icon: 'M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z',
        ImgURL:'https://www.smartdatacollective.com/wp-content/uploads/2019/09/data-driven-social-media-marketing.jpg',
        content: 'A performance report will be set up and sent to the client at the end of every month. The structure of the report will be set up by DomainStar. This will include monthly campaign metrics such as Reach, Impressions, Traffic, Leads & Spend.'
     }
  ];

  return (
    <>
    <div className="area ">
          <ul className="circles">
            {Array.from({ length: 10 }).map((_, i) => (
              <li key={i}></li>
            ))}

          </ul>
        </div>
        <style>
            {`
            .__col {
                writing-mode: vertical-lr;
                transform: rotate(180deg)
              }
              /*Start Animations*/
              @-webkit-keyframes animatetop {
                  from {
                      top: -300px;
                      opacity: 0;
                  }
                  to {
                      top: 0;
                      opacity: 1;
                  }
              }
              @keyframes animatetop {
                  from {
                      top: -300px;
                      opacity: 0;
                  }
                  to {
                      top: 0;
                      opacity: 1;
                  }
              }
              @-webkit-keyframes zoomIn {
                  0% {
                      opacity: 0;
                      -webkit-transform: scale3d(0.3, 0.3, 0.3);
                      transform: scale3d(0.3, 0.3, 0.3);
                  }
                  50% {
                      opacity: 1;
                  }
              }
              @keyframes zoomIn {
                  0% {
                      opacity: 0;
                      -webkit-transform: scale3d(0.3, 0.3, 0.3);
                      transform: scale3d(0.3, 0.3, 0.3);
                  }
                  50% {
                      opacity: 1;
                  }
              }
              /*End Animations*/
              /*
              -- Start BackGround Animation 
              */
              .area {
                  background: #4e54c8;
                  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
                  width: 100%;
                  height: 100vh;
                  position: absolute;
                  z-index: -1;
              }
              
              .circles {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 96%;
                  overflow: hidden;
              }
              
              .circles li {
                  position: absolute;
                  display: block;
                  list-style: none;
                  width: 20px;
                  height: 20px;
                  background: rgba(255, 255, 255, 0.2);
                  animation: animate 25s linear infinite;
                  bottom: -150px;
              }
              
              .circles li:nth-child(1) {
                  left: 25%;
                  width: 80px;
                  height: 80px;
                  animation-delay: 0s;
              }
              
              .circles li:nth-child(2) {
                  left: 10%;
                  width: 20px;
                  height: 20px;
                  animation-delay: 2s;
                  animation-duration: 12s;
              }
              
              .circles li:nth-child(3) {
                  left: 70%;
                  width: 20px;
                  height: 20px;
                  animation-delay: 4s;
              }
              
              .circles li:nth-child(4) {
                  left: 40%;
                  width: 60px;
                  height: 60px;
                  animation-delay: 0s;
                  animation-duration: 18s;
              }
              
              .circles li:nth-child(5) {
                  left: 65%;
                  width: 20px;
                  height: 20px;
                  animation-delay: 0s;
              }
              
              .circles li:nth-child(6) {
                  left: 75%;
                  width: 110px;
                  height: 110px;
                  animation-delay: 3s;
              }
              
              .circles li:nth-child(7) {
                  left: 35%;
                  width: 150px;
                  height: 150px;
                  animation-delay: 7s;
              }
              
              .circles li:nth-child(8) {
                  left: 50%;
                  width: 25px;
                  height: 25px;
                  animation-delay: 15s;
                  animation-duration: 45s;
              }
              
              .circles li:nth-child(9) {
                  left: 20%;
                  width: 15px;
                  height: 15px;
                  animation-delay: 2s;
                  animation-duration: 35s;
              }
              
              .circles li:nth-child(10) {
                  left: 85%;
                  width: 150px;
                  height: 150px;
                  animation-delay: 0s;
                  animation-duration: 11s;
              }
              
              @keyframes animate {
                  0% {
                      transform: translateY(0) rotate(0deg);
                      opacity: 1;
                      border-radius: 0;
                  }
              
                  100% {
                      transform: translateY(-1000px) rotate(720deg);
                      opacity: 0;
                      border-radius: 50%;
                  }
              }
            `}
        </style>
      <div className=" ml-20">
        <main className="relative max-w-5xl mx-auto mt-10 mb-20  py-8 px-10 rounded-md shadow-md hover:text-white">
          <div>
            <menu className="absolute top-10 -left-16  w-16 rounded-l-md">
              <ul className=''>
                {tabs.map((tab, index) => (
                  <li key={index}>
                    <button
                      className={`text-gray-900 hover:text-white block w-full p-3 ${
                        selected === index ? 'text-white' : ''
                      }`}
                      onClick={() => setSelected(index)}
                    >
                      <span className="block w-8 mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            d={tab.icon}
                          />
                        </svg>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </menu>
            <article>
  <h1 className="text-2xl font-bold" data-aos="fade-right">{tabs[selected].title}</h1>
  <hr className="my-4" />
  <div className='flex flex-col md:flex-row'> {/* Added 'items-center' for vertical alignment */}
    <img src={tabs[selected].ImgURL} alt={tabs[selected].title} className=" w-1/2 rounded-lg" data-aos="fade-left" /> {/* Added image */}
    <p className="mb-4 ml-2 leading-relaxed p-2 text-lg " data-aos="fade-left">{tabs[selected].content}</p>
  </div>
</article>

          </div>
        </main>
        {/* Background Animation */}
        
      </div>
    </>
  );
}

export default MediaProcess;
