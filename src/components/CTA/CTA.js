import React from "react";
import Button from "../Button";

const CTA = () => {
  return (
    <div id="solution" className="lg:px-20 md:px-8 px-6 my-20">
      <div className="md:flex items-center justify-between bg-gray-800 p-12 rounded-lg">
        <div>
          <h2 className="text-white lg:text-5xl md:text-4xl text-2xl font-semibold">
            Let's try our service now!
          </h2>
          <p className="mt-4 md:mb-0 mb-4">
            Everything you need to accept card payments <br /> and grow your
            business anywhere on the planet.
          </p>
        </div>
        <Button text={"Get Started"} />
      </div>
    </div>
  );
};

export default CTA;
