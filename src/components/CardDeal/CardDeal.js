import React from "react";
import { card } from "../../assets";
import Button from "./../Button";

const CardDeal = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 flex items-center justify-between flex-col-reverse md:flex-row">
      <div className="md:w-1/2">
        <h2 className="text-white lg:text-5xl md:text-4xl text-2xl font-semibold">
          Find a better card deal
          <br /> in few easy steps.
        </h2>
        <p className="py-6">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button text={"Get Started"} />
      </div>
      <div className="md:w-1/2">
        <img
          src={card}
          alt=""
          className="lg:w-2/3 md:w-11/12 ml-auto md:mb-0 mb-3"
        />
      </div>
    </div>
  );
};

export default CardDeal;
