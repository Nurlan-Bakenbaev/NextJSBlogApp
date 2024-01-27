import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

interface MobileMenuProps {
  isOpenMenu: boolean;
}
export const SimpleBackdrop: React.FC<MobileMenuProps> = ({ isOpenMenu }) => {
  return (
    <div>
      <Backdrop sx={{ position: "absolute", zIndex: "20" }} open={isOpenMenu} />
    </div>
  );
};
export default SimpleBackdrop;
