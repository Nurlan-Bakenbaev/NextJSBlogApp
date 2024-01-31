import { Button } from "@mui/material";
import React from "react";

const Pagination = () => {
  return (
    <div className="w-full  flex justify-center gap-5 ">
      <Button color="success" variant="outlined">
        Next
      </Button>
      <Button color="success" variant="outlined">
        Prev
      </Button>
    </div>
  );
};

export default Pagination;
