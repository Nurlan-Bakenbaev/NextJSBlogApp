"use client";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "./Links";
import Link from "next/link";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SimpleBackdrop from "./LayOver";
import ModeSwitcher from "./Switcher/ModeSwitcher";
const Navbar = () => {
  const { mode } = useSelector((state) => state?.themeMode);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      console.log(screenSize);
      if (screenSize > 425) {
        setIsOpenMenu(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="h-[80px] drop-shadow-lg relative border-b z-50 ">
      <div className="flex flex-row h-full w-full justify-between items-center px-5">
        <div> My Posts</div>
        <h1 className=" text-xl md:text-4xl font-bold">NEXT-Blog</h1>
        <div className="flex gap-3 items-center">
          {/*HERE GOES SWITCHER */}
          <ModeSwitcher />
          {MenuLinks.map((link, id) => (
            <div className="hidden md:block" key={id}>
              <Link className="hover:text-blue-300 " href={link.link}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className="block md:hidden z-50 ">
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
              <CloseIcon sx={{ fontSize: "35px" }} />
            ) : (
              <MenuIcon sx={{ fontSize: "35px" }} />
            )}
          </button>
        </div>
      </div>
      <div className="absolute  top-0 right-0 z-30">
        <MobileMenu isOpenMenu={isOpenMenu} />
      </div>
      <div
        className="absolute w-full h-screen "
        onClick={() => setIsOpenMenu(false)}
      >
        <SimpleBackdrop isOpenMenu={isOpenMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
