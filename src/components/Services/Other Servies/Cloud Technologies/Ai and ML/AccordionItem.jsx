import React, { useState } from 'react';

const Card = ({ image, description, background }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-64 h-80 overflow-hidden m-4">
      <div
        className={`w-full h-full absolute top-10 left-10 rounded-lg transition-transform duration-50 ${
          isHovered ? 'scale-150' : 'scale-150'
        }`}
        style={{
          backgroundImage: `url(${background || image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center duration-300">
          <p className="text-white text-center">{description}</p>
        </div>
      )}
    </div>
  );
};

const AI = () => {
  const cards = [
    {
      id: 1,
      image: 'image1.jpg',
      description: 'Description for Card 1',
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRQOmBvBkg6uZY9gXljyHsW6d7lPV3Wuozg&usqp=CAU',
    },
    {
      id: 2,
      image: 'image2.jpg',
      description: 'Description for Card 2',
      background: 'https://w0.peakpx.com/wallpaper/390/568/HD-wallpaper-artificial-intelligence-background-vectors-stock-psd-vision.jpg',
    },
    {
      id: 3,
      image: 'image3.jpg',
      description: 'Description for Card 3',
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDEDLkSJtphl1_MSMxjKncpHiR1yXALP8thDvzqov6ChLWKhcZEuFCAcNYwmkOQPXonQ&usqp=CAU',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          description={card.description}
          background={card.background}
        />
      ))}
    </div>
  );
};

export default AI;
