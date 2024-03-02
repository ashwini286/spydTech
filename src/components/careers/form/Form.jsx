import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
const Form = () => {
  const [formData, setFormData] = useState({});
  // Validation Of all Field
  const schema = yup.object({
    firstName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, 'First Name should only contain alphabetic characters')
      .required('First Name is required'),
    lastName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, 'Last Name should only contain alphabetic characters')
      .required('Last Name is required'),
    dob: yup
      .date()
      .nullable()
      .required('Date of Birth is required')
      .max(new Date(), 'Date of Birth cannot be in the future'), 

    streetAddress: yup
      .string()
      .required('Street Address is required')
      .matches(
        /^[a-zA-Z0-9\s,.'-]*$/,
        'Invalid characters in the Street Address'
      ),
      city: yup
      .string()
      .required('City is required')
      .matches(/^[a-zA-Z\s]*$/, 'Invalid characters in the City'),
    state: yup
      .string()
      .required('State is required')
      .matches(/^[a-zA-Z\s]*$/, 'Invalid characters in the State'),

      postalCode: yup
      .string()
      .required('Postal/Zip Code is required')
      .matches(/^\d{5}(-\d{4})?$/, 'Invalid Postal/Zip Code'),

      email: yup.string().email('Invalid email format').required('Email is required'),
      phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, 'Invalid phone number'),

      linkedin: yup
      .string()
      .matches(
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
        'Invalid LinkedIn profile link'
      )
      .required('LinkedIn profile link is required'),

      positionApplied: yup.string().required('Position Applied is required'),

      aboutUs: yup.string().required('How did you hear about us is required'),
      startDate: yup.date().required('Available Start Date is required'),
      resume: yup
      .mixed()
      .test('fileFormat', 'This field is required', (value) => {
        if (!value) return true; // Allow empty value
        const allowedFormats = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        return allowedFormats.includes(value[0]?.type);
      }),
      coverLetter: yup.string(),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  
  const onSubmit = (data) => {
    var AllJobFormDetails = JSON.parse(localStorage.getItem('AllJobFormDetails') || "[]");
    AllJobFormDetails.push(data);
    localStorage.setItem('AllJobFormDetails', JSON.stringify(AllJobFormDetails));
    setFormData(data);
    console.log(data);
  };
  
  return (
    <>
      <Navbarupp />
      <div>
        <img
          src='https://csc-team-storage.s3.eu-west-1.amazonaws.com/Team+EN.jpg'
          className=" object-cover w-full md:h-[550px]"
          // style={{ filter: "brightness(70%)" }}
          alt="Background Image"
        />
      </div>
      <div className="px-4 md:px-6 bg-[#008BC2] pt-20">

        <form className="space-y-4 sm:space-y-6 text-white pt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-center items-center flex-col gap-4'>
            <h1 className="text-xl md:text-6xl font-bold">Job Application</h1>
            <h4 className="text-sm sm:text-lg">
              {" "}
              Please complete the form below to apply for a position with us.
            </h4>
          </div>
          <hr></hr>
     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
            <div className="sm:col-span-3 ">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-white "
              >
                First name
              </label>
              <div className="w-60">
                <input
                  type="text "
                  name="firstName"
                
                  placeholder='   First name'
                 
                  className="w-[320px] h-[50px] form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className="text-[#d00000] ">{errors.firstName.message}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last name
              </label>
              <div className="w-60">
                <input
                  type="text"
                  name="lastName"
                  placeholder='   Last name'
                  className= " w-[320px] h-[50px] form-control block rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className="text-[#d00000]">{errors.lastName.message}</p>
                )}
              </div>

            </div>
          </div>
      {/* <div>
      <label
            htmlFor="dob"
            className="block text-sm font-medium text-white"
          >
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control text-black"
            {...register('dob')}
          />
          {errors.dob && (
            <p  className="text-[#d00000]">{errors.dob.message}</p>
          )}
      </div> */}
           {/* <div className="sm:col-span-3">
        <label
           htmlFor="streetAddress"
            className="block text-sm font-medium leading-6 text-white "
          >
            Current address
          </label>
          <div className=" max-w-screen-sm">
            <input
               type="text"
              placeholder=' Current address'
              {...register("streetAddress")}
              className="form-control block  w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            />
              {errors.streetAddress && (
            <p className="text-[#d00000]">{errors.streetAddress.message}</p>
          )}
          </div>
        
        </div>  */}
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4 ">
          {/* <div className="sm:col-span-3">
          <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-white "
            >
              City
            </label>
            <div className="w-60">
              <input
               type="text"
                name="City"
                id="City"
                placeholder='  City'
                {...register('city')}
                className="form-control block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
              />
               {errors.city && (
            <p className="text-[#d00000]">{errors.city.message}</p>
          )}
            </div>
        
          </div> */}

          {/* <div className="sm:col-span-3">
          <label
              htmlFor="state"
              className="block text-sm font-medium leading-6 text-white"
            >
              State
            </label>
            <div className="w-60">
              <input

              type="text"
                name="State"
                id="State"
                placeholder='  State'
                {...register('state')}
                className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              />
               {errors.state && (
            <p className="text-[#d00000]">{errors.state.message}</p>
          )}
            </div>
           
          </div> */}
        </div>
          {/* <div className="sm:col-span-3">
        <label
            htmlFor="postalCode"
            className="block text-sm font-medium leading-6 text-white"
          >
            postal/zip code
          </label>
          <div className="max-w-screen-sm">
            <input
              type="text"
              name="postal"
              id="postal"
              placeholder="  postal/zip code"
              {...register('postalCode')}
              className="form-control block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
            />
             {errors.postalCode && (
            <p className="text-[#d00000]">{errors.postalCode.message}</p>
          )}
          </div>
          
        </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
          <div className="sm:col-span-3">
            <div className="w-60">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                {...register('email')}
                placeholder=" ex:myname@gmail.com"
                className="w-[320px] h-[50px] form-control block  rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400 "
              />
                {errors.email && (
            <p className="text-[#d00000]">{errors.email.message}</p>
          )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="w-60">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-white"
              >
                Phone Number
              </label>
              <div>
                <input
                   type="text"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="(000) 000-0000"
                  {...register('phoneNumber')}
                  className=" w-[320px] h-[50px] form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                />
                  {errors.phoneNumber && (
            <p className="text-[#d00000]">{errors.phoneNumber.message}</p>
          )}
              </div>
            </div>
          </div>
        </div>
          <div className="sm:col-span-3">
          <div className="w-60">
            <label
               htmlFor="linkedin"
              className="block text-sm font-medium leading-6 text-white"
            >
              LinkedIn
            </label>
            <input
              type="text"
              name="LinkedIn"
              placeholder=' LinkedIn Profile'
              id="LinkedIn"
              {...register('linkedin')}
              className=" w-[320px] h-[50px] form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
            />
             {errors.linkedin && (
            <p className="text-[#d00000]">{errors.linkedin.message}</p>
          )}
          </div>
        </div>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-4">
          <div className="sm:col-span-3">
          <div className="w-60">
      <label
        htmlFor="positionApplied"
        className="form-control block text-sm font-medium leading-6 text-white"
      >
        Position Applied
      </label>
      <select
        type="text"
        name="positionApplied"
        placeholder="Position Applied"
        id="positionApplied"
        {...register('positionApplied')}
        className=" w-[320px] h-[50px] block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
      >
        <option value="">Please select</option>
        <option value="FrontEnd">FrontEnd</option>
        <option value="BackEnd">BackEnd</option>
        <option value="other">Other</option>
      </select>
      {errors.positionApplied && (
        <p className="text-[#d00000]">{errors.positionApplied.message}</p>
      )}
    </div>
</div>

<div className="w-60">
      <label
        htmlFor="aboutUs"
        className="block text-sm font-medium leading-6 text-white"
      >
        How did you hear about us
      </label>
      <select
        name="aboutUs" 
        id="aboutus"
        {...register('aboutUs')} 
        placeholder="   How did you hear about us"
        className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
      >
        <option value="">Please select</option>
        <option value="Instagram">Instagram</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="YouTube">YouTube</option>
        <option value="Facebook">Facebook</option>
        <option value="other">Other</option>
      </select>
      {errors.aboutUs && (
        <p className="text-[#d00000]">{errors.aboutUs.message}</p>
      )}
    </div>
        </div>
        {/* <div className="sm:col-span-3">
      <label
        htmlFor="Available-Start-Date"
        className="block text-sm font-medium leading-6 text-white"
      >
        Available Start Date
      </label>
      <div className="w-60">
        <input
          type="date"
          id="StartDate"
          name="startDate" 
          placeholder='Start Date'
          {...register('startDate')} 
          min={new Date().toISOString().split("T")[0]}
          className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
        />
        {errors.startDate && (
          <p className="text-[#d00000]">{errors.startDate.message}</p>
        )}
      </div>
    </div> */}
          {/* Resume */}
          <div className="sm:col-span-3">
      <label
        htmlFor="Resume"
        className="block text-sm font-medium leading-6 text-white"
      >
        Resume
      </label>
      <div className="w-96">
        <input
          type="file"
          name="resume"
          id="Resume"
          accept=".pdf, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          {...register('resume')}
          className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
        />
        {errors.resume && (
          <p className="text-[#d00000]">{errors.resume.message}</p>
        )}
      </div>
    </div>
    <div className="sm:col-span-3">
      <div className="max-w-screen-sm">
        <label
          htmlFor="coverletter"
          className="block text-sm font-medium leading-6 text-white"
        >
          Cover Letter
        </label>
        <textarea
          name="coverLetter"
          id="coverletter"
          placeholder='Write something... (optional)'
          {...register('coverLetter')}
          className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
        ></textarea>
        {errors.coverLetter && (
          <p className="text-[#d00000]">{errors.coverLetter.message}</p>
        )}
      </div>
    </div>
          <div className="pl-4 sm:pl-0  sm:pt-4 flex justify-center items-center pb-8">
            <button
              type="submit"
              className="rounded bg-black px-4 sm:px-9 py-2 text-white items-center w-72"
            >
              Apply
            </button>
          </div>
        </form>
      </div>

      <Approch />
      <Footer />

    </>
  )
}

export default Form