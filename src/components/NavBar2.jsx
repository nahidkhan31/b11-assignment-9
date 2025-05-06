import React from "react";
import { NavLink } from "react-router";

const NavBar2 = () => {
  return (
    <div className="">
      <h2>Subscription Box</h2>
      <div className="flex flex-col justify-center gap-5 mt-10">
        <NavLink to="/">Boxes</NavLink>
        <NavLink to="/work">How It Works</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/Pricing">Pricing</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
      </div>
    </div>
  );
};

export default NavBar2;
