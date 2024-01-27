import React, { useEffect } from "react";
import Link from "next/link";
import { MenuLinks } from "./Links";
import { useSelector } from "react-redux";

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
          className={`flex flex-col ${
            mode ? " bg-black " : " bg-white "
          }border-l border-b  md:hidden
          h-screen w-[250px] text-center gap-12 py-5 px-12 `}
        >
          {MenuLinks.map((link, id) => (
            <div className="hover:font-bold pt-10" key={id}>
              <Link href={link.link}>
                <p className=" text-xl hover:text-blue-500">{link.label}</p>
              </Link>
            </div>
          ))}
          <Link
            href={"/"}
            className="text-2xl absolute bottom-5 left-0 w-full hover:font-bold"
          >
            NEXT-Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
