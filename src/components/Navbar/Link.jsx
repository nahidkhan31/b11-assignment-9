import React from "react";
import { NavLink } from "react-router";

const Link = ({ route }) => {
  return (
    <div>
      <li className="px-3 lg:mr-10 hover:bg-amber-600 hover:rounded-3xl">
        {/* <a href={route.path}>{route.name}</a> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-indigo-600 font-bold" : ""
          }
          to={route.path}>
          {route.name}
        </NavLink>
      </li>
    </div>
  );
};

export default Link;
