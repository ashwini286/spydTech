import React, { useEffect  } from 'react'
import { RiBarChartBoxLine } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PowerBIcontent() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
   <>
   <section class="relative overflow-hidden py-10 hello">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto text-center" data-aos="fade-up-up">
      <h2 class="font-semibold text-xl tracking-tight text-slate-800 sm:text-3xl">Creating advanced Power BI content for 
      <a className='text-transparent bg-clip-text bg-gradient-to-r from-[#b91c1c] via-blue-800 to-[#7c2d12]'>"SpY D technology,,</a> involves leveraging more sophisticated techniques and functionalities to extract deeper insights and provide a more immersive analytics experience. </h2>
   </div>
    <h3 className='text-3xl pt-10' data-aos="fade-up-down">Here's how you can enhance your Power BI content for <a className='text-transparent bg-clip-text bg-gradient-to-r from-[#b91c1c] via-blue-800 to-[#7c2d12]'>SpY D: </a></h3>
    
    <ul role="list"
    
      class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2">
        
      <li data-aos="fade-up-down" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
         <RiBarChartBoxLine className='text-6xl p-2' />
              Advanced Data Modeling:
        </h3>
        <p class="mt-6 text-base text-gray-700">Utilize advanced data modeling techniques such as creating calculated columns, measures, and calculated tables to derive new insights from SPYD data.</p>
      <p  class="mt-6 text-base text-gray-700">Implement complex DAX (Data Analysis Expressions) formulas to perform calculations, aggregations, and statistical analysis on SPYD data.</p>
      </li>
      <li data-aos="fade-up-up" class="rounded-2xl border hover:border-b-8  shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 p-8 shadow-xl ">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/>  Advanced Visualizations:
        </h3>
        <p class="mt-6 text-base text-gray-700">Incorporate advanced visualizations such as custom visuals from the Power BI marketplace or develop custom visuals using tools like Power BI Visuals SDK to visualize SPYD data in unique and insightful ways.</p>
          <p class="mt-6 text-base text-gray-700">Use advanced chart types like waterfall charts, bullet charts, and combination charts to present complex relationships and trends in SPYD data effectively.</p>
      </li>
      <li data-aos="fade-up-down" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/>   Predictive Analytics:
        </h3>
        <p class="mt-6 text-base text-gray-700">Implement predictive analytics models using techniques like regression analysis, time series forecasting, or machine learning algorithms to predict future trends or outcomes based on SPYD data.</p>
          <p class="mt-6 text-base text-gray-700">Integrate R or Python scripts within Power BI to perform advanced analytics tasks such as clustering, sentiment analysis, or anomaly detection on SPYD data.</p>
      </li>
      <li data-aos="fade-up-down" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/> Advanced Data Analysis:
        </h3>
        <p class="mt-6 text-base text-gray-700">Conduct advanced data analysis using techniques like correlation analysis, regression analysis, and hypothesis testing to uncover relationships and patterns within SPYD data.</p>
          <p class="mt-6 text-base text-gray-700">Utilize the powerful capabilities of Power BI's data exploration tools such as decomposition trees, key influencers analysis, and anomaly detection to gain deeper insights into SPYD data.</p>
      </li>

      <li data-aos="fade-up-up" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/>   Geospatial Analysis:
        </h3>
        <p class="mt-6 text-base text-gray-700">Perform geospatial analysis on SPYD data by visualizing it on maps and using features like heatmaps, clustering, and boundary layers to identify spatial patterns and trends.</p>
          <p class="mt-6 text-base text-gray-700">Incorporate external geospatial datasets or APIs to enrich SPYD data with additional geographic information and perform spatial analysis.</p>
      </li>
      <li data-aos="fade-up-down" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/> Real-time Analytics:
        </h3>
        <p class="mt-6 text-base text-gray-700">Implement real-time analytics solutions using Power BI streaming datasets or Azure services like Azure Stream Analytics to analyze and visualize SPYD data in real-time.</p>
          <p class="mt-6 text-base text-gray-700">Develop real-time dashboards and alerts to monitor SPYD data continuously and respond to critical events or changes promptly.</p>
      </li>
      <li data-aos="fade-up-up" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/> Custom Reporting Solutions:
        </h3>
        <p class="mt-6 text-base text-gray-700">Create custom reporting solutions tailored to the specific needs of SPYD stakeholders, including executive dashboards, operational reports, and ad-hoc analysis tools.</p>
          <p class="mt-6 text-base text-gray-700">Implement row-level security and dynamic role-based access control to ensure secure access to SPYD data for different user groups within the organization.</p>
      </li>
      <li data-aos="fade-up-down" class="rounded-2xl border hover:border-b-8 p-8 shadow-4xl   hover:border-b-[#14532d] hover:scale-105  transition duration-500 shadow-xl">
        <h3 class="font-bold text-lg text-gray-900 flex items-center">
        <RiBarChartBoxLine className='text-6xl p-2'/> Integration with External Systems:
        </h3>
        <p class="mt-6 text-base text-gray-700">Integrate Power BI with external systems and data sources relevant to SPYD technology, such as CRM systems, IoT platforms, or financial databases, to consolidate and analyze data from multiple sources.</p>
          <p class="mt-6 text-base text-gray-700">Leverage Power BI's connectivity options and APIs to automate data refreshes, data ingestion, and data transformation processes for SPYD data pipelines.</p>
      </li>
    </ul>
  </div>
  <div class="relative my-12 flex w-full flex-col items-center sm:mt-24" data-aos="fade-up-up">
  <a target="_blank" rel="noreferrer" href="https://example.com"
    class="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200">
    
    <p class="text-sm font-semibold text-[#1d9bf0]">Get</p>
  </a>
  <h1 data-aos="fade-up-down"
    class="mt-8 max-w-sm bg-gradient-to-br from-gray-900 via-teal-500 to-gray-900 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
   Get advanced techniques and functionalities into your Power BI
  </h1>
  <span class="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-800"c="fade-up-up">
  you can provide SpY D Technology stakeholders with deeper insights, predictive capabilities, and a more interactive analytics experience tailored to their specific needs and requirements.






  </span>
  
  <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4" data-aos="fade-up-down">
    <a href=""
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-900">
     
      Get the Latest Update
    </a>
    <a href="#demo"
      class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-teal-900 px-10 py-3 text-teal-900">Learn
      More →
    </a>
  </div>
</div>
</section>
<style>
    {`
    .hello{

    
      background-image: radial-gradient(circle at top center, rgb(243, 177, 46),rgb(230, 153, 36),rgb(217, 129, 26),rgb(204, 104, 15),rgb(191, 80, 5));
    }`}
</style>



   </>
  )
}

export default PowerBIcontent