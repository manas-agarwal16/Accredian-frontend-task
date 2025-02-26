import React from "react";

const Input = ({
  className = "w-full p-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all",
  autofocus = false,
  ...props
}) => {
  return <input {...props} autoFocus={autofocus} className={className} />;
};

export default Input;
