import { Box } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const NavBar2 = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <Box className="text-green-600" size={50} />
        <h2 className="text-2xl font-bold">Subscription Box</h2>
      </div>
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
