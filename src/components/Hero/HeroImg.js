import React from "react";
import { robot } from "../../assets";

const HeroImg = () => {
  return (
    <div className="md:w-1/2">
      <img src={robot} alt="" className="w-11/12 ml-auto" />
    </div>
  );
};

export default HeroImg;
