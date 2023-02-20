import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { ReactNode } from "react";

type LayoutSubTitleSectionProps = {
  subTitle: string;
  right?: ReactNode;
};

export const LayoutSubTitleSection = ({
  subTitle,
  right,
}: LayoutSubTitleSectionProps) => {
  return (
    <section css={st.root}>
      <Typography variant={"h6"} fontWeight={600}>
        {subTitle}
      </Typography>

      {right}
    </section>
  );
};

const st = {
  root: css`
    display: flex;
    justify-content: space-between;

    margin: 24px 0;
  `,
};
