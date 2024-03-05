import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Navbarupp from "../../Home/Navbar/Navbarupp";
import Approch from "../../Home/APProchUs/Approch";

import Resume from "../../assets/jobForm/woman.svg";
import tech from "../../assets/jobForm/tech.svg";
import Login from "../../assets/jobForm/login.svg";
import { Link } from "react-router-dom";
const Form2 = () => {
  const [isRightVisible, setRightVisible] = useState(true);
  const [formData, setFormData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  // Validation Of all Field
  const schema = yup.object({
    firstName: yup
      .string()
      .required("First Name is required")
      .matches(
        /^[a-zA-Z]+$/,
        "First Name should only contain alphabetic characters"
      ),
    lastName: yup
      .string()
      .required("Last Name is required")
      .matches(
        /^[a-zA-Z]+$/,
        "Last Name should only contain alphabetic characters"
      ),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: yup.string().required("Phone number is required"),

    linkedin: yup
      .string()
      .matches(
        /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,
        "Invalid LinkedIn profile link"
      )
      .required("LinkedIn profile link is required"),

    positionApplied: yup.string().required("Position Applied is required"),

    aboutUs: yup.string().required("How did you hear about us is required"),
    resume: yup
      .mixed()
      .test("fileFormat", "This field is required", (value) => {
        if (!value) return true; // Allow empty value
        const allowedFormats = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return allowedFormats.includes(value[0]?.type);
      }),
    coverLetter: yup.string(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("called");
    var AllJobFormDetails = JSON.parse(
      localStorage.getItem("AllJobFormDetails") || "[]"
    );
    AllJobFormDetails.push(data);
    localStorage.setItem(
      "AllJobFormDetails",
      JSON.stringify(AllJobFormDetails)
    );
    setFormData(data);
    setIsFormValid(true);
    setRightVisible(!isRightVisible);
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
      <div className='flex justify-center items-center bg-[#008BC2] flex-col gap-4 text-white py-16'>
        <h1 className="text-2xl md:text-6xl font-bold text-center">Job Application</h1>
        <h4 className="text-lg text-center">
          {" "}
          Please complete the form below to apply for a position with us.
        </h4>
      </div>      <div>

        <div className="w-full flex flex-col md:flex-row py-8">
          {isRightVisible && (
            <div className="bg-[#fff] w-full md:w-1/2  relative rounded-r-3xl">
              <form
                className=" text-black pt-8 flex  flex-row justify-center items-center pl-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-12 w-full">
                    <div className="w-60 ">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium leading-6 text-black "
                      >
                        First name
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <p className="text-[#d00000] ">
                          {errors.firstName.message}
                        </p>
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
                          placeholder="Last name"
                          className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                          {...register("lastName")}
                        />
                        {errors.lastName && (
                          <p className="text-[#d00000]">
                            {errors.lastName.message}
                          </p>
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
                        {...register("email")}
                        placeholder=" ex:myname@gmail.com"
                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                      />
                      {errors.email && (
                        <p className="text-[#d00000]">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="w-60">
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium leading-6 text-black"
                      >
                        Phone Number
                      </label>
                      <div>
                        <Controller
                          name="phoneNumber"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <PhoneInput
                              {...field}
                              country={"in"} // Specify initial country
                              inputStyle={{
                                width: "240px",
                                border: "none",
                                borderRadius: "10px",
                              }}
                              className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                              inputProps={{
                                name: "phoneNumber",
                                required: true,
                              }}
                            />
                          )}
                        />
                        {errors.phoneNumber && (
                          <p className="text-[#d00000]">
                            {errors.phoneNumber.message}
                          </p>
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
                          placeholder=" LinkedIn Profile"
                          id="LinkedIn"
                          {...register("linkedin")}
                          className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                        />
                        {errors.linkedin && (
                          <p className="text-[#d00000]">
                            {errors.linkedin.message}
                          </p>
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
                        {...register("positionApplied")}
                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                      >
                        <option value="">Please select</option>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="BackEnd">BackEnd</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.positionApplied && (
                        <p className="text-[#d00000]">
                          {errors.positionApplied.message}
                        </p>
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
                        {...register("aboutUs")}
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
                        <p className="text-[#d00000]">
                          {errors.aboutUs.message}
                        </p>
                      )}
                    </div>

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
                          {...register("resume")}
                          className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] w-full form-control block  rounded-md  py-1.5 text-black ring-1 ring-inset  placeholder:text-black focus:ring-5 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none hover:ring-blue-400"
                        />
                        {errors.resume && (
                          <p className="text-[#d00000]">
                            {errors.resume.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

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
                        placeholder="Write something... (optional)"
                        {...register("coverLetter")}
                        className="shadow-2xl border border-blue-gray-900 md:w-[250px] md:h-[50px] block w-full rounded-md py-1.5 text-black  ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 hover:ring-blue-400"
                      ></textarea>
                      {errors.coverLetter && (
                        <p className="text-[#d00000]">
                          {errors.coverLetter.message}
                        </p>
                      )}
                    </div>
                    <div className="w-60 pb-8">
                      <button
                        type="submit"
                        className="rounded bg-black px-9 md:px-4 py-2 text-white items-center md:w-[250px]  w-60 "
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}

          {!isRightVisible && (
            <div className="w-full lg:hidden">
              <div className="bg-gradient-to-r from-green-500 via-cyan-500 to-orange-400 rounded-l-3xl h-[566px] flex flex-col items-center justify-center text-black mt-[-60px]">
                <div className="mb-8 animate-bounce">
                  <img src="https://freepngimg.com/thumb/green_tick/27890-7-green-tick-picture-thumb.png" alt="Logo" className="" />
                </div>
                <div className="text-center flex justify-center items-center flex-row">
                  <div className="text-3xl font-bold mb-2">
                    Thank You for Choosing <br /><span className="text-3xl text-blue-gray-800">SPY D Technology</span> !
                  </div>

                </div>
                <p className="text-lg px-8 text-center">
                  Your application has reached us, and we appreciate your interest in joining SPY D Technology. We'll carefully review your details and be in touch soon. Best of luck on your journey with us!
                </p>


                <Link to="/">
                  <button className="text-blue-900 underline">
                    Go to Home Page ---&#62;
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className={`w-1/2 hidden lg:block ${isRightVisible ? "absolute" : ""}`}>
            <motion.div
              className="h-[60px] bg-primarycolors-green relative"
              initial={{ x: isRightVisible ? 0 : "100%" }}
              animate={{ x: isRightVisible ? "100%" : 0 }}
              transition={{ duration: 0.5 }}
            >
              {
                isRightVisible ?
                  <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-800  rounded-l-3xl h-[566px] flex flex-col items-center justify-center text-black">
                    <div className="flex flex-col justify-center items-center">
                      <div className="mb-8 ">
                        <img src={Resume} alt="Logo" className="w-80 h-60" />
                      </div>
                      <p className="text-center text-3xl font-bold mb-2 bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-500 bg-clip-text">
                        Embark on a Journey with Us
                      </p>
                      <p className="text-lg text-center px-6">
                        Unleash the full potential of our platform by sharing a bit about yourself. Your journey begins here – let's make it extraordinary together!
                      </p>
                    </div>
                  </div>
                  :
                  <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-800 rounded-3xl h-[566px] flex flex-col items-center justify-center text-white">
                    <div className="text-center flex flex-col justify-center items-center  gap-4">
                      <div className=" ">
                        <img src={tech} alt="Logo" className="w-80 h-60" />
                      </div>
                      <p className="text-black text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-transparent bg-clip-text">
                        Welcome to the World of <br /> <span className="text-3xl text-blue-gray-800">SPY D Technology!</span>
                      </p>
                      <p className="text-lg px-8 text-black">
                        Embrace the beauty of your individuality, as we embark on an extraordinary and transformative digital odyssey together. Within the boundless possibilities of technology, let's collaborate to redefine the future, and it all begins with the unique journey you bring to the table!
                      </p>
                    </div>
                  </div>

              }


            </motion.div>
            <div />
            {!isRightVisible && (
              <motion.div
                initial={{ x: isRightVisible ? "100%" : 0 }}
                animate={{ x: isRightVisible ? 0 : "100%" }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-r from-green-500 via-cyan-500 to-orange-400 rounded-l-3xl h-[566px] flex flex-col items-center justify-center text-black mt-[-60px]">
                  <div className="mb-8 animate-bounce">
                    <img src="https://freepngimg.com/thumb/green_tick/27890-7-green-tick-picture-thumb.png" alt="Logo" className="" />
                  </div>
                  <div className="text-center flex justify-center items-center flex-row">
                    <div className="text-3xl font-bold mb-2">
                      Thank You for Choosing <br /><span className="text-3xl text-blue-gray-800">SPY D Technology</span> !
                    </div>

                  </div>
                  <p className="text-lg px-8 text-center">
                    Your application has reached us, and we appreciate your interest in joining SPY D Technology. We'll carefully review your details and be in touch soon. Best of luck on your journey with us!
                  </p>


                  <Link to="/">
                    <button className="text-blue-900 underline">
                      Go to Home Page ---&#62;
                    </button>
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

          <div
            className={`lg:hidden flex flex-col mr-16 justify-center items-center w-full ${isFormValid ? "md:hidden" : ""
              }`}
          >
            <div className="pt-16">
              <img src={Login} className="md:w-[450px] w-[300px] " />
            </div>
            <div className="pt-16">
              <img src={Resume} className="md:w-[450px] w-[300px] " />
            </div>
          </div>
        </div>

      </div>
      <div className="relative">
        <Approch />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Form2;
