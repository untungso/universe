import {
  Heading,
  InsteadLogo,
  Paragraph,
  StyledCode,
  SubTitle,
  Debug,
  Section,
  Title,
} from "@/components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "[Token] UI Debug",
  description: "Lupa Makan, Lupa Tidur, Malah Ngoding",
};

export default function TokenDebug() {
  return (
    <div className="max-w-[640px] p-4">
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
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-slate-12 bg-slate-1" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-2" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-3" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-4" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-5" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-6" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-8" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-9" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-10" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-11" />
            <div className="h-12 w-12 border border-slate-12 bg-slate-12" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorBlue</StyledCode>
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-blue bg-blue-100" />
            <div className="h-12 w-12 border border-blue bg-blue-800" />
            <div className="h-12 w-12 border border-blue bg-blue" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorGreen</StyledCode>
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-green bg-green-100" />
            <div className="h-12 w-12 border border-green bg-green-800" />
            <div className="h-12 w-12 border border-green bg-green" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorYellow</StyledCode>
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-yellow bg-yellow-100" />
            <div className="h-12 w-12 border border-yellow bg-yellow-800" />
            <div className="h-12 w-12 border border-yellow bg-yellow" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorRed</StyledCode>
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-red bg-red-100" />
            <div className="h-12 w-12 border border-red bg-red-800" />
            <div className="h-12 w-12 border border-red bg-red" />
          </div>
        </Debug>
        <Debug>
          <StyledCode>ColorPink</StyledCode>
          <div className="mb-4 flex flex-row flex-wrap gap-4">
            <div className="h-12 w-12 border border-pink bg-pink-100" />
            <div className="h-12 w-12 border border-pink bg-pink-800" />
            <div className="h-12 w-12 border border-pink bg-pink" />
          </div>
        </Debug>
      </Section>
    </div>
  );
}
