"use client";
import { useState } from 'react';
import { TbMessageChatbot } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai"; // Close ikonu

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChatbot}
        className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition duration-200"
      >
        {isOpen ? (
          <AiOutlineClose className="text-3xl" /> // Açıkken close ikonu
        ) : (
          <TbMessageChatbot className="text-5xl" /> // Kapalıyken chatbot ikonu
        )}
      </button>

      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mt-2 w-80">
          <div className="flex items-start space-x-2">
            <TbMessageChatbot className="text-3xl text-green-600" />
            <div>
              <h2 className="font-bold text-lg">Salam!</h2>
              <p className="text-gray-600">Sizə necə kömək edə bilərəm?</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <button 
              onClick={() => window.open('/expert', '_self')} 
              className="w-full text-left p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Ekspertlə əlaqə
            </button>
            <button 
              onClick={() => window.open('/contact', '_self')} 
              className="w-full text-left p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Bizimlə əlaqə
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
