import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Collapse } from "@mui/material";
import {
  useGlobalSidebarMenu,
  useGlobalSidebarOpen,
} from "../../application/hooks";
import { SidebarMenuSection } from "./components";

export const Sidebar = () => {
  const { open } = useGlobalSidebarOpen();
  const { menuList } = useGlobalSidebarMenu();

  return (
    <Collapse in={open} orientation={"horizontal"}>
      <div css={st.container}>
        {menuList.map((it) => (
          <SidebarMenuSection key={it.id} entity={it} />
        ))}
      </div>
    </Collapse>
  );
};

const st = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 260px;
    height: 100%;

    padding: 24px 0;

    border-right: 1px solid ${LightColor.BorderColor1};

    overflow: auto;
  `,
};
