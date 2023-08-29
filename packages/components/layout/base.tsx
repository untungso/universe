import clsx from "clsx";
import * as React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}
export const BaseLayout = (props: SectionProps) => {
  return (
    <main
      className={clsx(
        "max-w-[720px] bg-slate-1 px-4 py-4 pb-20 dark:bg-slate-12 md:px-8",
        props.className
      )}
    >
      {props.children}
    </main>
  );
};
