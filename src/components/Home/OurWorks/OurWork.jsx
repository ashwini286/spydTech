import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurWork = () => {
  useEffect(() => {
    AOS.init();
  });
  const project = [
    { id: 1, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/264921198/original/6b27bcd2eb415d899e1bb4c0c7871c8a045dfee3/build-a-professional-fully-functional-website.png" },
    { id: 2, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/335769852/original/8971d2245169a8152803da73f381923f0e0c3161/professionally-create-a-website-for-you.jpg" },
    { id: 3, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/333174135/original/1dfdf6e11662f9a28113d7c67ed0ed1cfd0db6bc/design-your-web-page-to-make-your-business-look-great-on-the-internet.png" },
    { id: 4, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/342041654/original/775cc208469824001ba6c231d771f825878eb4b9/design-a-elegant-website-for-you-or-your-company.png" },
    { id: 5, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/329226955/original/2e733eea5f39a873ae09470076ea4e8f8412cc84/create-a-basic-and-superb-website-develop-for-the-best-professional-website.jpg" },
    // { id: 6, title: "Creating Streamlined Safeguarding Processes with OneRan", image: Img3 }
    { id: 6, title: "Creating Streamlined Safeguarding Processes with OneRan", image: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107f08346568225a7d9951_6002086f72b72701db01e57d_asana-rebel.jpeg" }
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl  text-[#656565]  mb-4 md:w-4/5 text-center mx-auto '>Our Works </h2>
        <p className=' text-sm  text-[#656565] mb-8 md:w-3/4 mx-auto  ' data-aos="fade-right">
          Our works are for clients who are spreading values and principles
          to the world to become a better place.
        </p>
      </div>


      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center' data-aos="fade-right">
        {
          project.map(pro => <div key={pro.id} className='mx-auto relative mb-12 cursor-pointer '>
            <img src={pro.image} alt="" className='h-[250px] hover:scale-105 transition-all duration-500 shadow-2xl' />

            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md
            md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300
            ' >
              <h3>{pro.title}</h3>
            </div>
          </div>)
        }

      </div>
      <div className='flex justify-center items-center m-10' data-aos="fade-right">
     <Link to = "/portfolio">
     <Button size="md" className='font-serif bg-[#5bc0de] rounded'>
          view all
        </Button>
     </Link>
      </div>

    </div>
  )
}

export default OurWork