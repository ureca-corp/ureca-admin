import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import { Layout } from "@/apps/global/ui/layout/Layout";

import "../common/styles/globals.css";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
