import {
  useMemberEmail,
  useMemberProfileImage,
} from "@/apps/member/application/hooks";
import { PopupMenu, PopupMenuItemButton } from "@/common/components/popup-menu";
import { css } from "@emotion/react";
import { Avatar, IconButton } from "@mui/material";
import { useState } from "react";
import { AvatarWithEmail } from "../../../../member/ui/components/avatar_with_email";

export const AppbarProfileAvatar = () => {
  const { email } = useMemberEmail();
  const { profileImageUrl } = useMemberProfileImage();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(ev.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge={"end"} onClick={handleClick}>
        <Avatar alt={"logo"} src={profileImageUrl} css={st.avatar} />
      </IconButton>

      <PopupMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <AvatarWithEmail email={email} profileImageUrl={profileImageUrl} />
        <PopupMenuItemButton>계정 설정</PopupMenuItemButton>
        <PopupMenuItemButton>로그아웃</PopupMenuItemButton>
      </PopupMenu>
    </div>
  );
};

const st = {
  avatar: css`
    width: 28px;
    height: 28px;
  `,
};
