import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-4">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
