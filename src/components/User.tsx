"use client";
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
  return (
    <div className="flex flex-col ">
      <div className="flex gap-2">
        <Avatar alt="User Image" src={""} sx={{ width: 40, height: 40 }} />
        <div>
          <p className="text-sm">{""}</p>
          <p className="text-xs">{""}</p>
        </div>
      </div>

      <p> {"Comment text"}</p>
    </div>
  );
};

export default User;
