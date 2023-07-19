import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md text-center relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={handleClose}
        >
          <FaTimes className="h-5 w-5" />
        </button>
        <h1 className="Advent Pro text-2xl font-bold mb-4">Welcome to my portfolio website!</h1>
        <p className="Merriweather"> 
            I created this website using JavaScript, HTML5, NodeJS, and Tailwind a CSS library.
            I was not familar with Tailwind at the beginning of this project, but
            I wanted to showcase my ability to learn new technologies quickly and succeed with them.
            Although I'm not a UX/UI designer, I designed the website in Figma and translated it into code. 
            I hope you enjoy getting to know me through my portfolio! Oh, and don't miss the magic of responsiveness 
            as you resize the page—it's a sight to behold! 😮 😮‍💨
        </p>
      </div>
    </div>
  );
};

export default Popup;