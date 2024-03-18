import React, { useState } from "react";
import JobDes from "./JobDes";

const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("Android");
  const [showInMobileForAndroid, setShowInMobileForAndroid] = useState(false);
  const [showInMobileForFullStack, setShowInMobileForFullStack] = useState(false);
  const [showInMobileForReact, setShowInMobileForReact] = useState(false);
  const [showInMobileForJava, setShowInMobileForJava] = useState(false);
  const [showInMobileForPhp, setShowInMobileForPhp] = useState(false);
  const [showInMobileForBusiness, setShowInMobileForBusiness] = useState(false);
  return (
    <>
      <div className="flex md:flex-row justify-between flex-col  w-full h-full ">
        <div className="flex flex-col  md:w-[30%] p-8 gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500"
            onClick={() => {setCurrentPage("Android"), setShowInMobileForAndroid(!showInMobileForAndroid)}}
          >
            Android & iOS Developer
          </button>
          {
            showInMobileForAndroid && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }

          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500"
            onClick={() => {setCurrentPage("fullstack"), setShowInMobileForFullStack(!showInMobileForFullStack)}}
          >
            Full Stack Developer
          </button>
          {
            showInMobileForFullStack && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500"
            onClick={() => {setCurrentPage("ReactJs"), setShowInMobileForReact(!showInMobileForReact)}}
          >
            ReactJs Developer
          </button>
          {
            showInMobileForReact && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500"
            onClick={() => {setCurrentPage("Java"), setShowInMobileForJava(!showInMobileForJava)}}
          >
            Java Developer
          </button>
          {
            showInMobileForJava && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }

          <button
            className='bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500 '
            // className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 "
            // hover:bg-[#008080]
            onClick={() => {setCurrentPage("PHP"), setShowInMobileForPhp(!showInMobileForPhp)}}
          >
            PHP Developer
          </button>
          {
            showInMobileForPhp && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 hover:scale-105 transition-all duration-500"
            onClick={() => {setCurrentPage("Business"), setShowInMobileForBusiness(!showInMobileForBusiness)}}
          >
            Business Development Manager
          </button>
          {
            showInMobileForBusiness && (
              <div className="md:hidden">
                <JobDes currentPage={currentPage} />
              </div>
            )
          }
        </div>

        <div className="hidden md:block">
          <JobDes currentPage={currentPage} />
        </div>
      </div>


    </>
  )
}

export default JobPost