import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const Featured = () => {
  return (
    <div className=" px-5 md:px-1  ">
      <h2 className="text-lg md:text-4xl  text-center my-3">
        Blog Post website with CRUD
      </h2>
      <div>
        <div className="flex flex-col  md:flex-row  justify-center items-center gap-5">
          <div>
            <Image
              className=" rounded-lg filter  hover:brightness-50 duration-500 ease-in-out "
              objectFit="contain"
              width={700}
              height={500}
              src={
                "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Hero-image"
            />
          </div>
          <div className="flex flex-col gap-4 w-full md:max-w-[320px]">
            <h2 className="text-md md:text-2xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h2>
            <p className="text-sm text-stone-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              aut aperiam accusantium, laudantium nemo quos.
            </p>
            <Buttons label={"Read More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
