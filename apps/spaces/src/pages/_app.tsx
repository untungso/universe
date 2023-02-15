/**
 */
import "../styles/instead.css";
import "../styles/minireset.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { I18nProvider } from "next-rosetta";
import { Montserrat } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../styles/theme/dark.css";
import { lightTheme } from "../styles/theme/light.css";
/**
 */
const montserratFont = Montserrat({
  variable: "--montserrat-font",
  subsets: ["latin"],
});
interface PagePropsObject {
  table: any;
  session: any;
}
function InsteadAppsBase({ Component, pageProps }: AppProps<PagePropsObject>) {
  return (
    <Fragment>
      <I18nProvider table={pageProps.table}>
        <ThemeProvider
          storageKey="instead-theme"
          defaultTheme="system"
          attribute="class"
          value={{
            light: lightTheme,
            dark: darkTheme,
          }}
        >
          <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
            <main className={montserratFont.className}>
              <Component {...pageProps} />
            </main>
          </SessionProvider>
        </ThemeProvider>
      </I18nProvider>
    </Fragment>
  );
}

export default InsteadAppsBase;
