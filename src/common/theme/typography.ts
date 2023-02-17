import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",
  body1: {
    fontWeight: "300",
  },
  body2: {
    fontWeight: "300",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
