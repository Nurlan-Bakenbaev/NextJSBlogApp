"use client";
import React from "react";

const Comments = () => {
  return (
    <div>
      <h3 className="text-lg lg:text-2xl py-2">Comments</h3>
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
