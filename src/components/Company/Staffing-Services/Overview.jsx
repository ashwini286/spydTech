import React from "react";
import CountingAnimation from "./CountingAnimation";
function Overview() {
  return (
    <>
      <div class=" dark:bg-gray-900">
        <div class="container mx-auto py-16 dark:text-white">
          <div class="text-center">
            <h2 class="font-bold text-2xl md:text-4xl my-4 text-[#0284c7]">
              Solutions That Funnel Results
            </h2>
            <div class="max-w-2xl md:max-w-4xl mx-auto dark:text-gray-300">
              <p>
                Driving results depend on a number of factors over and above
                organic or paid traffic. Effective lead capture techniques, data
                nurturing & intelligent alert technology all drive higher
                percentages of conversion and results.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 mx-auto md:max-w-2xl gap-4 my-4">
            <div class="p-4 border border-[#0284c7] shadow-md shadow-[#0284c7] flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
              <div class="text-4xl font-bold flex justify-center items-center flex-row gap-x-2 ">
                <div>
                  <CountingAnimation start={0} end={150} duration={3000} />
                </div>
                <div class="text-yellow-500">+</div>
              </div>
              <div class="text-300 text-uppercase">Features Analyzed</div>
            </div>
            <div class="p-4 border border-[#0284c7] shadow-md shadow-[#0284c7] flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
              <div class="text-4xl font-bold flex justify-center items-center flex-row gap-x-2 ">
                <CountingAnimation start={0} end={60} duration={3000} />
                <span class="text-teal-500">+</span>
              </div>
              <div class="text-300 text-uppercase">Modules</div>
            </div>
            <div class="p-4 border border-[#0284c7] shadow-md shadow-[#0284c7] flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
              <div class="text-4xl font-bold flex justify-center items-center flex-row gap-x-2 ">
                <div>
                  <CountingAnimation start={0} end={5} duration={3000} />
                </div>
                <div class="text-pink-500">+</div>
              </div>
              <div class="text-300 text-uppercase">Functionalities</div>
            </div>
            <div class="p-4 border border-[#0284c7] shadow-md shadow-[#0284c7] flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
              <div class="text-4xl font-bold flex justify-center items-center flex-row gap-x-2">
                <div>
                  {" "}
                  <CountingAnimation start={0} end={4} duration={1000} />
                </div>
                <div class="text-violet-500">+</div>
              </div>
              <div class="text-300 text-uppercase">File Formats Supported</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
