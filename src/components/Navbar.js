import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", link: "home" },
    { id: 2, name: "About Us", link: "about" },
    { id: 3, name: "Features", link: "features" },
    { id: 4, name: "Solution", link: "solution" },
  ];
  return (
    <div className="navbar bg-base-100 text-white lg:px-20 md:px-8 px-6 py-4">
      <div className="navbar-start">
        <a href="#home">
          <img src={logo} alt="" className="w-48" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex w-1/2">
        <ul className="menu menu-horizontal p-0 ml-auto">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown ml-auto">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 right-4"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.link}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
