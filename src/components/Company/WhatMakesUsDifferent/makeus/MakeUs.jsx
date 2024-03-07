import React from "react";
const MakeUs = () => {
  return (
    <>
      <div className="border border-blue-800 py-8 md:p-24 mt-8  bg-[#0C4971]">
        <p className="text-center lg:text-4xl text-xl">
          What makes us different from other software companies
        </p>
      </div>
      <div className="flex  flex-col-reverse md:flex-row  items-center justify-center  w-full">
        <div className="md:w-[620px] md:h-[560px] text-white flex justify-center items-justify">
          <div>
            <img
              src="https://media.istockphoto.com/id/1409309926/photo/trust-word-on-a-jigsaw-puzzle.jpg?s=612x612&w=0&k=20&c=tY31LoleNPuwv05xDWdNITtQjCowSK0PlnLNEi6RpSU="
              alt=""
              className="md:mt-32 shadow-xl"
            />
          </div>
        </div>

        <div></div>

        <div className="md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ">
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className="text-[#656565]"> Trust </h1>
          </div>
          <div className="py-4  text-[#656565] md:leading-8 flex justify-center items-center flex-col">
            <li>
              Our clients trust is paramount to us, we know this is earned not
              assumed and work accordingly.
            </li>
            <li className="pt-8">
              We view our clients as partners, we're here to help optimize your
              business and work tirelessly to ensure your success.
            </li>
          </div>
        </div>
      </div>

      {/* 2nd card */}
      <div className="flex flex-col md:flex-row  items-center justify-center  w-full ">
        <div className="md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ">
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className="text-[#656565]"> Transparency </h1>
          </div>
          <div className="py-4  text-[#656565] md:leading-8 ">
            <li>
              We adopt an approach that ensures our customers receive absolute
              clarity about the services we offer, and take pride in delivering
              exactly what is promised - delivered on time and within budget.
              You can be assured there will be no unwelcome surprises!
            </li>
          </div>
        </div>
        <div></div>
        <div className="md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ">
          <div>
            <img
              src="https://www.customerservice.ae/wp-content/uploads/2015/07/Transparency.jpg"
              alt=""
              className="md:ml-[130px] shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* 3rd card */}
      <div className="flex  flex-col-reverse md:flex-row  items-center justify-center  w-full ">
        <div className="md:w-[620px] md:h-[560px] text-white flex justify-center items-justify">
          <div>
            <img
              src="https://storage.needpix.com/rsynced_images/reliability-1992960_1280.jpg"
              alt=""
              className=" shadow-xl"
            />
          </div>
        </div>
    <div className="md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ">
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className="text-[#656565] pl-8"> Reliability </h1>
          </div>
          <div className="py-4  text-[#656565] md:leading-8 ">
            <li>
              We only ever make promises we can keep. Our reliability helps us
              develop great relationships with our clients. In short, if there
              are any delays or problems delivering what we have promised we
              will always notify you at the earliest possible opportunity and
              never brush anything under the carpet.
            </li>
          </div>
        </div>
      </div>

      {/* 4th Card */}
      <div className="flex flex-col md:flex-row  items-center justify-center  w-full ">
        <div className="md:w-[620px] md:h-[560px] flex justify-center items-justify flex-col md:pl-24 pl-4 ">
          <div className="md:text-3xl md:font-extrabold text-xl mt-10 font-bold">
            <h1 className="text-[#656565]"> Honesty </h1>
          </div>
          <div className="py-4  text-[#656565] md:leading-8 pr-8">
            <li>
              Our approach is based on honesty and part of that is acknowledging
              that while we deliver 99+% of our work accurately and on schedule
              we can sometimes make errors. To ensure valuable long term
              relationships, both for our clients, and our business, in the
              unlikely event we do get something wrong we'll take responsibility
              and work with you to resolve them quickly, efficiently and with
              utmost integrity.
            </li>
          </div>
        </div>
        <div className="md:w-[620px] md:h-[560px] text-white flex justify-center items-justify flex-col ">
          <div>
            <img
              src="https://media.licdn.com/dms/image/C4E12AQFU5aAF0XmHTQ/article-cover_image-shrink_720_1280/0/1520106180449?e=2147483647&v=beta&t=-FUy5BexvOKfxBs1FEjPWIKNHVs22omjDDIdH6P4Tl4"
              alt=""
              className=" shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeUs;
