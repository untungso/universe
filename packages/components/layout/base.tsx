import clsx from "clsx";
import * as React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}
export const BaseLayout = (props: SectionProps) => {
  return <main className={clsx("md:px-8 px-4 py-4 max-w-[72vh]", props.className)}>{props.children}</main>;
};
