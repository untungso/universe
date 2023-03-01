import { StyledCode, Title } from "@/components";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  return <div className="pb-8">{props.children}</div>;
};

export default function UiDebug() {
  return (
    <div className="container w-full mx-auto md:max-w-3xl">
      <div className="w-full p-4 leading-normal md:p-6 text-md">
        <Section>
          <StyledCode>UiDebug</StyledCode>
          <Title>Halo Semua,</Title>
        </Section>
        <Section>
          <StyledCode>ColorSlate</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-slate-1 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-2 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-3 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-4 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-5 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-6 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-8 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-9 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-10 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-11 border border-slate-12" />
            <div className="h-12 w-12 bg-slate-12 border border-slate-12" />
          </div>
          <StyledCode>ColorBlue</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-blue-100 border border-blue" />
            <div className="h-12 w-12 bg-blue-800 border border-blue" />
            <div className="h-12 w-12 bg-blue border border-blue" />
          </div>
          <StyledCode>ColorGreen</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-green-100 border border-green" />
            <div className="h-12 w-12 bg-green-800 border border-green" />
            <div className="h-12 w-12 bg-green border border-green" />
          </div>
          <StyledCode>ColorYellow</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-yellow-100 border border-yellow" />
            <div className="h-12 w-12 bg-yellow-800 border border-yellow" />
            <div className="h-12 w-12 bg-yellow border border-yellow" />
          </div>
          <StyledCode>ColorRed</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-red-100 border border-red" />
            <div className="h-12 w-12 bg-red-800 border border-red" />
            <div className="h-12 w-12 bg-red border border-red" />
          </div>
          <StyledCode>ColorPink</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-pink-100 border border-pink" />
            <div className="h-12 w-12 bg-pink-800 border border-pink" />
            <div className="h-12 w-12 bg-pink border border-pink" />
          </div>
        </Section>
        <Section>
          <StyledCode>Footer</StyledCode>
          <p className="text-3xl">🇮🇩</p>
          <p className="font-mono font-light">Mad Respect,</p>
          <p className="text-sm font-sans font-black">Team Malah Ngoding</p>
        </Section>
      </div>
    </div>
  );
}
