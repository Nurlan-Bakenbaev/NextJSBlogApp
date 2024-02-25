import Image from "next/image";
import React from "react";
import {
  formatTimeAgo,
  formatTimestamp,
  trunkText,
} from "@/utils/dateConverter";
import Link from "next/link";
const PostCard = ({ img, title, desc, slug, date }) => {
  return (
    <Link className=" group" href={`/post/${slug}`}>
      <div className="flex border-b border-slate-700 pb-4 flex-row items-center gap-5">
        <div>
          <Image
            className=" rounded-lg filter  group-hover:brightness-50 duration-500 ease-in-out "
            objectFit="contain"
            width={300}
            height={300}
            src={img}
            alt="Hero-image"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-sm md:text-lg uppercase lg:text-xl ">
            {trunkText(title, 25)}
          </h2>
          <p className="text-xs">{trunkText(desc, 70)}</p>
          <div className="text-sm flex justify-between">
            <div className="text-gray-500">
              <p>{formatTimestamp(date)}</p>
              <p className="text-xs ">{formatTimeAgo(date)}</p>
            </div>
            <span className="uppercase bold text-red-500 ">{slug}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
