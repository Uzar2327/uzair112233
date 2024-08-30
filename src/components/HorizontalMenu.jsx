import React from "react";

const HorizontalMenu = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-8 text-white text-lg font-semibold">
        <li className="hover:text-yellow-400 transition-colors duration-300 ease-in-out cursor-pointer">
          Home
        </li>
        <li className="hover:text-yellow-400 transition-colors duration-300 ease-in-out cursor-pointer">
          About
        </li>
        <li className="hover:text-yellow-400 transition-colors duration-300 ease-in-out cursor-pointer">
          Services
        </li>
        <li className="hover:text-yellow-400 transition-colors duration-300 ease-in-out cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
