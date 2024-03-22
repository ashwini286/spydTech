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
        <div class="grid grid-cols-2 mx-auto max-w-xl md:max-w-2xl gap-4 my-4">
            <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl font-bold">150<span class="text-yellow-500">+</span></div>
                <div class="text-300 text-uppercase">Applications Processed</div>
            </div>
            <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl font-bold">60<span class="text-teal-500">+</span></div>
                <div class="text-300 text-uppercase">Jobs Posted</div>
            </div>
            <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl font-bold">5<span class="text-pink-500">+</span></div>
                <div class="text-300 text-uppercase">Visitors Served</div>
            </div>
            <div class="p-4 border flex flex-col items-center rounded max-w-sm dark:bg-gray-800">
                <div class="text-4xl font-bold">4<span class="text-violet-500">+</span></div>
                <div class="text-300 text-uppercase">Conversion Uplift</div>
            </div>
        </div>
    </div>
</div>
    </>
  );
}

export default Overview;
