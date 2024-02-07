import React, { useEffect } from "react";
// import Person from '../../assets/person.png'
import Service1 from '../../assets/service1.jpg'
import Service2 from '../../assets/service2.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
// import Service3 from '../../assets/service3.jpg';
const Services1 = () => {
  useEffect(() => {
    AOS.init();
  });
  const Services = [
    { id: 1, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Service1 },
    { id: 2, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Service2 },
    { id: 3, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: "https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-online-education-training-course-design-concept-vector-illustration-png-image_2158408.jpg" },
    { id: 4, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Service1 },
    { id: 5, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Service2 },
    { id: 6, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: "https://png.pngtree.com/png-vector/20200310/ourmid/pngtree-online-education-training-course-design-concept-vector-illustration-png-image_2158408.jpg" },

  ]
  return (
    <>
      <div className=' max-w-screen-2xl mx-auto'>

        <div className='mt-20 md:w-2/2 mx-auto text-center w-full' data-aos="fade-right">
          <h2 className='text-2xl md:text-4xl text-gray-800 font-semibold mb-3'>Welcome to SpY D Technology</h2>
          <p className='text-gray-400 px-4'>SpY D Technology private limited is India’s leading, one stop, full scale, full service software and information technology that thrives on cutting edge, state of the art, emerging technologies offering wide range, wide spectrum services and solutions in areas such as Web Technologies, Mobility Applications, Web & Mobile Products, Custom Applications, End-to-End Digital Transformation, Augmented and Virtual reality, and Design Thinking Innovation and Digital Marketing Services.</p>
        </div>
      </div >

      <div className='md:px-14 px-4  max-w-screen-2xl mx-auto'>
        <div className='mt-20 md:w-2/2 mx-auto text-center w-full' data-aos="fade-up">
          <p className='text-gray-400'>We are one stop, full service, and turnkey solutions provider for</p>
          <h2 className='text-2xl md:text-3xl text-gray-800 font-normal mb-3'>Web, Mobility and Digital Marketing Services.</h2>
          <div className='flex justify-center items-center' data-aos="fade-right">
            <img src='https://www.synotive.com/Content/images/image7.jpg' />
          </div>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-7'>
          {
            Services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
          mx-auto md:h-88 rounded-md shadow-2xl cursor-pointer hover:translate-y-5 hover:border-b-4
hover:border-gray-800 transition-all duration-300 flex items-center justify-center h-full' data-aos="fade-right">
              <div>
                <div className=' mb-4 mx-auto rounded-tl-3xl rounded-br-3xl text-center'><img src={service.image} style={{backgroundColor:"none"}}/></div>   
                {/* w-460 h-306 */}
                <h4 className='text-2xl font-bold  mb-2 px-2 text-gray-800' >{service.title}</h4>
                <p className='text-sm text-gray-400'>{service.descraption}</p>

              </div>
            </div>)
          }
        </div>
      </div>

    </>
  )
}

export default Services1