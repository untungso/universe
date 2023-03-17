import clsx from "clsx";
import * as React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}
export const Section = (props: SectionProps) => {
  return <div className={clsx("px-6", props.className)}>{props.children}</div>;
};
