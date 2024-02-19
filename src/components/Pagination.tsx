"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  console.log(page);
  return (
    <div className="w-full  flex justify-center gap-5 ">
      <Button
        className={`${hasPrev && "bg-slate-800 text-red-800"}`}
        onClick={() => router.push(`?page=${page - 1}`)}
        color="success"
        variant="outlined"
        disabled={hasPrev}
      >
        Prev
      </Button>
      <Button
        className={`${hasNext && "bg-slate-800 text-red-800"}`}
        disabled={hasNext}
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
