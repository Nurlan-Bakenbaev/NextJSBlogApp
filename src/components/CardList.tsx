import React from "react";
import PostCard from "./PostCard";
import PopularPost from "./PopularPost";
import Pagination from "./Pagination";
const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const CardList = async ({ page }) => {
  const data = await getData(page);

  return (
    <div className="flex flex-col md:flex-row gap-5 items-baseline ">
      <div className="flex flex-col gap-5 mb-5">
        <h2 className="text-lg font-bold text-right">Recent Posts</h2>
        {data.map((post) => (
          <PostCard
            key={post._id}
            img={post.img}
            title={post.title}
            desc={post.desc}
            slug={post.slug}
            date={post.createdAt}
          />
        ))}
        <Pagination  page={page}/>
      </div>
      <div className=" flex flex-col border-none md:border-l-[1px] border-gray-700 px-2 py-1">
        <h3 className="text-lg font-bold  text-right">Popular Posts</h3>
        <PopularPost />
        <PopularPost />
      </div>
    </div>
  );
};

export default CardList;
