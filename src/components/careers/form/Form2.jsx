import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import Logo from '../../assets/logo2.png';

import 'react-phone-input-2/lib/style.css'
import Navbarupp from '../../Home/Navbar/Navbarupp';
import Approch from '../../Home/APProchUs/Approch';
import Footer from '../../Home/Footer/Footer';
import Resume from '../../assets/jobForm/resume.svg'
import Login from '../../assets/jobForm/login.svg'
import { Link } from 'react-router-dom';
const Form2 = () => {
    const [isRightVisible, setRightVisible] = useState(true);
    const [formData, setFormData] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
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
        setIsFormValid(true);
        console.log(data);
    };

    const toggleContent = () => {
     
        setRightVisible(!isRightVisible);
    };

    return (
        <div>
            <div className="w-full flex">
                {isRightVisible && (
                    <div className="bg-[#fff] w-1/2  relative rounded-r-3xl">




                        <form className=" text-black pt-8 flex  flex-row justify-center items-center pl-4" onSubmit={handleSubmit(onSubmit)}>
                            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>

                                <div className="w-60 ">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium leading-6 text-black "
                                    >
                                        First name
                                    </label>

                                    <input
                                        type="text "
                                        name="firstName"

                                        placeholder='   First name'

                                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                        {...register('firstName')}
                                    />
                                    {errors.firstName && (
                                        <p className="text-[#d00000] ">{errors.firstName.message}</p>
                                    )}




                                </div>

                                <div className="w-60">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium leading-6 text-black"
                                    >
                                        Last name
                                    </label>
                                    <div className="w-60">
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder='   Last name'
                                            className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                            // className=" md:w-[250px] md:h-[50px] w-full form-control block rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
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
                                        className="block text-sm font-medium leading-6 text-black"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        {...register('email')}
                                        placeholder=" ex:myname@gmail.com"
                                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"

                                    // className="md:w-[250px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400 "
                                    />
                                    {errors.email && (
                                        <p className="text-[#d00000]">{errors.email.message}</p>
                                    )}
                                </div>
                                <div className="">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="block text-sm font-medium leading-6 text-black"
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
                                                style: {
                                                    width: '100%', // Default width for small screens
                                                    '@media (min-width: 640px)': {
                                                        width: '250px', // Set width to 250px for medium screens
                                                    },
                                                },
                                            }}
                                            className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] bg-black w-full form-control block rounded-md py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                            name="phoneNo"
                                            id="phoneNo"
                                            placeholder="(000) 000-0000"
                                            {...register('phoneNumber')}
                                        />
                                        {errors.phoneNumber && (
                                            <p className="text-[#d00000]">{errors.phoneNumber.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-60">
                                    <div className="w-60">
                                        <label
                                            htmlFor="linkedin"
                                            className="block text-sm font-medium leading-6 text-black"
                                        >
                                            LinkedIn
                                        </label>
                                        <input
                                            type="text"
                                            name="LinkedIn"
                                            placeholder=' LinkedIn Profile'
                                            id="LinkedIn"
                                            {...register('linkedin')}
                                            className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                        // className=" md:w-[250px] md:h-[50px] w-full form-control block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                        />
                                        {errors.linkedin && (
                                            <p className="text-[#d00000]">{errors.linkedin.message}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-60">
                                    <label
                                        htmlFor="positionApplied"
                                        className="form-control block text-sm font-medium leading-6 text-black"
                                    >
                                        Position Applied
                                    </label>
                                    <select
                                        type="text"
                                        name="positionApplied"
                                        placeholder="Position Applied"
                                        id="positionApplied"
                                        {...register('positionApplied')}
                                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"

                                    // className=" md:md:w-[250px] md:h-[50px] w-full block  rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
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
                                        className=" block text-sm font-medium leading-6 text-black "
                                    >
                                        How did you hear about us
                                    </label>
                                    <select
                                        name="aboutUs"
                                        id="aboutus"
                                        {...register('aboutUs')}
                                        placeholder="   How did you hear about us"
                                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full block  rounded-md  py-1.5 text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
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
                                        className="block text-sm font-medium leading-6 text-black"
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
                                            className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset  placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"

                                        // className="md:w-[250px] md:h-[50px] w-full block rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                                        />
                                        {errors.resume && (
                                            <p className="text-[#d00000]">{errors.resume.message}</p>
                                        )}
                                    </div>
                                </div>

                            </div>

                        </form>



                        <div className="flex flex-col justify-center items-center py-4 gap-8">
                            <div className="w-60 pt-4">

                                <label
                                    htmlFor="coverletter"
                                    className="block text-sm font-medium leading-6 text-black "
                                >
                                    Cover Letter
                                </label>
                                <textarea
                                    name="coverLetter"
                                    id="coverletter"
                                    placeholder='Write something... (optional)'
                                    {...register('coverLetter')}
                                    className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] block w-full rounded-md py-1.5 text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
                                ></textarea>
                                {errors.coverLetter && (
                                    <p className="text-[#d00000]">{errors.coverLetter.message}</p>
                                )}

                            </div>
                            <div className="w-60 pb-8">
                                {/* Conditionally render the link based on form validity */}
                                {isFormValid ? (
                                    <Link to="/thanks">
                                        <button
                                            type="submit"
                                            onClick={toggleContent}
                                            className="rounded bg-black px-9 md:px-4 py-2 text-white items-center w-60 md:w-[250px]"
                                        >
                                            Apply
                                        </button>
                                    </Link>
                                ) : (
                                    <button
                                        type="submit"
                                        onClick={toggleContent}
                                        className="rounded bg-black px-9 md:px-4 py-2 text-white items-center md:w-[250px]  w-60 "
                                    >

                                        Apply
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-1/2  absolute">
                    <motion.div
                        className="h-[60px] bg-primarycolors-green relative"
                        initial={{ x: isRightVisible ? 0 : "100%" }}
                        animate={{ x: isRightVisible ? "100%" : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-gradient-to-r from-red-500 via-orange-500 to-white rounded-l-3xl h-[566px] flex flex-col items-center justify-center text-black ">
                            <div className="mb-8 ">
                                <img src={Resume} alt="Logo" className="w-80 h-60" />
                            </div>
                            <div className="text-center ">
                                <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-violet-500 to-transparent bg-clip-text">Welcome to SPY D Technology !</p>
                                <p className="text-lg">Enter your personal details to use all of site features</p>
                            </div>
                            {/* <Link to='/'>

                                <a className='text-blue-900 underline'>Go to Home Page ---&#62;</a>

                            </Link> */}
                        </div>
                    </motion.div>
                    {!isRightVisible && (
                        <motion.div
                            //   className={absolute top-0 }
                            initial={{ x: isRightVisible ? "100%" : 0 }}
                            animate={{ x: isRightVisible ? 0 : "100%" }}
                            transition={{ duration: 0.5 }}
                        >
                             <div className=" bg-gradient-to-r from-blue-800 via-blue-300 to-white rounded-l-3xl h-[566px] flex flex-col items-center justify-center text-black ">
                            <div className="mb-8 ">
                                <img src={Logo} alt="Logo" className="" />
                            </div>
                            <div className="text-center ">
                            <p className="text-2xl font-bold mb-2">Thank You For Joining Us With SPY D Technology !</p>
          <p className="text-lg">We will get back to you shortly.</p>
                            </div>
                            <Link to='/'>

                                <button className='text-blue-900 underline'>Go to Home Page ---&#62;</button>

                            </Link>
                        </div>
                        </motion.div>
                    )}
                </div>
            </div>
      
          
        </div>
    );
};

export default Form2;