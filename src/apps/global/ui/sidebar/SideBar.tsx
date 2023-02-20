import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { CalendarMonthRounded } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import { useGlobalSideBarOpen } from "../../application/hooks";
import { SideBarMenuCategory, SideBarMenuItem } from "./components";

export const SideBar = () => {
  const { open } = useGlobalSideBarOpen();

  return (
    <Collapse in={open} orientation={"horizontal"}>
      <div css={st.container}>
        <SideBarMenuCategory>정산</SideBarMenuCategory>
        <SideBarMenuItem
          leftIcon={<CalendarMonthRounded />}
          title={"정산달력"}
          isSelected
        />
        <SideBarMenuItem
          leftIcon={<CalendarMonthRounded />}
          title={"정산달력2"}
          depth={2}
        />
      </div>
    </Collapse>
  );
};

const st = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 260px;
    height: 100%;

    padding: 24px 0;

    border-right: 1px solid ${LightColor.BorderColor1};
  `,
};
