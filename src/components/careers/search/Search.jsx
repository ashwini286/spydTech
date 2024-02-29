import React, { useState } from 'react';
import { IoLocation } from "react-icons/io5";
function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dataArray = [
    { id: 1, name: 'ReactJs' },
    { id: 2, name: 'Java Developer' },
    { id: 3, name: 'Web Development' },
    { id: 4, name: 'Devops Developer' },
    { id: 5, name: 'Web Deginer' },
    { id: 6, name: 'Python Developer' },
    { id: 7, name: 'SQL Developer' },
    { id: 8, name: 'JavaScript Developer' },
    { id: 9, name: 'Figma Deginer' },
    { id: 10, name: 'Php Developer' }
  ];

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Perform search on dataArray
    const results = dataArray.filter(item => {
      // Customize this logic as per your object structure
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  };

  return (
    <>
      <div className='flex justify-center items-center  flex-row pt-16'>
        <div className='flex justify-center items-center  flex-col'>
          <input
            type="text"
            placeholder="Search Job"
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {searchResults.map((item, index) => (
              <li className='border border-gray-400 p-4 ' key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="relative ">
      <IoLocation className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Location - Hyderabad"
        disabled
        className="pl-10 pr-4 py-2 rounded-md"
      />
    </div>
      </div>

    </>
  );
}


export default Search