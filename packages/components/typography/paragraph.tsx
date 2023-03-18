import * as React from "react";

interface TextProps {
  children: string;
}
export const Paragraph = (props: TextProps) => {
  return (
    <p
      className="font-base mb-4 text-justify font-sans text-base leading-relaxed"
      dangerouslySetInnerHTML={{ __html: props.children }}
    ></p>
  );
};
