import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode | ReactNode[];
}

export const Section = (props: SectionProps) => {
  return <div className="py-6">{props.children}</div>;
};
