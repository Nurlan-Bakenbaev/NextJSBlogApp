"use client";
import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import GoogleIcon from "@mui/icons-material/Google";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/components/Switcher/Loading";

const Login = () => {
  // const router = useRouter();

  const { mode } = useSelector((state) => state?.themeMode);
  const { status } = useSession();

  if (status === "loading") {
    return <Loading />;
  } else if (status === "authenticated") {
    //router.push("/");
  }
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
            onClick={() => signIn("google")}
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
        </div>
      </div>
    </div>
  );
};

export default Login;
