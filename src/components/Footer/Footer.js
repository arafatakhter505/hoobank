import React from "react";
import { facebook, instagram, linkedin, logo, twitter } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content  lg:px-20 md:px-8 px-6 py-14">
      <div className="footer">
        <div>
          <img src={logo} alt="" />
          <p className="mt-4">
            A new way to make the payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div>
          <span className="text-white text-xl">Usefull Links</span>
          <ul>
            <li className="link link-hover">Content</li>
            <li className="link link-hover">How it works</li>
            <li className="link link-hover">Create</li>
            <li className="link link-hover">Explore</li>
            <li className="link link-hover">Terms & Services</li>
          </ul>
        </div>
        <div>
          <span className="text-white text-xl">Community</span>
          <ul>
            <li className="link link-hover">Help Center</li>
            <li className="link link-hover">Partners</li>
            <li className="link link-hover">Suggestions</li>
            <li className="link link-hover">Blog</li>
            <li className="link link-hover">Newsletters</li>
          </ul>
        </div>
        <div>
          <span className="text-white text-xl">Partner</span>
          <ul>
            <li className="link link-hover">Our Partner</li>
            <li className="link link-hover">Become a Partner</li>
          </ul>
        </div>
      </div>
      <div className="footer items-center pt-8 border-t mt-10">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2021 - All right reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <img src={instagram} alt="" className="cursor-pointer" />
          <img src={facebook} alt="" className="cursor-pointer" />
          <img src={twitter} alt="" className="cursor-pointer" />
          <img src={linkedin} alt="" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
