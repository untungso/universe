import "@instead/facades/styles";
import { AppProps } from "next/app";

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <>
      {/* <NextIntlProvider
        messages={messages as AbstractIntlMessages}
        onError={handleI18nError}
      >
        <ThemeProvider
          enableSystem={false}
          defaultTheme="light"
          attribute="class"
          value={{ light: `light-theme`, dark: darkTheme.className }}
        >
          <SessionProvider session={session} refetchInterval={5 * 60}> */}
      <Component {...pageProps} />
      {/* </SessionProvider>
        </ThemeProvider>
      </NextIntlProvider> */}
    </>
  );
}
