import { NavigationBar } from "./nav";

import type { ReactNode } from "react";
import { Footer } from "./footer";

export default function UIDebugLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}
