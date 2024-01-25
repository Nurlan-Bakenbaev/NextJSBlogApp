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
        <div className="flex flex-col border  h-[100vh] w-full text-center gap-8 px-8 ">
          {MenuLinks.map((link, id) => (
            <div className="block md:hidden" key={id}>
              <Link href={link.link}>
                <p className=" text-xl hover:text-blue-300">{link.label}</p>
              </Link>
            </div>
          ))}
          <Link href={"/"} className="text-2xl">
            NEXT-Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
