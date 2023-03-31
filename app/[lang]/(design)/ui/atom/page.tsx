import {
  AltButton,
  CheckBoxInput,
  Debug,
  PrimaryButton,
  RadioInput,
  SecondaryButton,
  SelectInput,
  TextInput,
} from "@/components/client";
import { BaseLayout, Section, StyledCode, Title } from "@/components/server";
import { Suspense } from "react";
import LocaleSwitcher from "../../../(home)/locale-switcher";
import HelloWorld from "./hello.mdx";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Atom] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function AtomDebug() {
  return (
    <BaseLayout>
      <Section>
        <StyledCode>UiDebug</StyledCode>
        <Title>Atom</Title>
      </Section>
      <Section className="prose lg:prose-xl">
        <HelloWorld />
      </Section>
      <Section>
        <StyledCode>LocaleSwitcher</StyledCode>
        <Suspense>
          <LocaleSwitcher />
        </Suspense>
      </Section>
      <Section>
        <StyledCode>Button</StyledCode>
        <div className="flex flex-col items-start justify-start gap-6">
          <StyledCode>PrimaryButton</StyledCode>
          <PrimaryButton>Hello Primary Button</PrimaryButton>
          <StyledCode>SecondaryButton</StyledCode>
          <SecondaryButton>Hello Secondary Button</SecondaryButton>
          <StyledCode>AltButton</StyledCode>
          <AltButton>Hello Alt Button</AltButton>
        </div>
      </Section>
      <Section>
        <StyledCode>Input</StyledCode>
        <TextInput placeholder="Hello Placeholder Text" />
      </Section>
      <Section>
        <StyledCode>Radio</StyledCode>
        <RadioInput
          name="Programming Language"
          data={[
            { label: "Go", key: "go-lang" },
            { label: "Rust", key: "rust-lang" },
            { label: "Javasript", key: "js" },
          ]}
        />
      </Section>
      <Section>
        <Debug debugString="<Checkboxes/>">
          <StyledCode>Checkboxes</StyledCode>
          <CheckBoxInput
            name="Nicest Chips"
            data={[
              { label: "Walker", key: "walker" },
              { label: "Tyler's", key: "tylers" },
              { label: "Chitato", key: "chitato" },
            ]}
          />
        </Debug>
      </Section>
      <Section>
        <StyledCode>Select</StyledCode>
        <SelectInput />
      </Section>
    </BaseLayout>
  );
}
