import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-sky-300 text-black px-4 py-2 font-semibold rounded">
      {text}
    </button>
  );
};

export default Button;
