"use client";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "./Links";
import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "@/redux-toolkit/modeSlicer";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SimpleBackdrop from "./LayOver";
const Navbar = () => {
  const { mode } = useSelector((state) => state?.themeMode);

  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(setMode());
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <nav className="h-[80px] drop-shadow-lg relative  border-b ">
      <div className="flex justify-between items-center px-4 py-2">
        <div> My Posts</div>
        <h1 className=" text-xl md:text-4xl font-bold">NEXT-Blog</h1>
        <div className="flex gap-3 items-center">
          <button
            className={`px-5 py-1
            transition-all duration-500 ease-in-out 
              bg-slate-800
               text-gray-200 dark:text-gray-800
              hover:bg-gray-300 dark:hover:bg-blue-800 rounded-full`}
            onClick={toggleMode}
          >
            {mode ? (
              <span className="text-yellow-600 ">
                <CiLight className="text-xl" />
              </span>
            ) : (
              <span className=" text-blue-500">
                <MdOutlineDarkMode className="text-xl" />
              </span>
            )}
          </button>

          {MenuLinks.map((link, id) => (
            <div className="hidden md:block" key={id}>
              <Link className="hover:text-blue-300 " href={link.link}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
     
      <div className="absolute  top-[80px] right-[-6px] z-50">
        <MobileMenu isOpenMenu={isOpenMenu} />
      </div> <SimpleBackdrop />
    </nav>
  );
};

export default Navbar;
