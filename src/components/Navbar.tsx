"use client";
import React, { useState } from "react";
import { MenuLinks } from "./Links";
import Link from "next/link";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "@/redux-toolkit/modeSlicer";
const Navbar = () => {
  const { mode } = useSelector((state) => state?.themeMode);
  console.log(mode);
  const dispatch = useDispatch();
  return (
    <nav className="h-[80px] ">
      <div className="flex justify-between items-center py-2">
        <div> right</div>
        <h1 className=" text-xl md:text-4xl font-bold">NEXT-Blog</h1>
        <div className="flex gap-3 items-center">
          <button
            className="px-5 py-1
            transition-all duration-500 ease-in-out bg-gray-200
             dark:bg-gray-800 text-gray-700 dark:text-gray-300
              hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full"
            onClick={() => dispatch(setMode())}
          >
            {mode ? (
              <span className="text-blue-300 ">
                {" "}
                <MdOutlineDarkMode className="text-xl" />
              </span>
            ) : (
              <span className=" text-yellow-500 ">
                {" "}
                <CiLight className="text-xl" />
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
      </div>
    </nav>
  );
};

export default Navbar;
