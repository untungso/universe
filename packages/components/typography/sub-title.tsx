import * as React from "react";

interface TextProps {
  children: string;
}
export const SubTitle = (props: TextProps) => {
  return (
    <h2 className="mb-1 font-sans text-2xl font-black text-slate-12">
      {props.children}
    </h2>
  );
};
