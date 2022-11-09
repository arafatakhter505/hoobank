import React from "react";

const Feature = ({ icon, title, text }) => {
  return (
    <div className="flex items-center mb-3 hover:bg-gray-800 p-3 rounded-lg transition-all">
      <div className="bg-[#01131A] p-3 rounded-full mr-3">
        <img src={icon} alt="" />
      </div>
      <div>
        <h3 className="text-xl text-white">{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
