import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
  const data = [
    {
      name: "Alice Brown",
      role: "UI/UX Designer",
      quote: "Designing interfaces that inspire and create seamless user experiences is my passion.",
      imageUrl: "https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb2RlcnxlbnwwfDB8fHwxNzEwMTY0NjIzfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Bob Johnson",
      role: "Backend Developer",
      quote: "Building robust server-side solutions that handle complex tasks efficiently drives my dedication to coding.",
      imageUrl: "https://media.istockphoto.com/id/1278976856/photo/happy-student-girl-at-high-school.jpg?s=612x612&w=0&k=20&c=XiJQHTm-LKgCr0s3hURY0ATGFfMZQH4B8gE6h2TlK4U=",
    },
    {
      name: "Eve Clark",
      role: "Software Engineer",
      quote: "Crafting elegant code for complex problems while ensuring scalability and performance is my expertise.",
      imageUrl: "https://media.istockphoto.com/id/1278979696/photo/happy-smiling-college-girl-studying-on-laptop.webp?b=1&s=170667a&w=0&k=20&c=2CoG_BFtJBobXJB-YuIspVtLrJfGr1tXs5Dq6Rf5tL4=",
    },
    {
      name: "Grace Wilson",
      role: "Front End Developer",
      quote: "Bringing designs to life with code and making them interactive and engaging for users is what drives me forward.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFRCSM3S5-aKGZjBaU0h0j67SzKugBmNKyXFtTMoIxQ_5MgOtko9hrRob1ochMGgdO7A&usqp=CAU",
    },
    // Add more data objects as needed
  ];
  
  
  const settings = {
    dots: true,
    arrows: true, // Keep arrows as true to display arrow buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-12 md:py-26">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative ">
        <div className="flex justify-center items-center md:flex-row flex-col">
          <div className="grid overflow-hidden md:grid-cols-2 bg-white rounded-xl ">
            <aside className="p-8 space-y-4 md:p-16">
              <h1>Our Testimonials</h1>
              <h2 className="text-2xl font-bold  md:text-5xl  ">
                What Our Customers Say!
              </h2>
              <p className=" md:text-lg text-gray-500">
                Read more about the consistent success our clients enjoy by
                using the Staffing Future platform and technology to drive
                results.
              </p>
              <div class="max-w-md mx-auto mt-3 sm:flex justify-center md:justify-start md:mt-6">
                <div class="rounded-full shadow">
                  <button
                    type="button"
                    class="flex justify-center  md:justify-start w-full px-8 py-3 text-base font-normal text-white bg-[#0284c7] border border-transparent rounded-full text-md hover:bg-[#172554] md:py-2 md:text-2xl md:px-5"
                  >
                    Start for free
                  </button>
                </div>
              </div>
            </aside>
            <aside className="relative hidden md:block">
              <div className="py- md:py-10 -mt-10 -ml-20">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative">
                  <Slider {...settings}>
                    {data.map((person, index) => (
                      <div key={index}>
                        <div className="text-sm leading-6">
                          <figure className="relative flex flex-col-reverse bg-slate-100 rounded-lg p-6 dark:bg-slate-800 dark:highlight-white/5">
                            <blockquote className="flex justify-center items-center mt-8 text-slate-700 dark:text-slate-300 border-4 border-[#0284c7] h-[250px] w-[100%] rounded-xl">
                              <p className="text-center px-8 text-xl">{person.quote}</p>
                            </blockquote>
                            <figcaption className="flex items-center space-x-4">
                              <img
                                src={person.imageUrl}
                                alt=""
                                className="flex-none w-24 h-24 rounded-full border-4 border-[#0284c7] object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                              <div className="flex-auto">
                                <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                                  {person.name}
                                </div>
                                <div className="mt-0.5 dark:text-slate-300">
                                  {person.role}
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
