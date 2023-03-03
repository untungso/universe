import {
  AltButton,
  Debug,
  Heading,
  PrimaryButton,
  SecondaryButton,
  Section,
  StyledCode,
  TextInput,
  Title,
} from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Atom] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function AtomDebug() {
  return (
    <div className="max-w-[640px] p-4">
      <Section>
        <Debug>
          <StyledCode>UiDebug</StyledCode>
          <Title>Atom</Title>
        </Debug>
      </Section>
      <Section>
        <StyledCode>Button</StyledCode>
        <div className="flex flex-col items-start justify-start gap-6">
          <Debug>
            <StyledCode>PrimaryButton</StyledCode>
            <PrimaryButton>Hello Primary Button</PrimaryButton>
          </Debug>
          <Debug>
            <StyledCode>SecondaryButton</StyledCode>
            <SecondaryButton>Hello Secondary Button</SecondaryButton>
          </Debug>
          <Debug>
            <StyledCode>AltButton</StyledCode>
            <AltButton>Hello Alt Button</AltButton>
          </Debug>
        </div>
      </Section>
      <Section>
        <Debug>
          <StyledCode>Input</StyledCode>
          <TextInput placeholder="Hello Placeholder Text"/>
        </Debug>
      </Section>
      <Section>
          <StyledCode>Radio</StyledCode>
          <Heading>🚧 Under Construction 🚧</Heading>
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
