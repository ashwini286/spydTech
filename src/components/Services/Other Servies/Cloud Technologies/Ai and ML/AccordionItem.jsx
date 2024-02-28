import React, { useState } from 'react';
import IMG1 from "./../../../../assets/AI and ML/AI-3.gif";


const Card = ({ image, header, description, background }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full md:w-1/4 lg:w-1/4 xl:w-1/4 h-96 overflow-hidden m-4 shadow-4xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full absolute top-0 left-0 rounded-lg transition-opacity duration-300"
        style={{
          backgroundImage: `url(${background || image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isHovered ? 0.7 : 1, // Adjust opacity on hover
        }}
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 p-10 flex flex-col justify-center items-center duration-300">
          <h1 className="text-gradient bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-3xl text-center">{header}</h1>
          <p className="text-white text-sm text-center p-5">{description}</p>
        </div>
      )}
    </div>
  );
};

const AI = () => {
  const cards = [
    {
      id: 1,
      image: 'https://cdn.dribbble.com/userupload/4874155/file/original-122e4763276398e06bc35a4f53d21991.gif',
      header: 'AI Application in E-Commerce',
      description: 'Artificial Intelligence technology is used to create recommendation engines through which you can engage better with your customers. These recommendations are made in accordance with their browsing history, preference, and interests. It helps in improving your relationship with your customers and their loyalty towards your brand.',
                  
      background: 'https://cdn.dribbble.com/userupload/4874155/file/original-122e4763276398e06bc35a4f53d21991.gif',
    },
    {
      id: 2,
      image: 'https://images.wsj.net/im-568211',
      header: 'Applications Of Artificial Intelligence in Education',
      description: 'Although the education sector is the one most influenced by humans, Artificial Intelligence has slowly begun to seep its roots into the education sector as well. Even in the education sector, this slow transition of Artificial Intelligence has helped increase productivity among faculties and helped them concentrate more on students than office or administration work.',
      background: 'https://images.wsj.net/im-568211',
    },
    {
      id: 3,
      image: 'https://gifdb.com/images/high/ai-humanoid-girl-neon-0byngj723ojhu25b.gif',
      header: 'Applications of Artificial Intelligence in Lifestyle',
      description: 'Automobile manufacturing companies like Toyota, Audi, Volvo, and Tesla use machine learning to train computers to think and evolve like humans when it comes to driving in any environment and object detection to avoid accidents.',
      background: 'https://gifdb.com/images/high/ai-humanoid-girl-neon-0byngj723ojhu25b.gif',
    },
    {
      id: 4,
      image: 'https://cdn.dribbble.com/users/41146/screenshots/1229553/dribbble-shot-mockup-map-800x600.gif',
      header: 'Applications of Artificial Intelligence in Navigation',
      description: 'Based on research from MIT, GPS technology can provide users with accurate, timely, and detailed information to improve safety. The technology uses a combination of Convolutional Neural Networks and Graph Neural Networks, which makes lives easier for users by automatically detecting the number of lanes and road types behind obstructions on the roads. AI is heavily used by Uber and many logistics companies to improve operational efficiency, analyze road traffic, and optimize routes.',
      background: 'https://cdn.dribbble.com/users/41146/screenshots/1229553/dribbble-shot-mockup-map-800x600.gif',
    },
    {
      id: 5,
      image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*Jwt-NggFZflXNmkndLYLJA.gif',
      header: 'Applications of Artificial Intelligence in Robotics',
      description: 'Robotics is another field where Artificial Intelligence applications are commonly used. Robots powered by AI use real-time updates to sense obstacles in its path and pre-plan its journey instantly. ',
      background: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*Jwt-NggFZflXNmkndLYLJA.gif',
    },
    {
      id: 6,
      image: 'https://imarticus.org/blog/wp-content/uploads/2021/12/jwfwfhw.gif',
      header: 'Applications of Artificial Intelligence in Social Media',
      description: 'Artificial intelligence and social media are a match made in heaven.Thats because AI can help marketers increase productivity and performance in their work and across popular social media platforms.',
      background: 'https://imarticus.org/blog/wp-content/uploads/2021/12/jwfwfhw.gif',
    },
    {
      id: 7,
      image: 'https://cdn.dribbble.com/users/872089/screenshots/9072270/media/3775e8583baca184fdaadff7f762adf3.gif',
      header: 'Applications of Artificial Intelligence in Chatbots',
      description: 'AI chatbots are chatbots that employ a variety of AI technologies, from machine learning that optimize responses over time to natural language processing (NLP) and natural language understanding (NLU) that accurately interprets user questions and matches them to specific intents.',
      background: 'https://cdn.dribbble.com/users/872089/screenshots/9072270/media/3775e8583baca184fdaadff7f762adf3.gif',
    },
    {
      id: 8,
      image: 'https://quantnex.com/wp-content/uploads/2022/12/101492-blue-security.gif',
      header: 'AI in Data Security',
      description: 'Artificial Intelligence (AI) improves security by enhancing threat detection, response capabilities, and overall cybersecurity measures in the following ways: Advanced Threat Detection and Real-time Monitoring: AI analyzes data for unusual patterns and behaviors, enabling early threat detection.',
      background: 'https://quantnex.com/wp-content/uploads/2022/12/101492-blue-security.gif',
    },
    {
      id: 9,
      image: 'https://cdn.dribbble.com/users/2203197/screenshots/6442463/scheme_11dr.gif',
      header: 'Applications of Artificial Intelligence in Marketing',
      description: 'Marketers may use AI to understand consumer behaviour, actions, and indicators. As a result, they can target the correct approach to the right individual in a timely and effective manner. Marketers can use AI in marketing to quickly process large amounts of data from social media, emails, and the Web.',
      background: 'https://cdn.dribbble.com/users/2203197/screenshots/6442463/scheme_11dr.gif',
    },
    
    
  ];

  return (
    <div className="flex flex-wrap justify-center gap-10" data-aos="fade-up">
      {cards.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          header={card.header}
          description={card.description}
          background={card.background}
        />
      ))}
    </div>
  );
};

export default AI;
