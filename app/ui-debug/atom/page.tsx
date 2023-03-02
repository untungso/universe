import { Heading, Section, StyledCode, Title } from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Atom] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function AtomDebug() {
  return (
    <div className="max-w-[640px] p-4">
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
