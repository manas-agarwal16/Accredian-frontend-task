import React from "react";

const Input = ({
  className = "w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all",
  ...props
}) => {
  return <input {...props} className={className} />;
};

export default Input;
