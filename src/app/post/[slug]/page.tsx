import Comments from "@/components/Comments";
import PopularPost from "@/components/PopularPost";
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
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data);
  const isUser = true;
  return (
    <div>
      <div className=" mt-12  flex flex-col lg:flex-row gap-3 items-center">
        <div>
          <h2 className=" text-4xl text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetu adipisicing elit.
          </h2>
          <div className="py-5 w-full flex gap-3">
            <Avatar
              alt="Remy Sharp"
              src={"/pexels-trinity-kubassek-445109.jpg"}
              sx={{ width: 50, height: 50 }}
            />
            <div className="  flex flex-col">
              <p className="text-sm">Primus Inter Pares</p>
              <p className="text-xs">20 Aprill 2023</p>
            </div>
          </div>
        </div>
        <Image
          width={600}
          height={600}
          src={"/pexels-trinity-kubassek-445109.jpg"}
          alt="Blog-Page-Photo"
        />
      </div>
      <div className="flex flex-col md:flex-row py-10 item-start">
        <div className="flex flex-col px-2">
          <p className="px-2 py-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            tenetur, rerum veniam ullam sunt id iste amet doloremque magni
            voluptatem illo dicta in sequi harum officia aperiam culpa quae?
            Est, rem dolorum ducimus minima eligendi corrupti eum excepturi
            doloribus praesentium. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Vero voluptates temporibus impedit sint quod
            accusantium expedita consectetur autem esse tenetur ad dolorem
            veritatis praesentium eligendi ex iure, molestiae atque officia
            doloribus quasi. At, natus! Adipisci sit sunt illum labore nobis.
          </p>
          {data && <p dangerouslySetInnerHTML={{ __html: data.desc }} />}
          {isUser ? (
            <div className="w-full">
              <Comments />
            </div>
          ) : (
            <div>Login to leave a comments </div>
          )}
          <div></div>
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
