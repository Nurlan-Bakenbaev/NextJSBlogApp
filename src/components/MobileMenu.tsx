import React, { useEffect } from "react";
import Link from "next/link";
import { MenuLinks } from "./Links";
import { useSelector } from "react-redux";
import ModeSwitcher from "./Switcher/ModeSwitcher";

interface MobileMenuProps {
  isOpenMenu: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu }) => {
  const { mode } = useSelector((state) => state?.themeMode);

  return (
    <div
      className={`mobile-menu ${isOpenMenu ? "open" : "closed"}
       bg-state-300 `}
    >
      {isOpenMenu && (
        <div
          className={` ${mode ? " bg-black " : " bg-white "} md:hidden
          h-screen w-[280px] md:w-[300px]  py-12 px-10 `}
        >
          {MenuLinks.map((link, id) => (
            <div
              className="hover:font-bold flex flex-col pt-10 text-center  "
              key={id}
            >
              <Link href={link.link}>
                <p className=" text-xl p-3 w-full rounded-xl hover:bg-blue-700">
                  {link.label}
                </p>
              </Link>
            </div>
          ))}
          <div className="flex justify-center pt-5 md:hidden ">
            <ModeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
