import React from "react";
import { apple, bill, google } from "../../assets";

const Billing = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 md:flex items-center justify-between">
      <div>
        <img src={bill} alt="" className="lg:w-2/3 md:mb-0 mb-3" />
      </div>
      <div>
        <h2 className="text-white lg:text-5xl md:text-4xl text-2xl font-semibold">
          Easy control your
          <br /> billing & invoicing.
        </h2>
        <p className="py-6">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex items-center gap-4 cursor-pointer">
          <img src={apple} alt="" />
          <img src={google} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
