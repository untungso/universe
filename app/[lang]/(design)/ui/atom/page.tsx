import {
  AltButton,
  CheckBoxInput,
  Debug,
  PrimaryButton,
  RadioInput,
  SecondaryButton,
  TextInput,
} from "@/components/client";
import { BaseLayout, Section, StyledCode, Title } from "@/components/server";
import { Suspense } from "react";
import LocaleSwitcher from "@/components/magic/locale-switcher";
import HelloWorld from "./hello.mdx";
import dynamic from "next/dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Atom] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

const ThemeChanger = dynamic(() => import("@/components/magic/theme"), {
  loading: () => <p className="my-3 font-mono">Loading...</p>,
  ssr: false,
});

export default function AtomDebug() {
  return (
    <BaseLayout>
      <Section>
        <StyledCode>UiDebug</StyledCode>
        <Title>Atom</Title>
      </Section>
      <Section>
        <StyledCode>LocaleSwitcher</StyledCode>
        <Suspense>
          <LocaleSwitcher />
        </Suspense>
      </Section>
      <Section>
        <StyledCode>ThemeChanger</StyledCode>
        <Suspense>
          <ThemeChanger />
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
        <div className="flex flex-col items-start justify-start gap-6">
          <TextInput placeholder="Hello Placeholder Text" />
          <Debug debugString="<RadioInput/>">
            <StyledCode>Radio</StyledCode>
            <RadioInput
              name="Programming Language"
              data={[
                { label: "Go", key: "go-lang" },
                { label: "Rust", key: "rust-lang" },
                { label: "Javasript", key: "js" },
              ]}
            />
          </Debug>
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
        </div>
      </Section>
      <br />
      <Section className="prose lg:prose-xl">
        <HelloWorld />
      </Section>
    </BaseLayout>
  );
}
