import "./globals.css";
import { Montserrat, Roboto_Mono } from "next/font/google";
import { cookies } from "next/headers";

import type { ReactNode } from "react";
import { Providers } from "./providers";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${roboto_mono.variable} bg-slate-1 text-slate-12 dark:bg-slate-12 dark:text-slate-1`}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
