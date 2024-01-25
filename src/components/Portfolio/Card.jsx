import React, { useState } from "react";
import Img1 from "../assast/webDesign1.jpg";
import Img2 from "../assast/webDesign2.jpeg";
import Img3 from "../assast/webDesign3.jpg";
import Img4 from "../assast/phone6.png";
import Img5 from "../assast/phone5.png";
import Img6 from "../assast/phone4.png";
import Img7 from "../assast/Desktop1.png";
import Img8 from "../assast/Desktop2.jpg";
import Img9 from "../assast/Desktop3.png";
import Img10 from "../assast/webApp1.png";
import Img11 from "../assast/webApp2.png";
import Img12 from "../assast/webApp3.png";


const Card = () => {
  const [filteredTitle, setFilteredTitle] = useState('All'); 
  const allProjects = [
    { id: 1, title: "WEB DESIGN", image: Img1 },
    { id: 2, title: "WEB DESIGN", image: Img2 },
    { id: 3, title: "WEB DESIGN", image: Img3 },
    { id: 4, title: "MOBILE APPLICATION", image: Img4 },
    { id: 5, title: "MOBILE APPLICATION", image: Img5 },
    { id: 6, title: "MOBILE APPLICATION", image: Img6 },
    { id: 7, title: "WEB APPLICATION", image: Img7 },
    { id: 8, title: "WEB APPLICATION", image: Img8 },
    { id: 9, title: "WEB APPLICATION", image: Img9 },
    { id: 10, title: "DESKTOP APPLICATION", image: Img10 },
    { id: 11, title: "DESKTOP APPLICATION", image: Img11 },
    { id: 12, title: "DESKTOP APPLICATION", image: Img12 },
  ];

  // Filtered products based on the selected title  
  const filteredProducts = filteredTitle === "All"
    ? allProjects
    : allProjects.filter(product => product.title === filteredTitle);

  return (
    <>
      <div className="flex justify-center items-center py-6 flex-col ">
        <select
          id="filterDropdown"
          onChange={(e) => setFilteredTitle(e.target.value)}
          className="border-none shadow-xl rounded-md mt-2 p-2"
        >
          <option value="All" className="font-sm  py-4 border border-b-8">All</option>
          <option value="WEB DESIGN" className="font-sm py-4 border border-b-8 ">WEB DESIGN</option>
          <option value="MOBILE APPLICATION" className="font-sm py-4 border border-b-8">MOBILE APPLICATION</option>
          <option value="WEB APPLICATION" className="font-sm py-4 border border-b-8">WEB APPLICATION</option>
          <option value="DESKTOP APPLICATION" className="py-4">DESKTOP APPLICATION</option>
        </select>
      </div>


      <div>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-center">
            {filteredProducts.map(product => (
              <>
                <div key={product.id} className="mx-auto relative mb-12 cursor-pointer ">
                  <img src={product.image} alt={product.title}
                    className="h-[240px] w-full hover:scale-105 transition-all duration-500 shadow-2xl"
                  />
                  <div
                    className="text-center px-4 py-8 bg-white shadow-lg rounded-md
                md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12 hover:-translate-y-4 transition-all duration-300"
                  >
                    <p>{product.title}</p>
                  </div>

                </div>


              </>

            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;



