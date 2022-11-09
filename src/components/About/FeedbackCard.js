import React from "react";
import { quotes } from "../../assets";

const FeedbackCard = ({ text, name, img, des }) => {
  return (
    <div className="cursor-pointer hover:bg-gray-800 px-6 py-8 rounded-lg transition-all">
      <img src={quotes} alt="" />
      <p className="my-6">{text}</p>
      <div className="flex items-center">
        <img src={img} alt="" className="w-16 mr-4" />
        <div>
          <h3 className="text-xl text-white">{name}</h3>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
