"use client";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Login = () => {
  const { mode } = useSelector((state) => state?.themeMode);

  return (
    <div className=" flex justify-center items-center">
      <div
        className={` drop-shadow-xl border  mt-10 md:mt-[120px] ${
          mode ? "bg-dark border-none" : "bg-light text-black"
        }  flex
        justify-center w-[360px] h-[380px] items-center rounded-md `}
      >
        <div className="flex flex-col gap-5 text-center  ">
          <div className="flex mx-auto gap-2 items-center">
            <h3 className=" text-lg lg:text-2xl">LOGIN </h3>
            <AccountCircleIcon sx={{ fontSize: "50px" }} />
          </div>
          <Button
            className="hover:bg-blue-600 transition-all text-xs md:text-sm duration-500 hover:scale-110 flex gap-2 items-center drop-shadow-lg"
            variant={`${mode ? "outlined" : "contained"}`}
            sx={{
              color: `${mode ? "white" : "black"}`,
              width: "260px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <GoogleIcon sx={{ color: "red" }} />
            Sign in with Google
          </Button>
          <Button
            className="hover:bg-blue-600 transition-all text-xs md:text-sm duration-500 hover:scale-110  flex gap-2 items-center drop-shadow-lg"
            variant={`${mode ? "outlined" : "contained"}`}
            sx={{
              color: `${mode ? "white" : "black"}`,
              width: "260px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <GitHubIcon sx={{ color: "orange" }} />
            Sign in with GitHub
          </Button>
          <Button
            className="hover:bg-blue-600 transition-all text-xs md:text-sm duration-500 hover:scale-110  flex gap-2 items-center drop-shadow-lg"
            variant={`${mode ? "outlined" : "contained"}`}
            sx={{
              color: `${mode ? "white" : "black"}`,
              width: "260px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <FacebookIcon  />
            Sign in with Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
