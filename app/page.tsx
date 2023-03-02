import {
  Heading,
  SubTitle,
  Title,
  Paragraph,
  InsteadLogo,
  StyledCode,
} from "@/components";

import Link from "next/link";

export default function Root() {
  return (
    <main className="max-w-[640px] p-4">
      <StyledCode>Title</StyledCode>
      <Title>Halo Semua!</Title>
      <StyledCode>SubTitle</StyledCode>
      <SubTitle>Selamat Datang di Dunia</SubTitle>
      <StyledCode>Heading</StyledCode>
      <Heading>Malah Ngoding</Heading>
      <StyledCode>InsteadLogo</StyledCode>
      <InsteadLogo scale={1} />
      <StyledCode>Paragraph</StyledCode>
      <Paragraph>
        Selamat datang di <strong>Malah Ngoding</strong>. Kami merupakan
        platform pembelajaran praktis untuk siapapun yang ingin menulis kode.
        Kami berharap platform ini bisa menjadi media untuk membantu teman{" "}
        <strong>Malah Ngoding</strong> belajar dan mengembangkan diri.
      </Paragraph>
      <StyledCode>Paragraph</StyledCode>
      <Paragraph>
        <strong>Malah Ngoding</strong> juga menyediakan jasa konsultasi untuk
        projek digital kamu. Silahkan hubungi kami pada surel{" "}
        <a className="font-bold underline" href="mailto:malahngoding@gmail.com">
          malahngoding@gmail.com
        </a>{" "}
        untuk diskusi lebih lanjut.
      </Paragraph>
      <Link href={`/ui-debug`}>
        <button className="text-md box-shadow rounded-md border-2 border-slate-12 bg-slate-1 px-6 py-2 font-semibold drop-shadow-md hover:drop-shadow-lg">
          Mulai
        </button>
      </Link>
    </main>
  );
}
