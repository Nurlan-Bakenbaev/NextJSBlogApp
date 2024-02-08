"use client";
import React, { useState } from "react";

import User from "./User";

const Comments = () => {
  return (
    <div>
      <h3 className="text-lg lg:text-2xl py-2">Comments</h3>
      <form className="flex gap-2">
        <input className="w-full  rounded-md" type="text" />
        <button className=" px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-800">
          Send
        </button>
      </form>
      <div className="py-3">
        <User
          commentImage={"/pexels-trinity-kubassek-445109.jpg"}
          userName={"nothing"}
          postDate={"nothingYET"}
        />
      </div>
    </div>
  );
};

export default Comments;
