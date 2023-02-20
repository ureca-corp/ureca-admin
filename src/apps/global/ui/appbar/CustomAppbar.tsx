import { BaseAppbar } from "@/common/components/appbar/BaseAppbar";
import { AppbarProfileAvatar } from "@/apps/global/ui/appbar/components/AppbarProfileAvatar";
import { MenuRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useMemberCompany } from "@/apps/member/application/hooks";
import { useGlobalSideBar } from "../../application/hooks";

export const GlobalAppbar = () => {
  const { companyName } = useMemberCompany();
  const { onToggle } = useGlobalSideBar();

  return (
    <BaseAppbar
      leftIcon={
        <IconButton edge={"start"} onClick={onToggle}>
          <MenuRounded />
        </IconButton>
      }
      title={<Typography>{companyName}</Typography>}
      right={<AppbarProfileAvatar />}
    />
  );
};
