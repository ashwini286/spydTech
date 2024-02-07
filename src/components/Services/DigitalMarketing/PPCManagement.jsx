import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import IMG from "../../assets/PPC-2.jpg"
import IMG1 from "../../assets/Digital-marketing-PPC1.jpg"
function PPCManagement() {
  return (
    <>
    <Navbarupp />
    <div>
      <img 
      src={IMG}
      className='w-[100%] h-[35rem] pb-10'
      />
    </div>
    <h1 className='text-2xl text-center '>Digital Marketing and PPC Services and Management Strategy</h1>
    <p className='text-left tracking-wider p-12 text-gray-500'>Pay per Click ( PPC ) is advertising service offered by search engines such as Google, Bing, 
        Yahoo and social media platforms such as Facebook, Twitter, LinkedIn, and Instagram. 
        Google’s Ad Words is the most popular ad campaign targeted using the relevant keywords, 
        and geography. As this technique leverages demography, geography, and users interests, 
        it offers immediate and instant visibility wherever the ad is placed either 
        on search engines or on the chosen social media platform. The analytics are 
        extensively used to track, analyse the report and make informed decisions. 
        We aspirant soft solutions provide best PPC services in Hyderabad.</p>

        <div className='bg-[#65a30d]  p-10 w-[100%]  flex text-white '>
          <img
          src={IMG1}
          className='h-[80%] w-[100%]'
          />
          <div className='pl-10 space-y-2'>
            <p className=' text-2xl  '>MORE ABOUT</p>
            <h1>PPC Services Strategy</h1>
            <p>Though we’re a PPC agency based in Hyderabad, we also provide PPC services in Bengaluru, India and across the globe.</p>
            <h1 className=''>Strategic keyword recommendations</h1>
            <p>Choosing the right keyword can make lot of difference in your campaigns, 
              determining that how well your ads rank on Google and search engines.</p>
            <h1>Bid Management</h1>
            <p>This is one of the important areas in the field of PPC advertising, it is the main task during campaign setup.
               It improves the quality of ad and will display in better place in search engines.</p>
            <h1>PPC Copywriting</h1>
            <p>PPC Copywriting is nothing but an Ad copy writing, it’s a term for the main text of the clickable advertisement.
               We create ad copy in a unique way, as we make sure that your business will grow long run and generate a goodresult, within a short span.</p>
            <h1>ROI rate report</h1>
            <p>All campaign reports regularly shared with clients, we will give accurate reports that will help our clients to evaluate.</p>
          </div>
        </div>
        <p className='pt-10 text-gray-500'>Pay Per Click or PPC is an online advertising model used to direct traffic to websites, 
          where advertisers pay the website owners when the ad is clicked. 
          Sponsored ads you see at the top of Google’s search results page that is PPC advertising.
           When an online user clicks on the ad, the person lands on your site and you only pay the search engine a little fee.</p>
      <h1 className='text-underline'> PPC Campaign Management  </h1>  
      <p>In PPC Campaign you can show your ads on Smartphone’s, tablets, and other devices or also you can also specify certain settings within your PPC campaign,
         like the times or day, locations that you want to target and how much money you want to spend per day. 
         With PPC campaigns you can have direct interface with the target customer,
          who is searching queries on Google, Yahoo, Bing or any social media network such as Facebook,
           twitter.</p>
           <p>For example: Get Online sales through PPC services, 
            at Aspirant Soft Solutions offering professional PPC services from India which can help you to get 
            more online sales including brand imprint and attract multiple customers to your business. 
            We know that the success of PPC is not measured by the technology and tools, but by the best strategy.</p>

            <h1>PPC campaigns also include mobile ads and remarketing options including:</h1>
            <ul>
              <li>PPC Landing Page Creation</li>
              <li>Creating Ad Copyright And Ad Campaign Set Up</li>
              <li>Paid Search Strategy Implementation</li>
              <li>Increased Paid Traffic</li>
              <li>Better Leads And Sales</li>
              <li>Improved ROI And Reduced CPC</li>
              <li>Bid Management And Re-Targeting</li>
            </ul>
            <p> Successful PPC campaign management comes from many years experience in managing Pay Per Click campaigns for
               companies Aspirant team is dedicated to provide the utmost level of PPC campaign management 
               at cost-benefit prices and make sure that your PPC campaign is a success, 
               from keyword research to campaign set-up, monitoring and management to measurement- reporting. 
               Broad keyword analysis and Competition comparison helps your business, and using those keywords 
               that will provide you a great number of enquiries.</p>
        <h1>Why Choose Us</h1>
           <ul>
            <li>Experienced And Dedicated Professionals To Manage PPC Accounts</li>
            <li>Quality PPC Management At Affordable Prices</li>
            <li>Transparent Business Policy</li>
            <li>Reliable And Effective Services</li>
            <li>Effective And ROI On Your Ad Spend</li>
            <li>100% Satisfactory Outcomes</li>
            <li>24 /7 Hour Communication Support</li>
            <li>Wondering that why your PPC is not paying off for you? Contact us to learn why.
               We are a renowned PPC advertising agency and can boost your lead generation and profit.</li>
           </ul>
           <div className='pl-14'>
           <h1 className='text-3xl text-bold '>The value we add to our clients</h1>
           <ul className='list-disc w-[82%] flex'>
            <div>
            <li>Our PPC experts come with deep experience in AdWords and Social Media paid to advertise. </li>
            <li>Aspirant professionals are trained and certified in Ad Words from fundamentals, display, video, mobile, shopping, and analytics.</li>
              
            <li>We plan, and executive an optimized campaign that helps our clients reduce the CPC increases the CTR and conversion rate.</li>
                </div>
              <div className=''>
              <li>We are consistent in tracking, analysing and reporting on analytics to make informed decisions for continuous improvements.</li>
           
               <li>We create effective landing pages with persuasive and compelling copy that help in increasing the conversion rate.</li>
              </div>
                </ul>
           </div>

    <Approch />
   
    </>
  )
}

export default PPCManagement