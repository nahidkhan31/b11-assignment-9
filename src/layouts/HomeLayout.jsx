import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import LeftAside from "./homelayout/LeftAside";

const HomeLayout = () => {
  return (
    <div className="w-11/12 mx-auto my-4 grid grid-cols-12">
      <aside className="col-span-3">
        <LeftAside></LeftAside>
      </aside>

      <section className="col-span-9">
        <Navbar></Navbar>

        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default HomeLayout;
