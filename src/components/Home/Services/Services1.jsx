import React from 'react'
import Person from './person.png'
const Services1 = () => {

  const Services = [
    { id: 1, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },
    { id: 2, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },
    { id: 3, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },
    { id: 4, title: "Membership Organisations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },
    { id: 5, title: "National Associations", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },
    { id: 6, title: "Clubs ANd Groups", descraption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quibusdam qui soluta.", image: Person },

  ]
  return (
    <>
      <div className=' max-w-screen-2xl mx-auto'>

        <div className='mt-20 md:w-2/2 mx-auto text-center w-full'>
          <h2 className='text-4xl text-gray-800 font-semibold mb-3'>Welcome to SpY D Technology</h2>
          <p className='text-gray-400'>SpY D Technology private limited is India’s leading, one stop, full scale, full service software and information technology that thrives on cutting edge, state of the art, emerging technologies offering wide range, wide spectrum services and solutions in areas such as Web Technologies, Mobility Applications, Web & Mobile Products, Custom Applications, End-to-End Digital Transformation, Augmented and Virtual reality, and Design Thinking Innovation and Digital Marketing Services.</p>
        </div>
      </div >

      <div className='md-px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <div className='mt-20 md:w-2/2 mx-auto text-center w-full'>
          <p className='text-gray-400'>We are one stop, full service, and turnkey solutions provider for</p>
          <h2 className='text-3xl text-gray-800 font-normal mb-3'>Web, Mobility and Digital Marketing Services.</h2>
          <div className='flex justify-center items-center'>
            <img src='https://www.synotive.com/Content/images/image7.jpg' />
          </div>
        </div>

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:w-11/12 mx-auto gap-7'>
          {
            Services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
          mx-auto md:h-88 rounded-md shadow-2xl cursor-pointer hover:translate-y-5 hover:border-b-4
hover:border-gray-800 transition-all duration-300 flex items-center justify-center h-full'>
              <div>
                <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} className='ml-5' /></div>
                <h4 className='text-2xl font-bold  mb-2 px-2 text-gray-800'>{service.title}</h4>
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