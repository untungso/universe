import "./globals.css";
import { Montserrat, Roboto_Mono } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Hello World | Malah Ngoding Spaces",
    template: "%s | Malah Ngoding Spaces",
  },
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${roboto_mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
