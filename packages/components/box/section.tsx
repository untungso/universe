import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode | ReactNode[];
}

export const Section = (props: SectionProps) => {
  return <div>{props.children}</div>;
};
