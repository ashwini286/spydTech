import React from 'react';

const ChatIcon = ({ onClick }) => {
  return (
    <div className="fixed bottom-8 right-8 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    </div>
  );
};

export default ChatIcon;
