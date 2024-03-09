import React from 'react'
import Navbarupp from '../../Home/Navbar/Navbarupp'
import Approch from '../../Home/APProchUs/Approch'
import { SiOpenai } from "react-icons/si";
import { CiCloudOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

function Otherservies() {
  return (
    <>
    <Navbarupp />
    <div class="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
                        <SiOpenai  className='text-2xl'/>
                        </span>
                    </div>

                    <div class="mt-6">
                        <h2 class="text-3xl font-bold tracking-tight text-white">
                            What is AI and ML ?:
                        </h2>
                        <p class="mt-4 text-lg text-gray-300">
                        Machine learning is a field of study in artificial intelligence concerned with the development and study of 
                        statistical algorithms that can learn from data and generalize to unseen data, and thus perform tasks without explicit
                        </p>
                        <div class="mt-6">
                            <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/Advanced Technologies">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        class="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: 'transparent' }}src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg" />
                </div>
            </div>
        </div>
    </div>



    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
                        <CiCloudOn className='text-4xl'/>
                        </span>
                    </div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold tracking-tight text-white">
                           What is Cloud Technologies:
                        </h2>
                        <p class="mt-4 text-lg text-gray-300">
                        Cloud computing is the on-demand availability of computer system resources, 
                        especially data storage and computing power, without direct active management by the user. 
                        Large clouds often have functions distributed over multiple locations, each of which is a data center.
                        </p>
                        <div class="mt-6">
                            <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/Machine">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: 'transparent' }} src="https://assets.entrepreneur.com/content/3x2/2000/1704829170-ENT-The2024AWSCertifiedCloudPractitionerArchitectCertificationBundle.png" />
                </div>
            </div>
        </div>
    </div>



    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
                        <IoSettingsOutline className="text-4xl"/>
                        </span>
                    </div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold tracking-tight text-white">
                            Software Testing:
                        </h2>
                        <p class="mt-4 text-lg text-gray-300">
                        Software testing is the act of examining the artifacts and the behavior of the software under test 
                        by verification and validation. Software testing can also provide an objective, 
                        independent view of the software to allow the business to appreciate and understand 
                        the risks of software implementation.
                        </p>
                        <div class="mt-6">
                            <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/Software Testing">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0 p-0">
                    <img loading="lazy" width="646" height="485"
                        class="w-full  rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: 'transparent' }}
                        src="https://bilimgenc.tubitak.gov.tr/sites/default/files/inline-images/Laptop_notebook.jpg" />
                </div>
            </div>
        </div>
    </div>

    <div class="relative">
        <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span class="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500 text-white">
                        <CiCloudOn className='text-4xl'/>
                        </span>
                    </div>
                    <div class="mt-6">
                        <h2 class="text-3xl font-bold tracking-tight text-white">
                           What is Cloud Technologies:
                        </h2>
                        <p class="mt-4 text-lg text-gray-300">
                        Cloud computing is the on-demand availability of computer system resources, 
                        especially data storage and computing power, without direct active management by the user. 
                        Large clouds often have functions distributed over multiple locations, each of which is a data center.
                        </p>
                        <div class="mt-6">
                            <a class="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                href="/Machine">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-12 sm:mt-16 lg:mt-0">
                <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                        style={{ color: 'transparent' }} src="https://assets.entrepreneur.com/content/3x2/2000/1704829170-ENT-The2024AWSCertifiedCloudPractitionerArchitectCertificationBundle.png" />
                </div>
            </div>
        </div>
    </div> 

</div>




<Approch />
    </>
  )
}

export default Otherservies