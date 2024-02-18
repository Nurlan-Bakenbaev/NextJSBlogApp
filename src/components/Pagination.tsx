"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page }) => {
  const router = useRouter();
  console.log(page)
  return (
    <div className="w-full  flex justify-center gap-5 ">
      <Button
        onClick={() => router.push(`?page=${page - 1}`)}
        color="success"
        variant="outlined"
      >
        Prev
      </Button>
      <Button
        onClick={() => router.push(`?page=${page + 1}`)}
        sx={{ border: "1px solid blue" }}
        variant="outlined"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
