import * as React from "react";

interface TextProps {
  children: string;
}
export const Title = (props: TextProps) => {
  return (
    <h1 className="mb-2 font-sans text-4xl font-black text-slate-12 dark:text-slate-1">
      {props.children}
    </h1>
  );
};
