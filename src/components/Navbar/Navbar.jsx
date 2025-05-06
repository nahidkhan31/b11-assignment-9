import React, { useEffect, useState } from "react";
import Link from "./Link";
import { Box, Menu, X } from "lucide-react";
import user from "../../assets/user.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const links = menuData.map((route) => <Link route={route}></Link>);
  useEffect(() => {
    fetch("./Navigation.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data));
  }, []);
  // console.log(menuData);

  return (
    <div className="">
      <nav className="all flex justify-between text-black">
        <div className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden lg:hidden cursor-pointer" />
          ) : (
            <Menu className="md:hidden lg:hidden cursor-pointer"></Menu>
          )}

          <ul
            className={`md:hidden lg:hidden absolute duration-1000
              ${open ? "top-14" : "-top-60"}
               bg-amber-200 rounded-3xl`}>
            {links}
          </ul>
          <Box />
          <h3 className="text-black font-bold text-xl">Subscription Box </h3>
        </div>
        <div>
          <ul className="md:flex hidden">{links}</ul>
        </div>
        <div className="flex gap-2">
          <img src={user} alt="" />
          <button className="btn btn-primary">Sign In</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
