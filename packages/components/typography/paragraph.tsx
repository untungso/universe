import * as React from "react";

interface TextProps {
  children: React.ReactNode | React.ReactNode[];
}
export const Paragraph = (props: TextProps) => {
  return (
    <p className="font-base text-md mb-4 text-justify font-sans leading-relaxed">
      {props.children}
    </p>
  );
};
