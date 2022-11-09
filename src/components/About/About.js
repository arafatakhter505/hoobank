import React from "react";
import { people01, people02, people03 } from "../../assets";
import FeedbackCard from "./FeedbackCard";

const About = () => {
  return (
    <div id="about" className="lg:px-20 md:px-8 px-6 my-20">
      <div className="md:flex items-center gap-20">
        <h2 className="text-white lg:text-5xl md:text-4xl text-2xl font-semibold mb-3 md:mb-0">
          What people are <br /> saying about us
        </h2>
        <p>
          Everything you need to accept card payments <br /> and grow your
          business anywhere on the planet.
        </p>
      </div>
      <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
        <FeedbackCard
          text={
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
          }
          img={people01}
          name={"Herman Jensen"}
          des={"Founder & Leader"}
        />
        <FeedbackCard
          text={
            "Money makes your life easier. If you're lucky to have it, you're lucky."
          }
          img={people02}
          name={"Steve Mark"}
          des={"Founder & Leader"}
        />
        <FeedbackCard
          text={
            "It is usually people in the money business, finance, and international trade that are really rich."
          }
          img={people03}
          name={"Kenn Gallagher"}
          des={"Founder & Leader"}
        />
      </div>
    </div>
  );
};

export default About;
