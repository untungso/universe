import * as React from "react";

interface TextProps {
  children: string;
}
export const SafeParagraph = (props: TextProps) => {
  return (
    <p className="font-base mb-4 text-justify font-sans text-base leading-relaxed text-slate-12 dark:text-slate-1">
      {props.children}
    </p>
  );
};
