import { ReactNode } from "react";
import { css } from "@emotion/react";
import { GlobalAppbar } from "../appbar";
import { SideBar } from "../sidebar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div css={st.root}>
      <GlobalAppbar />
      <div css={st.second}>
        <SideBar />
        {children}
      </div>
    </div>
  );
};

const st = {
  root: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  second: css`
    display: flex;
    height: 100%;
  `,
};
