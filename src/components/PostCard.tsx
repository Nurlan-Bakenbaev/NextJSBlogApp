import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import { formatTimeAgo, formatTimestamp } from "@/utils/dateConverter";

const PostCard = ({ img, title, desc, slug, date }) => {
  return (
    <div>
      <div className="flex border-b border-slate-700 pb-4 flex-row items-center gap-5">
        <div>
          <Image
            className=" rounded-lg filter  hover:brightness-50 duration-500 ease-in-out "
            objectFit="contain"
            width={300}
            height={300}
            src={img}
            alt="Hero-image"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="text-sm flex justify-between">
            <div className="text-gray-500">
              <p>{formatTimestamp(date)}</p>
              <p className="text-xs ">{formatTimeAgo(date)}</p>
            </div>
            <span className="uppercase bold text-red-500 ">{slug}</span>
          </div>
          <h2 className="text-md md:text-lg uppercase lg:text-xl ">{title}</h2>
          <p className="text-xs">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
