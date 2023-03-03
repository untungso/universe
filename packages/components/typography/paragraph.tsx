import * as React from "react";

interface TextProps {
  children: string;
}
export const Paragraph = (props: TextProps) => {
  return (
    <p
      className="font-base text-md mb-4 text-justify font-sans leading-relaxed"
      dangerouslySetInnerHTML={{ __html: props.children }}
    ></p>
  );
};
