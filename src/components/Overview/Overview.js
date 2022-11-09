import React from "react";

const Overview = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 flex items-center justify-between flex-wrap flex-col md:flex-row">
      <div className="flex items-center lg:mb-0 mb-3">
        <span className="text-white text-4xl text-bold">3800+</span>
        <span className="md:text-xl text-sky-300 ml-3">USER ACTIVE</span>
      </div>
      <span className="invisible lg:visible">|</span>
      <div className="flex items-center lg:mb-0 mb-3">
        <span className="text-white text-4xl text-bold">230+</span>
        <span className="md:text-xl text-sky-300 ml-3">TRUSTED BY COMPANY</span>
      </div>
      <span className="invisible lg:visible">|</span>
      <div className="flex items-center lg:mb-0 mb-3">
        <span className="text-white text-4xl text-bold">$230M+</span>
        <span className="md:text-xl text-sky-300 ml-3">TRANSACTION</span>
      </div>
    </div>
  );
};

export default Overview;
