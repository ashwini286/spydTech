import React, { useState } from "react";

const JobPost = () => {
  const [currentPage, setCurrentPage] = useState("Android");
  return (
    <>
      <div className="flex md:flex-row justify-between flex-col  w-full h-full ">
        <div className="flex flex-col  md:w-[30%] p-8 gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4"
            onClick={() => setCurrentPage("Android")}
          >
            Android & iOS Developer
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4"
            onClick={() => setCurrentPage("fullstack")}
          >
            Full Stack Developer
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4"
            onClick={() => setCurrentPage("ReactJs")}
          >
            ReactJs Developer
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4"
            onClick={() => setCurrentPage("Java")}
          >
            Java Developer
          </button>
          <button
          className='bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4  '
            // className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4 "
            // hover:bg-[#008080]
            onClick={() => setCurrentPage("PHP")}
          >
            PHP Developer
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-8 rounded-md  shadow-lg shadow-blue-700 mt-4"
            onClick={() => setCurrentPage("Business")}
          >
            Business Development Manager
          </button>
        </div>

        <div className="flex-grow md:pl-14">
          <div className="p-[44px]">
            <p className="md:text-5xl text bold text-3xl">Job Description</p>

            {currentPage === "Android" && (
              <div>
                <p className="text-3xl text bold py-8 "> Android Developer </p>

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
            {currentPage === "ReactJs" && (
              <div>
                <p className="text-3xl text bold py-8">React JS Developer</p>
                <div>
                  <li>Proficient in React.js and its core principles.</li>
                  <li>Experience with popular React.js workflows (such as Redux).</li>
                  <li>Familiarity with RESTful APIs and modern front-end build pipelines and tools.</li>
                  <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
                  <li>Knowledge of modern authorization mechanisms, such as JSON Web Token.</li>
                  <li>Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
                  <li>Good understanding of server-side rendering and its benefits and trade-offs.</li>
                </div>


                <div>
                  <div>
                    <p className="text-3xl text bold py-8">Good To Have:</p>
                  </div>
                  <div>
                    <li>Experience with TypeScript.</li>
                    <li>Knowledge of GraphQL.</li>
                    <li>Understanding of mobile app development using React Native.</li>
                    <li>Experience with unit testing frameworks like Jest.</li>
                    <li>Participation in open-source projects.</li>
                    <li>UI/UX design skills.</li>
                  </div>
                </div>
              </div>

            )}
            {currentPage === "Java" && (
              <div>
                <p className="text-3xl text bold py-8">Java Developer</p>
                <div>
                  <li>Proficient in core Java with excellent knowledge.</li>
                  <li>Experience with Java frameworks such as Spring and Hibernate.</li>
                  <li>Understanding of RESTful web services.</li>
                  <li>Knowledge of relational database management systems like MySQL or Oracle.</li>
                  <li>Familiarity with front-end technologies (HTML, CSS, JavaScript).</li>
                  <li>Experience in application development and deployment using tools like Maven or Gradle.</li>
                  <li>Version control using Git.</li>
                </div>


                <div>
                  <div>
                    <p className="text-3xl text bold py-8">Good To Have:</p>
                  </div>
                  <div>
                    <li>Experience with microservices architecture.</li>
                    <li>Knowledge of cloud platforms (AWS, Azure).</li>
                    <li>Understanding of containerization (Docker, Kubernetes).</li>
                    <li>Experience with NoSQL databases (MongoDB, Cassandra).</li>
                    <li>Participation in hackathons or coding competitions.</li>
                    <li>Understanding of DevOps practices.</li>
                  </div>
                </div>
              </div>


            )}
            {currentPage === "PHP" && (
              <div>
                <p className="text-3xl text bold py-8">PHP Developer</p>
                <div>
                  <li>Proficient in PHP, with a good knowledge of its ecosystems and frameworks.</li>
                  <li>Understanding of server-side templating languages such as Blade (Laravel) or Smarty.</li>
                  <li>Experience with MVC design patterns.</li>
                  <li>Knowledge of front-end technologies, such as HTML5, CSS3, and JavaScript.</li>
                  <li>Understanding of fundamental design principles behind a scalable application.</li>
                  <li>Experience with database systems, especially MySQL.</li>
                  <li>Understanding accessibility and security compliance.</li>
                </div>


                <div>
                  <div>
                    <p className="text-3xl text bold py-8">Good To Have:</p>
                  </div>
                  <div>
                    <li>Experience with other PHP frameworks (Symfony, CodeIgniter).</li>
                    <li>Knowledge of NoSQL databases (MongoDB, Redis).</li>
                    <li>Experience with containerization technologies like Docker.</li>
                    <li>Understanding of RESTful API design.</li>
                    <li>Contribution to open-source PHP projects.</li>
                    <li>Experience with cloud platforms (AWS, Azure).</li>
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