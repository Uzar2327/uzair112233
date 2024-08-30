import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="text-white bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition duration-300 ease-in-out focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-48 mt-2 z-10">
          <ul className="p-2">
            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">
              Menu Item 1
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">
              Menu Item 2
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer">
              Sub Menu
              <ul className="ml-4 mt-1">
                <li className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                  Sub Item 1
                </li>
                <li className="py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                  Sub Item 2
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
