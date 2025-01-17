import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`bg-customYellow text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
