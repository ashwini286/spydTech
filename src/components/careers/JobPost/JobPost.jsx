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
            <p className="text-5xl text bold">Job Description</p>

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

              </div>
            )}
            {currentPage === "fullstack" && (
             <div>
             <p className="text-3xl text bold py-8">Full Stack Developer</p>
             <div>
                 <li>Proficient in core Java with excellent knowledge.</li>
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
                     <p className="text-3xl text bold py-8">Backend Development:</p>
                 </div>
                 <div>
                     <li>Experience in server-side scripting languages such as Node.js, Python, or Ruby.</li>
                     <li>Knowledge of database management systems like MySQL, MongoDB, or PostgreSQL.</li>
                     <li>API development and integration.</li>
                     <li>Understanding of server deployment and management.</li>
                 </div>
             </div>
         
             <div>
                 <div>
                     <p className="text-3xl text bold py-8">Frontend Development:</p>
                 </div>
                 <div>
                     <li>Proficiency in HTML, CSS, and JavaScript.</li>
                     <li>Experience with modern frontend frameworks such as React, Angular, or Vue.js.</li>
                     <li>Responsive design and cross-browser compatibility.</li>
                     <li>Knowledge of web performance optimization.</li>
                 </div>
             </div>
         
             <div>
                 <div>
                     <p className="text-3xl text bold py-8">Good To Have:</p>
                 </div>
                 <div>
                     <li>Experience in containerization technologies like Docker.</li>
                     <li>Understanding of microservices architecture.</li>
                     <li>Knowledge of version control systems such as Git.</li>
                     <li>Understanding of DevOps practices.</li>
                     <li>UI & UX experience.</li>
                     <li>Familiarity with Locations and Map APIs.</li>
                 </div>
             </div>
         </div>
         
            )}


            {currentPage === "Business" && (
             <div>
             <p className="text-3xl text bold py-8">Business Development Manager</p>
             <div>
               <li>Proactively identify and pursue business opportunities, fostering growth and partnerships.</li>
               <li>Collaborate with stakeholders to understand market trends and customer needs.</li>
               <li>Develop and implement strategies to drive business expansion and revenue.</li>
               <li>Establish and maintain strong client relationships, ensuring customer satisfaction.</li>
               <li>Lead and coordinate business development activities, including client presentations and negotiations.</li>
               <li>Analyze market dynamics and competitor activities to make informed business decisions.</li>
             </div>
           
             <div>
               <p className="text-3xl text bold py-8">Technical Skills:</p>
               <li>Proficient in core Java with excellent knowledge.</li>
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
           </div>
           
            )}

          </div>
        </div>
      </div>


    </>
  )
}

export default JobPost