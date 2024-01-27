import React from "react";
import Link from "next/link";
import { MenuLinks } from "./Links";

interface MobileMenuProps {
  isOpenMenu: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpenMenu }) => {
  return (
    <div
      className={`mobile-menu ${isOpenMenu ? "open" : "closed"}
       bg-state-300 `}
    >
      {isOpenMenu && (
        <div className="flex flex-col border-l  md:hidden  h-[100vh] w-[250px] text-center gap-12 py-5 px-12 ">
          {MenuLinks.map((link, id) => (
            <div className="hover:font-bold" key={id}>
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
