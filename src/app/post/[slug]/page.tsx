import Comments from "@/components/Comments";
import PopularPost from "@/components/PopularPost";
import Loading from "@/components/Switcher/Loading";
import User from "@/components/User";
import { formatTimeAgo } from "@/utils/dateConverter";
import { Avatar } from "@mui/material";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to get the Post ");
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  const isUser = true;
  if (!data) {
    return <Loading />;
  }
  return (
    <div>
      <div className=" mt-12  flex flex-col lg:flex-row gap-3 items-center">
        <div className="w-full">
          <h2 className=" text-4xl text-center lg:text-left">{data?.title}</h2>
          <div className="py-5 w-full flex gap-3">
            <Avatar
              alt="account-image"
              src={data?.user.image}
              sx={{ width: 50, height: 50 }}
            />
            <div className="flex flex-col">
              <p className="text-sm">{data?.user.name}</p>
              <p className="text-xs">{formatTimeAgo(data.createdAt)}</p>
            </div>
          </div>
        </div>
        <Image width={600} height={600} src={data?.img} alt="Blog-Page-Photo" />
      </div>
      <div className="flex flex-col md:flex-row py-10 item-start">
        <div className="flex flex-col px-2">
          {data && <p dangerouslySetInnerHTML={{ __html: data?.desc }} />}
          {isUser ? (
            <div className="w-full hidden">
              <Comments postSlug={slug} />
              <div className="py-3">
                <User postSlug={slug} />
              </div>
            </div>
          ) : (
            <span>Login to leave a comments </span>
          )}
        </div>
        <div className=" flex  flex-col md:border-l-[1px] border-gray-700 px-2">
          <h4 className="text-lg font-bold  text-right">Popular Posts</h4>
          <PopularPost />
          <PopularPost />
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
