import {
  Heading,
  InsteadLogo,
  Paragraph,
  StyledCode,
  SubTitle,
  Title,
} from "@/components";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "[Token] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

interface SectionProps {
  children: ReactNode;
}

const Section = (props: SectionProps) => {
  return <div className="pb-8 ">{props.children}</div>;
};

interface DebugProps {
  children: ReactNode;
}

const Debug = (props: DebugProps) => {
  return (
    <div className="border border-slate-1 hover:border-red hover:bg-red-100">
      {props.children}
    </div>
  );
};

export default function TokenDebug() {
  return (
    <div className="p-4 max-w-[640px]">
      <Section>
        <Debug>
          <StyledCode>UiDebug</StyledCode>
          <Title>Token</Title>
        </Debug>
      </Section>
      <Section>
        <Debug>
          <StyledCode>InsteadLogo</StyledCode>
          <InsteadLogo scale={1} />
        </Debug>
      </Section>
      <Section>
        <Debug>
          <StyledCode>Title</StyledCode>
          <Title>
            Sebegitu perjakanya si Qozy baca faidah sinar X di mobil VW.
          </Title>
        </Debug>
        <Debug>
          <StyledCode>SubTitle</StyledCode>
          <SubTitle>
            Gatotkaca beri Pergiwa zamrud hijau xifoid, asli punya Van Queen.
          </SubTitle>
        </Debug>
        <Debug>
          <StyledCode>Heading</StyledCode>
          <Heading>
            Muharjo seorang xenofobia universal yang takut pada warga jazirah,
            contohnya Qatar.
          </Heading>
        </Debug>
        <Debug>
          <StyledCode>Paragraph</StyledCode>
          <Paragraph>
            <strong>Lorem ipsum</strong>, atau ringkasnya lipsum, adalah teks
            standar yang ditempatkan untuk mendemostrasikan elemen grafis atau
            presentasi visual seperti font, tipografi, dan tata letak. Maksud
            penggunaan lipsum adalah agar pengamat tidak terlalu berkonsentrasi
            kepada arti harfiah per kalimat, melainkan lebih kepada elemen
            desain dari teks yang dipresentasi.
          </Paragraph>
        </Debug>
      </Section>
      <Section>
        <Debug>
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
        </Debug>
        <Debug>
          <StyledCode>ColorBlue</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-blue-100 border border-blue" />
            <div className="h-12 w-12 bg-blue-800 border border-blue" />
            <div className="h-12 w-12 bg-blue border border-blue" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorGreen</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-green-100 border border-green" />
            <div className="h-12 w-12 bg-green-800 border border-green" />
            <div className="h-12 w-12 bg-green border border-green" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorYellow</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-yellow-100 border border-yellow" />
            <div className="h-12 w-12 bg-yellow-800 border border-yellow" />
            <div className="h-12 w-12 bg-yellow border border-yellow" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorRed</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-red-100 border border-red" />
            <div className="h-12 w-12 bg-red-800 border border-red" />
            <div className="h-12 w-12 bg-red border border-red" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorPink</StyledCode>
          <div className="flex flex-row flex-wrap gap-4 mb-4">
            <div className="h-12 w-12 bg-pink-100 border border-pink" />
            <div className="h-12 w-12 bg-pink-800 border border-pink" />
            <div className="h-12 w-12 bg-pink border border-pink" />
          </div>
        </Debug>
      </Section>
    </div>
  );
}
