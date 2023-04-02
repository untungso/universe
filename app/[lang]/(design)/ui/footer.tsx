import { StyledCode } from "@/components/server";

export const Footer = () => {
  return (
    <div className="m-4 rounded-xl border-2 border-slate-12 p-2 dark:border-slate-1">
      <footer className="m-2 rounded-xl text-slate-12 dark:text-slate-1">
        <div className="p-2">
          <StyledCode>Footer</StyledCode>
          <p className="text-3xl">🇮🇩</p>
          <p className="font-mono font-light">Mad Respect,</p>
          <p className="font-sans text-sm font-black">Team Malah Ngoding</p>
        </div>
      </footer>
    </div>
  );
};
