"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
const Comments = ({ postSlug }) => {
  const [comment, setComment] = useState("");
  const { status, data } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        body: JSON.stringify({ postSlug, comment, data }),
      });
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(postSlug, comment, data);
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What do you think ? "
          className="w-full text-black pl-4 outline-none rounded-md"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className=" px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Comments;
