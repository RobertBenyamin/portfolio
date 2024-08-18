import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-6 px-8 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Robert Benyamin</div>
        <div className="space-x-8 hidden md:flex">
          <a href="#about" className="mx-2 text-lg">
            About
          </a>
          <a href="#skills" className="mx-2 text-lg">
            Skills
          </a>
          <a href="#projects" className="mx-2 text-lg">
            Projects
          </a>
          <a href="#experience" className="mx-2 text-lg">
            Experience
          </a>
          <a href="#contact" className="mx-2 text-lg">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 mt-4">
          <a href="#about" className="text-lg" onClick={toggleMenu}>
            About
          </a>
          <a href="#skills" className="text-lg" onClick={toggleMenu}>
            Skills
          </a>
          <a href="#projects" className="text-lg" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#experience" className="text-lg" onClick={toggleMenu}>
            Experience
          </a>
          <a href="#contact" className="text-lg" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
