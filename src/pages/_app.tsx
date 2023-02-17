import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";

import "../common/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
