import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 bg-gray-200 rounded-lg">
        {children}
      </button>
    </div>
  );
};

export default Button;
