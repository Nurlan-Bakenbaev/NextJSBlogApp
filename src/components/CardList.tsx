import React from "react";
import PostCard from "./PostCard";
import PopularPost from "./PopularPost";

const CardList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-baseline ">
      <div className="flex flex-col gap-5 mb-5">
        <h2 className="text-lg font-bold  ">Recent Posts</h2>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className=" flex flex-col">
        <h3 className="text-lg  font-bold ">Popular Posts</h3>
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />
      </div>
    </div>
  );
};

export default CardList;
