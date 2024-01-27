"use client";
import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { mode } = useSelector((state) => state?.themeMode);
  return (
    <div
      className={`${
        mode ? "dark_mode" : "ligh_mode "
      }  transition-all  duration-500 ease-in-out`}
    >
      {children}
    </div>
  );
};
export default ThemeProvider;
