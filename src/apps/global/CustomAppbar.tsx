import { BaseAppbar } from "@/common/components/appbar/BaseAppbar";
import { AppbarMemberProfileAvatar } from "@/apps/member/ui/components/appbar_profile_avatar/AppbarMemberProfileAvatar";
import { MenuRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useMemberCompany } from "../member/application/hooks";

export const GlobalAppbar = () => {
  const { companyName } = useMemberCompany();

  return (
    <BaseAppbar
      leftIcon={
        <IconButton edge={"start"}>
          <MenuRounded />
        </IconButton>
      }
      title={<Typography>{companyName}</Typography>}
      right={<AppbarMemberProfileAvatar />}
    />
  );
};
