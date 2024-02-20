"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "@/redux-toolkit/dataSlice";
import Image from "next/image";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";
import Loading from "./Switcher/Loading";
import { formatTimeAgo } from "@/utils/dateConverter";
import Link from "next/link";

const Featured = () => {
  const { lastPost } = useSelector((state) => state?.data.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  if (!lastPost) {
    return <Loading />;
  } else
    return (
      <div className="md:px-1">
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5">
            <div>
              <Image
                className="rounded-lg filter hover:brightness-50 duration-500 ease-in-out"
                objectFit="contain"
                width={700}
                height={500}
                src={lastPost?.img}
                alt="Hero-image"
              />
            </div>
            <div className="flex flex-col  gap-3 w-full md:max-w-[320px]">
              <div className="flex justify-between items-center">
                <h2 className="text-md md:text-2xl">{lastPost?.title}</h2>
                <p className="text-gray-600 text-xs">
                  {formatTimeAgo(lastPost?.createdAt)}
                </p>
              </div>
              <p className="text-sm text-stone-400">"{lastPost?.desc}"</p>
              <Link
                className="border hover:bg-green-900 transition-all duration-300 px-4 py-2 text-center rounded-md border-green-500"
                href={"/"}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Featured;
