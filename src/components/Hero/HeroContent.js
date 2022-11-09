import React from "react";
import { arrowUp, discount } from "../../assets";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 pr-6">
      <div className="bg-gray-800 py-1 px-2 rounded-lg inline-block">
        <p className="flex items-center">
          <img src={discount} alt="" />
          <span>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH</span> ACCOUNT
          </span>
        </p>
      </div>
      <div className="py-8">
        <div className="flex items-start">
          <h2 className="lg:text-7xl md:text-5xl text-3xl mr-2 font-semibold text-white">
            The Next <br /> <span className="text-sky-300">Generation</span>
          </h2>
          <button className="border border-sky-300 text-sky-300 rounded-full flex items-center justify-center">
            <div className="m-4">
              <div className="flex">
                <span>Get</span>
                <img src={arrowUp} alt="" />
              </div>
              <div className="text-left">Started</div>
            </div>
          </button>
        </div>
        <div>
          <h2 className="lg:text-7xl md:text-4xl text-3xl font-semibold text-white">
            Payment Method.
          </h2>
        </div>
      </div>
      <p>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
  );
};

export default HeroContent;
