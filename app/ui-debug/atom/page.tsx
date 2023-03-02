import { Heading, StyledCode, Title } from "@/components";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "[Atom] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  return <div className="pb-8">{props.children}</div>;
};

export default function AtomDebug() {
  return (
    <div className="p-4 max-w-[640px]">
      <Section>
        <StyledCode>UiDebug</StyledCode>
        <Title>Atom</Title>
      </Section>
      <Section>
        <StyledCode>Button</StyledCode>
        <Heading>🚧 Under Construction 🚧</Heading>
      </Section>
      <Section>
        <StyledCode>Input</StyledCode>
        <Heading>🚧 Under Construction 🚧</Heading>
      </Section>
      <Section>
        <StyledCode>Radio</StyledCode>
        <Heading>🚧 Uner Construction 🚧</Heading>
      </Section>
      <Section>
        <StyledCode>Checkboxes</StyledCode>
        <Heading>🚧 Under Construction 🚧</Heading>
      </Section>
      <Section>
        <StyledCode>Select</StyledCode>
        <Heading>🚧 Under Construction 🚧</Heading>
      </Section>
    </div>
  );
}
