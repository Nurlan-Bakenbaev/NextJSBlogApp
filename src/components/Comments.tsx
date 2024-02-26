"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const Comments = () => {
  const { status } = useSession();
  if (status == "unauthenticated") {
    return (
      <p className="text-lg  italic mt-8">
        Please
        <Link className="text-blue-500 px-1 " href={"/login"}>
          login
        </Link>
        to leave a comment
      </p>
    );
  }
  return (
    <div className="mt-10">
      <form className="flex gap-2">
        <input
          placeholder="What do you think ? "
          className="w-full text-black pl-4 outline-none rounded-md"
          type="text"
        />
        <button className=" px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-800">
          Send
        </button>
      </form>
    </div>
  );
};

export default Comments;
