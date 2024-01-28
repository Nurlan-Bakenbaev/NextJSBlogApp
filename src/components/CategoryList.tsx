import Link from "next/link";
import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CodeIcon from "@mui/icons-material/Code";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
const categories = [
  { name: "Style", icon: <LocalDiningIcon /> },
  { name: "Fashion", icon: <DiamondIcon /> },
  { name: "Travel", icon: <ConnectingAirportsIcon /> },
  { name: "Culture", icon: <AccountBalanceIcon /> },
  { name: "Coding", icon: <CodeIcon /> },
];
const CategoryList = () => {
  return (
    <div>
      <div className=" flex flex-row justify-between flex-wrap gap-3 ">
        {categories.map((cat, ind) => (
          <Link
            href={`${ind}`}
            className=" odd:bg-blue-400 flex items-center
             text-black even:bg-red-400
             w-[120px] p-2 rounded-md text-center"
            key={cat.name}
          >
            <span className="mx-1 rounded-full outline">{cat.icon}</span>
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
