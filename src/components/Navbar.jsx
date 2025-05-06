import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="hidden md:flex md:gap-5 lg:flex lg:gap-5">
        <NavLink to="/">Boxes</NavLink>
        <NavLink to="/work">How It Works</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
