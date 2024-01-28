import Image from "next/image";
import React from "react";

const PopularPost = () => {
  return (
    <div className="w-full md:w-[350px] lg:w-full mt-12 md:mt-5 flex flex-col items-start gap-3">
      <div className="p-1 rounded-md bg-orange-500">Travel</div>
      <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
        <Image
          objectFit="contain "
          width={50}
          height={50}
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Post-Image"
        />
      </div>

      <p className="text-sm  ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod officiis
        quae quas dolor iure.
      </p>
      <span className="text-slate-600 text-xs ">28.01.2023</span>
    </div>
  );
};

export default PopularPost;
