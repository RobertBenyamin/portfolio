import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-8 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Robert Benyamin</div>
        <div className="space-x-8">
          <a href="#about" className="mx-2 text-lg">
            About
          </a>
          <a href="#skills" className="mx-2 text-lg">
            Skills
          </a>
          <a href="#portfolio" className="mx-2 text-lg">
            Portfolio
          </a>
          <a href="#experience" className="mx-2 text-lg">
            Experience
          </a>
          <a href="#contact" className="mx-2 text-lg">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
