import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
import Resume from '../../assets/jobForm/resume.svg'
import Login from '../../assets/jobForm/login.svg'
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
      <div >
        <div className='flex justify-center items-center bg-[#008BC2] flex-col gap-4 text-white py-16'>
          <h1 className="text-xl md:text-6xl font-bold ">Job Application</h1>
          <h4 className="text-sm sm:text-lg">
            {" "}
            Please complete the form below to apply for a position with us.
          </h4>
        </div>

        <div className="px-4 md:px-6  bg-[#008BC2]  flex md:flex-row flex-col-reverse items-center justify-center">



          <form className=" gap-8 text-white pt-8  flex justify-center items-center flex-col  md:w-[50%]" onSubmit={handleSubmit(onSubmit)}>

            <div className="w-60">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-white "
              >
                First name
              </label>

              <input
                type="text "
                name="firstName"

                placeholder='   First name'

                className="md:w-[320px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                {...register('firstName')}
              />
              {errors.firstName && (
                <p className="text-[#d00000] ">{errors.firstName.message}</p>
              )}




            </div>

            <div className="w-60">
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
                  className=" md:w-[320px] md:h-[50px] w-full form-control block rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className="text-[#d00000]">{errors.lastName.message}</p>
                )}
              </div>

            </div>
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
                className="md:w-[320px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400 "
              />
              {errors.email && (
                <p className="text-[#d00000]">{errors.email.message}</p>
              )}
            </div>
            <div className="w-60">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-white"
              >
                Phone Number
              </label>
              <div>
                <PhoneInput
                  country={'in'}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: true,
                    inputStyle:""
                  }}
                  className=" md:w-[320px] md:h-[50px] bg-white w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"

                  name="phoneNo"
                  id="phoneNo"
                  placeholder="(000) 000-0000"
                  {...register('phoneNumber')}
                />
                {/* <input
                     type="tel"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="(000) 000-0000"
                  {...register('phoneNumber')}
                  className=" md:w-[320px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                /> */}
                {errors.phoneNumber && (
                  <p className="text-[#d00000]">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
            <div className="w-60">
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
                  className=" md:w-[320px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                />
                {errors.linkedin && (
                  <p className="text-[#d00000]">{errors.linkedin.message}</p>
                )}
              </div>
            </div>
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
                className=" md:md:w-[320px] md:h-[50px] w-full block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
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
            <div className="w-60">
              <label
                htmlFor="aboutUs"
                className="block text-sm font-medium leading-6 text-white "
              >
                How did you hear about us
              </label>
              <select
                name="aboutUs"
                id="aboutus"
                {...register('aboutUs')}
                placeholder="   How did you hear about us"
                className="md:w-[320px] md:h-[50px] w-full block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
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

            {/* Resume */}
            <div className="w-60">
              <label
                htmlFor="Resume"
                className="block text-sm font-medium leading-6 text-white"
              >
                Resume
              </label>
              <div className="md:w-96 ">
                <input
                  type="file"
                  name="resume"
                  id="Resume"
                  accept=".pdf, .docx, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  {...register('resume')}
                  className="md:w-[320px] md:h-[50px] w-full block rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                />
                {errors.resume && (
                  <p className="text-[#d00000]">{errors.resume.message}</p>
                )}
              </div>
            </div>
            <div className="w-60">

              <label
                htmlFor="coverletter"
                className="block text-sm font-medium leading-6 text-white "
              >
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                id="coverletter"
                placeholder='Write something... (optional)'
                {...register('coverLetter')}
                className=" md:w-[320px] md:h-[50px] block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
              ></textarea>
              {errors.coverLetter && (
                <p className="text-[#d00000]">{errors.coverLetter.message}</p>
              )}

            </div>
            <div className="w-60 pb-8">
              <button
                type="submit"
                className="rounded bg-black px-9 md:px-4 py-2 text-white items-center w-60 md:w-80"
              >
                Apply
              </button>
            </div>
          </form>




          <div className=' flex flex-col mr-16 justify-center items-center md:w-[50%]'>
          
           <div className='pt-16'>
           <img
              src={Login}
className='md:w-[450px] w-[300px] '
            />
           </div>
           <div className='pt-16'>
           <img
              src={Resume}
className='md:w-[450px] w-[300px] '
            />
           </div>
          </div>
        </div>
      </div>

      <Approch />
      <Footer />

    </>
  )
}

export default Form