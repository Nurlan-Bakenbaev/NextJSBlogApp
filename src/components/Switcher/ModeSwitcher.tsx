import { setMode } from "@/redux-toolkit/modeSlicer";
import React from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const ModeSwitcher = () => {
  const { mode } = useSelector((state) => state?.themeMode);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(setMode());
  };
  return (
    <div
      className={`px-1 py-1 relative
    transition-all duration-500 ease-in-out 
      bg-slate-800
       text-gray-200 dark:text-gray-800
      rounded-full`}
      onClick={toggleMode}
    >
      <div
        className={`absolute transition-all duration-500 ease-in-out top-0 ${
          mode ? "left-0" : "right-0"
        } rounded-full 
      w-[30px] h-[30px] bg-blue-500 `}
      />
      <div className="flex justify-between">
        <span className=" text-blue-500">
          <MdOutlineDarkMode className="text-2xl" />
        </span>
        <span className="text-yellow-600 ">
          <CiLight className="text-2xl" />
        </span>
      </div>
    </div>
  );
};

export default ModeSwitcher;
