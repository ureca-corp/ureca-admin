import { LightColor } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Collapse } from "@mui/material";
import { useGlobalSideBar } from "../../application/hooks";

export const SideBar = () => {
  const { open } = useGlobalSideBar();

  return (
    <Collapse in={open} orientation={"horizontal"}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          color: #000;
          width: 260px;
          height: 100%;

          border-right: 1px solid ${LightColor.BorderColor};
        `}
      >
        asd
      </div>
    </Collapse>
  );
};

const st = {};
