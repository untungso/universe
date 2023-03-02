import { InsteadLogo, StyledCode } from "@/components";
import Link from "next/link";

export default function UIDebugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="border-b-2 border-slate-12 bg-slate-1">
        <div className="px-4 flex flex-row justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <StyledCode>NavigationBar</StyledCode>
            <Link href={`/`}>
              <InsteadLogo scale={0.4} />
            </Link>
          </div>
          <div className="flex flex-col">
            <StyledCode>NavigationMenu</StyledCode>
            <div className="flex flex-row gap-4">
              <Link href={`/ui-debug`}>Token</Link>
              <Link href={`/ui-debug/atom`}>Atom</Link>
            </div>
          </div>
        </div>
      </nav>
      {children}
      <footer className="bg-slate-12 text-slate-1 pb-8">
        <div className="px-4">
          <StyledCode>Footer</StyledCode>
          <p className="text-3xl">🇮🇩</p>
          <p className="font-mono font-light">Mad Respect,</p>
          <p className="text-sm font-sans font-black">Team Malah Ngoding</p>
        </div>
      </footer>
    </div>
  );
}
