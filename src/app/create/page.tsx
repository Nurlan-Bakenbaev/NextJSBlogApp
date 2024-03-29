"use client";
import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Box, Button, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    file: null,
    postText: "",
  });
  const router = useRouter();
  const { status } = useSession();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };
  const handleFile = (e: any) => {
    const selectedFile = e.target.files[0];
    setPost({ ...post, file: selectedFile });
  };
  const handlePostText = (value: string) => {
    setPost({ ...post, postText: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post, "clicked");

    setPost({ title: "", file: null, postText: "" });
  };
  if (status === "unauthenticated") {
    router.push("/");
    return null;
  }
  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className=" bg-blue-500 py-2 capitalize rounded-md text-center text:xl my-2 md:my-5 md:text-3xl">
          Create Post
        </h1>
        <Box component="form" sx={{ color: "white" }}>
          <TextField
            onChange={handleTitle}
            className="text-white w-full outline-none bg-white rounded-md"
            label="Title"
            variant="filled"
            value={post.title}
          />
        </Box>
        <div>
          <label
            htmlFor="file"
            className="hover:text-blue-500 outline px-4 py-1 rounded-md mx-5"
          >
            <AttachFileIcon />
            {post.file && (
              <span className="text-blue-500"> {post.file.name}</span>
            )}
          </label>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            className="transition-all ease-in-out 
            duration-200 hover:scale-110"
          >
            Post
          </Button>
          <input
            onChange={handleFile}
            className="hidden"
            id="file"
            type="file"
          />
        </div>
        <div>
          <ReactQuill
            className="bg-white text-black min-h-[140px] w-full rounded-md"
            theme="snow"
            value={post.postText}
            onChange={handlePostText}
            placeholder="Tell us a story..."
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
