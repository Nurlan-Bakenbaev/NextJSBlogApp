import { Avatar } from "@mui/material";
import React from "react";
interface UserAvatar {
  commentImage: string;
  userName: string;
  postDate: string;
}
const User: React.FC<UserAvatar> = ({ commentImage, userName, postDate }) => {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-2">
        <Avatar
          alt="User Image"
          src={commentImage}
          sx={{ width: 40, height: 40 }}
        />
        <div>
          <p className="text-sm">{userName}</p>
          <p className="text-xs">{postDate}</p>
        </div>
      </div>

      <p> {"Comment text"}</p>
    </div>
  );
};

export default User;
