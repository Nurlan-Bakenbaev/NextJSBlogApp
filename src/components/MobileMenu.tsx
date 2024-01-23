import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { MenuLinks } from "./Links";

const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className="flex flex-col md:hidden">
      <button onClick={toggleMenu}>
        {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isOpenMenu && (
        <div className="mobile-menu w-[200px] bg-slate-500 animate-slide-in">
          {MenuLinks.map((link, id) => (
            <div className="flex flex-col gap-5 md:hidden" key={id}>
              <Link className="hover:text-blue-300" href={link.link}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
