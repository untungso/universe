import { BaseLayout } from "@/components/server";
import type { ReactNode } from "react";

export default function UIExploreLayout({ children }: { children: ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
