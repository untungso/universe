"use client";

import { InsteadLogo, StyledCode } from "@/components/server";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavigationBar = () => {
  const pathName = usePathname();
  const locale = pathName.split("/")[1];
  return (
    <nav className="border-b-2 border-slate-12 bg-slate-1 dark:border-slate-1 dark:bg-slate-12">
      <div className="flex flex-row items-center justify-between px-4">
        <div className="flex flex-col items-start justify-start">
          <StyledCode>NavigationBar </StyledCode>
          <Link href={`/${locale}`}>
            <InsteadLogo scale={0.4} />
          </Link>
        </div>
        <div className="flex flex-col">
          <StyledCode>NavigationMenu</StyledCode>
          <div className="flex flex-row gap-4">
            <Link href={`/${locale}/ui`}>Token</Link>
            <Link href={`/${locale}/ui/atom`}>Atom</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
