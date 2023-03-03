import { Debug, InsteadLogo, StyledCode } from "@/components";
import Link from "next/link";

import type { ReactNode } from "react";

export default function UIDebugLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav className="border-b-2 border-slate-12 bg-slate-1">
        <Debug>
          <div className="flex flex-row items-center justify-between px-4">
            <div className="flex flex-col items-start justify-start">
              <StyledCode>NavigationBar</StyledCode>
              <Link href={`/`}>
                <InsteadLogo scale={0.4} />
              </Link>
            </div>
            <div className="flex flex-col">
              <Debug>
                <StyledCode>NavigationMenu</StyledCode>
                <div className="flex flex-row gap-4">
                  <Link href={`/ui-debug`}>Token</Link>
                  <Link href={`/ui-debug/atom`}>Atom</Link>
                </div>
              </Debug>
            </div>
          </div>
        </Debug>
      </nav>
      {children}
      <div className="m-4 rounded-xl border-2 border-slate-12 p-2">
        <footer className="m-2 rounded-xl text-slate-12">
          <div className="p-2">
            <StyledCode>Footer</StyledCode>
            <p className="text-3xl">🇮🇩</p>
            <p className="font-mono font-light">Mad Respect,</p>
            <p className="font-sans text-sm font-black">Team Malah Ngoding</p>
          </div>
        </footer>
      </div>
    </div>
  );
}