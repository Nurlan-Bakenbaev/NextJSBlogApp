import React from "react";
import PostCard from "./PostCard";
import PopularPost from "./PopularPost";
import Pagination from "./Pagination";

const CardList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-baseline ">
      <div className="flex flex-col gap-5 mb-5">
        <h2 className="text-lg font-bold text-right">Recent Posts</h2>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <Pagination />
      </div>
      <div className=" flex flex-col border-l-[1px] border-gray-700 px-2 py-1">
        <h3 className="text-lg font-bold  text-right">Popular Posts</h3>
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
      </div>
    </div>
  );
};

export default CardList;
