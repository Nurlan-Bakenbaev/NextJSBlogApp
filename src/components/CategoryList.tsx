import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="my-2  md:my-8">
      <div className="flex flex-row justify-between flex-wrap gap-3">
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.title}`}
            className="odd:bg-blue-400 transition-all duration-300 ease-in-out hover:scale-110 flex flex-row items-center justify-center text-black even:bg-red-400 w-[120px] py-2 rounded-md capitalize"
            key={item._id}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
