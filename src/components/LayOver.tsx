import * as React from "react";
import Backdrop from "@mui/material/Backdrop";

interface MobileMenuProps {
  isOpenMenu: boolean;
}
export const SimpleBackdrop: React.FC<MobileMenuProps> = ({ isOpenMenu }) => {
  return (
    <div>
      <Backdrop
        sx={{
          position: "absolute",
          zIndex: "10",
        }}
        open={isOpenMenu}
      />
    </div>
  );
};
export default SimpleBackdrop;
