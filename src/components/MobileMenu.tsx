import React, { useEffect } from "react";
import Link from "next/link";
import { MenuLinks } from "./Links";
import { useSelector } from "react-redux";
import ModeSwitcher from "./Switcher/ModeSwitcher";
import { signOut } from "next-auth/react";

interface MobileMenuProps {
  isOpenMenu: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu }) => {
  const { mode } = useSelector((state) => state?.themeMode);

  return (
    <div
      className={`mobile-menu ${isOpenMenu ? "open" : "closed"}
       bg-state-300  `}
    >
      {isOpenMenu && (
        <div
          className={` ${
            mode ? " bg-black " : " bg-white "
          } text-center md:hidden
           w-[280px] md:w-[300px]  py-12 px-10 `}
        >
          {MenuLinks.map((link, id) => (
            <div className="hover:font-bold  flex flex-col pt-10   " key={id}>
              <Link href={link.link}>
                <p className=" text-xl p-3 w-full  rounded-xl transition-all duration-200 ease-in-out hover:bg-blue-700">
                  {link.label}
                </p>
              </Link>
            </div>
          ))}
          <div className="block md:hidden text-center text-lg m-10">
            {status === "unauthenticated" ? (
              <Link href={"login"}> Login</Link>
            ) : (
              <button onClick={() => signOut()}> Logout</button>
            )}
          </div>
          <div className="flex justify-center p-5 md:hidden ">
            <ModeSwitcher />
          </div>
          <Link
            href={"/"}
            className="text-center border-b  w-full uppercase text-xl"
          >
            NextJS-Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
