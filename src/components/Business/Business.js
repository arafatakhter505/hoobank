import React from "react";
import { send, shield, star } from "../../assets";
import Button from "../Button";
import Feature from "./Feature";

const Business = () => {
  return (
    <div
      id="features"
      className="lg:px-20 md:px-8 px-6 my-20 flex items-center justify-between flex-col-reverse md:flex-row"
    >
      <div className="md:w-1/2">
        <h2 className="text-white lg:text-5xl md:text-4xl text-2xl font-semibold">
          You do the business,
          <br /> we'll handle the money.
        </h2>
        <p className="py-6">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button text={"Get Started"} />
      </div>
      <div className="md:w-1/2">
        <Feature
          icon={star}
          title={"Rewards"}
          text={
            "The best credit cards offer some tantalizing combinations of promotions and prizes"
          }
        />
        <Feature
          icon={shield}
          title={"100% Secured"}
          text={
            "We take proactive steps make sure your information and transactions are secure."
          }
        />
        <Feature
          icon={send}
          title={"Balance Transfer"}
          text={
            "A balance transfer credit card can save you a lot of money in interest charges."
          }
        />
      </div>
    </div>
  );
};

export default Business;
