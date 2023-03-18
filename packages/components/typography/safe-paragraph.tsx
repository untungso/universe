import * as React from "react";

interface TextProps {
  children: string;
}
export const SafeParagraph = (props: TextProps) => {
  return (
    <p className="font-base mb-4 text-justify font-sans text-base leading-relaxed">
      {props.children}
    </p>
  );
};
