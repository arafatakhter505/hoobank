import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../../assets";

const Clients = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 md:flex items-center grid grid-cols-2 gap-14">
      <div>
        <img src={airbnb} alt="" className="w-11/12" />
      </div>
      <div>
        <img src={binance} alt="" className="w-11/12" />
      </div>
      <div>
        <img src={coinbase} alt="" className="w-11/12" />
      </div>
      <div>
        <img src={dropbox} alt="" className="w-11/12" />
      </div>
    </div>
  );
};

export default Clients;
