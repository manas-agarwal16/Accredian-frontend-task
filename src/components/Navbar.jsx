import React from "react";
import Logo from "./Logo";

const Navbar = ({ setDisplayReferralForm }) => {
  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur border-b border-gray-800 fixed">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Logo />
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                Benefits
              </a>
              <a
                href="#"
                className="relative z-10 cursor-pointer text-gray-300 hover:text-white px-3 py-2 rounded-md transition-colors"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
