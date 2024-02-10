"use client";
import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Box, Button, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    file: "",
    postText: "",
  });
  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: e.target.value });
  };
  const handlePostText = (value: string) => {
    setPost({ ...post, postText: value });
  };
  return (
    <div>
      <div className="flex flex-col gap-5">
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
          <label className="hover:text-blue-500 outline px-4 py-1 rounded-md mr-5">
            <ImageIcon sx={{ color: "lightblue" }} />
          </label>
          <label className="hover:text-blue-500 outline px-4 py-1 rounded-md mx-5">
            <AttachFileIcon sx={{ color: "red" }} />
          </label>
          <label className="hover:text-blue-500 outline px-4 py-1 rounded-md mx-5">
            <VideocamIcon sx={{ color: "orange" }} />
          </label>
        </div>
        <div>
          <ReactQuill
            placeholder="Your post..."
            onChange={handlePostText}
            value={post.postText}
            className="bg-white w-full text-black"
            theme="snow"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
