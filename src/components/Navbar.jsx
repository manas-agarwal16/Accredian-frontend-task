import React from "react";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = ({ setDisplayReferralForm }) => {

  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur border-b border-gray-800 fixed">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Logo />
          </div>

          {/* Desktop Menu */}
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

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
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
      </div>
    </nav>
  );
};

export default Navbar;
