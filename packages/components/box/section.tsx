import * as React from "react";

interface SectionProps {
  children: React.ReactNode | React.ReactNode[];
}
export const Section = (props: SectionProps) => {
  return <div className="py-6">{props.children}</div>;
};
