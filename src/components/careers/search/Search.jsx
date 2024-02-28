import React, { useState } from 'react';

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
    <div className='flex justify-center items-center pt-4 flex-col'>
      <input
        type="text"
        placeholder="Search Job"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>


      <div>
      <input
        type="text"
        placeholder="Search Job"
        
      />
      </div>
    </div>
  );
}


export default Search