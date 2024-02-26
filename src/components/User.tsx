"use client";
import { formatTimeAgo } from "@/utils/dateConverter";
import { Avatar } from "@mui/material";
import React from "react";
import useSWR from "swr";
interface UserAvatar {
  commentImage: string;
  userName: string;
  postDate: string;
}
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};
const User: React.FC<UserAvatar> = ({ postSlug }) => {
  const { data, error } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  console.log(data);
  if (!data) {
    <div>No Comments</div>;
  }
  return (
    <div className="flex flex-col mt-5">
      {data?.map((comment, id) => (
        <div key={id}>
          <div className="flex gap-2">
            <Avatar
              alt="User Image"
              src={comment.user?.image}
              sx={{ width: 40, height: 40 }}
            />
            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-sm">{comment.user.name}</p>
                <p className="text-xs text-gray-400">
                  {formatTimeAgo(comment.createdAt)}
                </p>
              </div>
              <p className="p-1">{comment.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default User;
