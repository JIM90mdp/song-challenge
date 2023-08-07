import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar">
      {/* <div className="w-screen flex justify-center items-center p-4 dark-green"> */}
      <ul className="navbar_list">
        <li className="navbar_item">
          {/* <li className="p-4"> */}
          <NavLink to="/" className="navbar_link">
            Home
          </NavLink>
        </li>
        {/* <ul className="hidden sm:flex"> */}
        <li className="navbar_item">
          {/* <li className="p-4"> */}
          <NavLink to="/home" className="navbar_link">
            Song-Challenge
          </NavLink>
        </li>
        <li className="navbar_item">
          {/* <li className="p-4"> */}
          <NavLink to="/about" className="navbar_link">
            About
          </NavLink>
        </li>
      </ul>

      {/* Mobile Button */}
      <div onClick={handleNav} className="mobile-button">
        {/* <div onClick={handleNav} className="block sm:hidden z-10"> */}
        {nav ? (
          <AiOutlineClose size={20} className="mobile-button--closed" />
        ) : (
          // <AiOutlineClose size={20} className="text-white" />
          <AiOutlineMenu size={20} />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav ? "navbar__mobile-menu--open" : "navbar__mobile-menu--closed"
        }
        // className={
        //   nav
        //     ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white"
        //     : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
        // }
      >
        <ul>
          <li className="navbar_item">
            {/* <li className="p-4"> */}
            <NavLink to="/" className="navbar_link">
              Home
            </NavLink>
          </li>
          {/* <ul className="hidden sm:flex"> */}
          <li className="navbar_item">
            {/* <li className="p-4"> */}
            <NavLink to="/home" className="navbar_link">
              Song-Challenge
            </NavLink>
          </li>
          <li className="navbar_item">
            {/* <li className="p-4"> */}
            <NavLink to="/about" className="navbar_link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
