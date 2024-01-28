import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const PostCard = () => {
  return (
    <div>
      <div className="flex border-b border-slate-700 pb-4 flex-row items-center gap-5">
        <div>
          <Image
            className=" rounded-lg filter  hover:brightness-50 duration-500 ease-in-out "
            objectFit="contain"
            width={300}
            height={300}
            src={
              "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Hero-image"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:max-w-[320px]">
          {/* HERE GOES DATE */}
          <div className="text-sm flex justify-between ">
            <p>28.01.2024</p>
            <span className="uppercase text-red-500 ">Culture</span>
          </div>
          <h2 className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="text-xs text-stone-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            aut aperiam accusantium, laudantium nemo quos.
          </p>
          <button className=" text-sm p-2 hover:text-[purple] hover:scale-110 duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
