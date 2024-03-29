"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="w-full  flex justify-center gap-5 ">
      <Button
        onClick={() => router.push(`?page=${page - 1}`)}
        color="success"
        variant="outlined"
        disabled={hasNext}
      >
        Prev
      </Button>
      <Button
        disabled={hasPrev}
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
