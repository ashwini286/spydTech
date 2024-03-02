import React, { useState } from "react";

const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("Android");
  return (
    <>
        <div className="flex flex-row justify-between  w-full h-full ">
      <div className="flex flex-col  w-[30%] p-8 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCurrentPage("Android")}
        >
          Android & iOS Developer
        </button>
        {/* <Fullstackjob/> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => setCurrentPage("fullstack")}
        >
          Full Stack Developer
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => setCurrentPage("Business")}
        >
          Business Development Manager
        </button>
      </div>

      <div className="flex-grow pl-14">
        <div className="p-[44px]">
        <p className="text-3xl text bold">Job Description</p>

          {currentPage === "Android" && (
            <div>
          <p className="text-3xl text bold py-8"> Android Developer </p>
          
  <div>
  <li>Proficient in core Java with excellent knowledge. </li>
  <li>Hands-on experience in the complete life cycle of Android application development.</li>
  <li>Strong understanding of RESTful web services.</li>
  <li>Good knowledge of Android SDKs.</li>
  <li>Familiarity with Push Notifications and Toast.</li>
  <li>Proficient in Eclipse and ANT based build system.</li>
  <li>Skilled in Android Studio.</li>
  <li>Experience in Gradle.</li>

  </div>

  <div>
  <div>
    <p className="text-3xl text bold py-8">iOS Developer:</p>
  </div>
  <div>
<li>Extensive experience with Objective-C, Swift, and iOS SDK.</li>
<li>Good working knowledge of Cocoa Touch.</li>
<li>Expertise in memory management and caching mechanisms specific to mobile devices.</li>
<li>Hands-on experience with iOS frameworks, including Core Data, Core Animation, Core Graphics, and Core Text.</li>
  </div>

  </div>
<div>
  <div>
    <p className="text-3xl text bold py-8">Good To Have:</p>
  </div>
  <div>
    <li>Experience in Payment gateway integration in mobile apps.</li>
    <li>A portfolio of iOS/Android apps in the Play Store/app store is a plus.</li>
    <li>Hands-on experience with Android Studio and the Gradle build system.</li>
    <li>Proficient in Git & Gerrit.</li>
    <li>UI & UX experience.</li>
    <li>Familiarity with Locations and Map APIs.</li>
  </div>
</div>
            {/* <TextGenerateEffect
              words="Android Developer Excellent knowledge in core Java. 
              Hands on experience in the full life cycle of Android application development. 
              Strong knowledge in RESTful web services. Good Knowledge of Android SDK's. 
              Push Notifications & Toast. Eclipse & ANT based build system."
            /> */}
            </div>
          )}
              {currentPage === "fullstack" && (
            <div>
          <p className="text-3xl text bold py-8"> Full Stack Developer</p>
          <div>
  <li>Proficient in core Java with excellent knowledge. </li>
  <li>Hands-on experience in the complete life cycle of Android application development.</li>
  <li>Strong understanding of RESTful web services.</li>
  <li>Good knowledge of Android SDKs.</li>
  <li>Familiarity with Push Notifications and Toast.</li>
  <li>Proficient in Eclipse and ANT based build system.</li>
  <li>Skilled in Android Studio.</li>
  <li>Experience in Gradle.</li>

  </div>

  <div>
  <div>
    <p className="text-3xl text bold py-8">iOS Developer:</p>
  </div>
  <div>
<li>Extensive experience with Objective-C, Swift, and iOS SDK.</li>
<li>Good working knowledge of Cocoa Touch.</li>
<li>Expertise in memory management and caching mechanisms specific to mobile devices.</li>
<li>Hands-on experience with iOS frameworks, including Core Data, Core Animation, Core Graphics, and Core Text.</li>
  </div>

  </div>
<div>
  <div>
    <p className="text-3xl text bold py-8">Good To Have:</p>
  </div>
  <div>
    <li>Experience in Payment gateway integration in mobile apps.</li>
    <li>A portfolio of iOS/Android apps in the Play Store/app store is a plus.</li>
    <li>Hands-on experience with Android Studio and the Gradle build system.</li>
    <li>Proficient in Git & Gerrit.</li>
    <li>UI & UX experience.</li>
    <li>Familiarity with Locations and Map APIs.</li>
  </div>
</div>

            {/* <TextGenerateEffect
              words="Android Developer Excellent knowledge in core Java. 
              Hands on experience in the full life cycle of Android application development. 
              Strong knowledge in RESTful web services. Good Knowledge of Android SDK's. 
              Push Notifications & Toast. Eclipse & ANT based build system."
            /> */}
            </div>
          )}
          
          {/* {currentPage === "fullstack" && <Fullstackjob />}
          

          {currentPage === "Business" && <BusinessDevelopmentManager/>} */}
                {currentPage === "Business" && (
            <div>
          <p className="text-3xl text bold py-8"> Business Development Manager</p>
          <div>
  <li>Proficient in core Java with excellent knowledge. </li>
  <li>Hands-on experience in the complete life cycle of Android application development.</li>
  <li>Strong understanding of RESTful web services.</li>
  <li>Good knowledge of Android SDKs.</li>
  <li>Familiarity with Push Notifications and Toast.</li>
  <li>Proficient in Eclipse and ANT based build system.</li>
  <li>Skilled in Android Studio.</li>
  <li>Experience in Gradle.</li>

  </div>

  <div>
  <div>
    <p className="text-3xl text bold py-8">iOS Developer:</p>
  </div>
  <div>
<li>Extensive experience with Objective-C, Swift, and iOS SDK.</li>
<li>Good working knowledge of Cocoa Touch.</li>
<li>Expertise in memory management and caching mechanisms specific to mobile devices.</li>
<li>Hands-on experience with iOS frameworks, including Core Data, Core Animation, Core Graphics, and Core Text.</li>
  </div>

  </div>
<div>
  <div>
    <p className="text-3xl text bold py-8">Good To Have:</p>
  </div>
  <div>
    <li>Experience in Payment gateway integration in mobile apps.</li>
    <li>A portfolio of iOS/Android apps in the Play Store/app store is a plus.</li>
    <li>Hands-on experience with Android Studio and the Gradle build system.</li>
    <li>Proficient in Git & Gerrit.</li>
    <li>UI & UX experience.</li>
    <li>Familiarity with Locations and Map APIs.</li>
  </div>
</div>


            {/* <TextGenerateEffect
              words="Android Developer Excellent knowledge in core Java. 
              Hands on experience in the full life cycle of Android application development. 
              Strong knowledge in RESTful web services. Good Knowledge of Android SDK's. 
              Push Notifications & Toast. Eclipse & ANT based build system."
            /> */}
            </div>
          )}
              
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default JobPost