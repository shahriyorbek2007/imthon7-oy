import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { Link } from "react-router-dom";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      to: "/",
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      to: "/",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      to: "",
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      to: "",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      to: "",
    },
    {
      name: "SERIES",
      icon: HiTv,
      to: "",
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] 
        md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Link key={item.name} to={item.to}>
              <HeaderItem name={item.name} Icon={item.icon} />
            </Link>
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {localStorage.getItem("authUser") === null ? (
        <Link to="/login" className="btn btn-secondary">
          Sign Up
        </Link>
      ) : (
        <div className="flex items-center gap-5">
          <p className="w-20 text-center">
            {JSON.parse(localStorage.getItem("authUser")).displayName}
          </p>
          <img
            className="w-12 h-12 rounded-full"
            src={JSON.parse(localStorage.getItem("authUser")).photoURL}
          />
        </div>
      )}
    </div>
  );
}

export default Header;
