/*
 */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import nextTranspile from "next-transpile-modules";

const withVanillaExtract = createVanillaExtractPlugin();
const withTM = nextTranspile([
  // "@instead/facades"
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "siasky.net", "kusama.network"],
  },
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    localeDetection: false,
  },
  compiler: {
    removeConsole: false,
  },
  async headers() {
    return [
      {
        source: "/.well-known/brave-rewards-verification.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
        ],
      },
    ];
  },
};

export default withTM(withVanillaExtract(nextConfig));
