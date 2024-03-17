import React, { useState } from 'react';
import ChatIcon from './ChatIcon ';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle bot responses
  const handleBotResponse = (userMessage) => {
    // Convert user's message to lowercase for case-insensitive matching
    const lowercaseMessage = userMessage.toLowerCase();

    // Default response if no specific pattern is matched
    let botResponse = `You said: "${userMessage}". I'm just a simple bot, I don't know how to respond to that yet!`;

    // Check for specific keywords or patterns in the user's message
    if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (lowercaseMessage.includes("how are you")) {
      botResponse = "I'm just a bot, so I don't have feelings, but thank you for asking!";
    } else if (lowercaseMessage.includes("help")) {
      botResponse = "Sure, I'm here to help. What do you need assistance with?";
    } else if (lowercaseMessage.includes("bye") || lowercaseMessage.includes("goodbye")) {
      botResponse = "Goodbye! Feel free to reach out if you need assistance later.";
    } else if (lowercaseMessage.includes("thanks") || lowercaseMessage.includes("thank you")) {
      botResponse = "You're welcome!";
    }

    return botResponse;
  };

  // Function to handle sending user messages
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message to the list
    setMessages([...messages, { text: inputValue, sender: 'user' }]);
    setInputValue('');

    // Get bot response and add it to the list
    const botResponse = handleBotResponse(inputValue);
    setMessages([...messages, { text: botResponse, sender: 'bot' }]);
  };

  // Function to handle closing the chat window
  const handleCloseChat = () => {
    setIsOpen(false);
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
              <button
                type="button"
                onClick={handleCloseChat}
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
