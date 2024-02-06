import { Button } from "@mui/material";
import React from "react";

const Pagination = () => {
  return (
    <div className="w-full  flex justify-center gap-5 ">
      <Button sx={{ border: "1px solid blue" }} variant="outlined">
        Next
      </Button>
      <Button color="success" variant="outlined">
        Prev
      </Button>
    </div>
  );
};

export default Pagination;
