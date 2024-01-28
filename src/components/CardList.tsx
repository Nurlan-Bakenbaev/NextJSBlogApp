import React from "react";
import PostCard from "./PostCard";
import PopularPost from "./PopularPost";

const CardList = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-5 h-screen">
        <h2 className="text-xl font-bold  ">Recent Posts</h2>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className=" flex flex-col">
        <PopularPost />
        <PopularPost />
        <PopularPost />
        <PopularPost />

      </div>
    </div>
  );
};

export default CardList;
