import React from "react";
import HeroContent from "./HeroContent";
import HeroImg from "./HeroImg";

const Hero = () => {
  return (
    <div
      id="home"
      className="lg:pl-20 md:pl-8 pl-6 my-6 flex items-center justify-between md:flex-row flex-col-reverse"
    >
      <HeroContent />
      <HeroImg />
    </div>
  );
};

export default Hero;
