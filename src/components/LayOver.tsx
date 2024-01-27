import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Backdrop sx={{ position: "absolute", zIndex: "20", }} open={open} />
    </div>
  );
}
