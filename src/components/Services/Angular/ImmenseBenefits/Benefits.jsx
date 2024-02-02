import React from 'react'
import DoneAllSharpIcon from '@mui/icons-material/DoneAllSharp';

const Benefits = () => {
  return (
    <>
      <div className=' mt-16'>
        <div className='p-4 pl-16 md:text-4xl text-gray-600 font-bold'>
        The immense benefits of AngularJS
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 md:px-8 text-gray-500'>
          <div className='flex items-center  w-[89%] gap-4 pb-8 pl-6'>
            <p><DoneAllSharpIcon /></p>
            <p>AngularJS is a potentially a potent framework that makes a web application accurate to the point of precision</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><DoneAllSharpIcon /></p>
            <p>Since little or no coding is required when AngularJS is implemented it helps in improving efficiency by leaps and bounds benefiting the developers and clients.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6'>
            <p><DoneAllSharpIcon /></p>
            <p>The very design is based on MVC architecture makes it easily adaptable to the web application being built.</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pb-8 pl-6' >
            <p><DoneAllSharpIcon /></p>
            <p>AngularJS is backed by Google and a large community of coders, developers with regular updates and new features that can be incorporated with bare minimal effort</p>
          </div>
          <div className='flex items-center w-[89%] gap-4 pl-6' >
            <p><DoneAllSharpIcon /></p>
            <p>It offers rich, varied experience in making the web application far more responsive thus increased user experience.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Benefits