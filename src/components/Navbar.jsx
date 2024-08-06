import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Robert Benyamin</div>
        <div>
          <a href="#about" className="mx-2">
            About
          </a>
          <a href="#portfolio" className="mx-2">
            Portfolio
          </a>
          <a href="#contact" className="mx-2">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
