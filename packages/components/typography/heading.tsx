import * as React from "react";

interface TextProps {
  children: string;
}
export const Heading = (props: TextProps) => {
  return (
    <h2 className="font-base mb-3 font-sans text-3xl text-slate-12">
      {props.children}
    </h2>
  );
};
