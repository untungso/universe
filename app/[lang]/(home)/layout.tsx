import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Loader } from "@/components/magic/loader";

export const metadata: Metadata = {
  title: {
    default: "Hello World | Malah Ngoding Spaces",
    template: "%s | Malah Ngoding Spaces",
  },
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <Loader />
    </div>
  );
}
