import React, { useState, useEffect } from 'react';
import ChatIcon from './ChatIcon ';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle bot responses
  const handleBotResponse = (userMessage) => {
    // This is a placeholder for actual bot logic
    // For now, just return a simple response based on user's message
    const botResponse = `You said: "${userMessage}". I'm just a simple bot, I don't know how to respond yet!`;
    return botResponse;
  };

  // Function to handle sending user messages
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message to the list
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // If this is the first user message, display the welcome message
    if (messages.length === 0) {
      setMessages([
        { text: "Hi there! I'm your friendly chatbot.", sender: 'bot' },
        { text: 'How can I assist you today?', sender: 'bot' },
      ]);
      return;
    }

    // Get bot response and add it to the list
    const botResponse = handleBotResponse(inputValue);
    setMessages([...messages, { text: botResponse, sender: 'bot' }]);
  };

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden fixed bottom-20 right-8">
          <div className="p-4">
            <div className="mb-4">
              <div className="text-lg font-semibold">ChatBot</div>
              <div className="text-gray-500 text-sm">SpY D Team</div>
            </div>
            <div className="border-t border-gray-200" />
            <div className="mt-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex mb-2 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="mt-4 flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      )}
    </>
  );
};

export default ChatBot;
