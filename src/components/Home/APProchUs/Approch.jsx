import React, { useEffect } from "react";
import { layout } from "../../../style";
import Logo from "../../assets/logo.png";
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuMapPin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const Approch = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div
      className=""
        style={{
          backgroundImage:
            'url("https://www.aspirantsoftsolutions.com/img/slides/footer-bg.jpg")',
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 6,
          }}
        >
          <section className={`${layout.section} max-w-full  w-full`}>
            <div
              className={`${layout.sectionInfo} text-center`}
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className=" text-center ">
                <div className="flex justify-center items-center flex-row">
                  <div>
                    <img src={Logo} alt="sorry" className="" />
                  </div>
                  <p
                    className="font-poppins md:text-[30px] text-white"
                  >
                    Approach Us
                  </p>
                </div>

                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"
                  
                >
                  <div className="text-[40px] ml-[15%]">
                    <LuMapPin />
                  </div>
                  <div className="ml-3">REACH US</div>
                </div>
                <div className="mt-8 flex justify-end items-justify">
                  <p className="text-white w-[250px] ">
                    Meera complex Plot, No-852, 2nd floor
                    Madhapur Hyderabad, Telangana - 500081
                  </p>
                </div>
                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full leading-[80.8px]"
                >
                  <div className="text-[25px] ml-[20%]">
                    <FiPhoneCall />
                  </div>
                  <div className="ml-6">040-43334849</div>
                </div>
                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] text-white w-full"
                >
                  <div className="text-[25px] ml-[20%]">
                    <MdOutlineMarkEmailRead />
                  </div>
                  <div className="ml-6">info@spyd.com</div>
                </div>
                <div
                  className="flex justify-center items-center flex-row font-poppins xs:text-[10px] text-[15px] w-full py-10 text-light-blue-900 ml-[12%]"
                >
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                        x1="9.993"
                        x2="40.615"
                        y1="9.993"
                        y2="40.615"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2aa4f4"></stop>
                        <stop offset="1" stop-color="#007ad9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
                        x1="10.341"
                        x2="40.798"
                        y1="8.312"
                        y2="38.769"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#2aa4f4"></stop>
                        <stop offset="1" stop-color="#007ad9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
                        d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                        cx="19.38"
                        cy="42.035"
                        r="44.899"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#fd5"></stop>
                        <stop offset=".328" stop-color="#ff543f"></stop>
                        <stop offset=".348" stop-color="#fc5245"></stop>
                        <stop offset=".504" stop-color="#e64771"></stop>
                        <stop offset=".643" stop-color="#d53e91"></stop>
                        <stop offset=".761" stop-color="#cc39a4"></stop>
                        <stop offset=".841" stop-color="#c837ab"></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <radialGradient
                        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                        cx="11.786"
                        cy="5.54"
                        r="29.813"
                        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#4168c9"></stop>
                        <stop
                          offset=".999"
                          stop-color="#4168c9"
                          stop-opacity="0"
                        ></stop>
                      </radialGradient>
                      <path
                        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                      ></path>
                      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                      <path
                        fill="#fff"
                        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={layout.sectionImg}>
              <Card color="transparent" shadow={false}>
                <Typography
                  color="white"
                  className="mb-[-15px] font-normal md:text-[30px]"
                >
                  Request For Free Demo
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-80">
                  <div
                    className="mb-1 flex flex-col gap-y-6"
                  >
                    <Input color="white" label="Name" />
                    <Input color="white" label="Email" />
                    <Input color="white" label="Phone No" />
                    <div className="w-86 border-0">
                      <Textarea
                        color="blue"
                        label="Message"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <Button className="mt-6 w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </section>
        </div>

        {/* Background overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // opacity: 0.5,
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust the alpha value as needed
            zIndex: 2,
          }}
        />
      </div>
    </>
  );
};

export default Approch;
