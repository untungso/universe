import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 max-w-[640px]">
      <p className="text-sm font-mono">{`<Title />`}</p>
      <h1 className="text-4xl font-black text-slate-12 mb-2 font-sans">
        Halo Semua
      </h1>
      <p className="text-sm font-mono">{`<SubTitle />`}</p>
      <h2 className="text-2xl font-black text-slate-12 mb-1 font-sans">
        Selamat Datang di Dunia
      </h2>
      <p className="text-sm font-mono">{`<Heading />`}</p>
      <h2 className="text-3xl font-base text-slate-12 mb-3 font-sans">
        Malah Ngoding
      </h2>
      <p className="text-sm font-mono">{`<InsteadLogo />`}</p>
      <Image
        src="/assets/512x512.png"
        height={128}
        width={128}
        alt="Malah Ngoding Logo"
      />
      <p className="text-sm font-mono">{`<Paragraph />`}</p>
      <p className="font-base leading-relaxed mb-4 text-md font-sans">
        Selamat datang di <strong>Malah Ngoding</strong>. Kami merupakan
        platform pembelajaran praktis untuk siapapun yang ingin menulis kode.
        Kami berharap platform ini bisa menjadi media untuk membantu teman{" "}
        <strong>Malah Ngoding</strong> belajar dan mengembangkan diri.
      </p>
      <p className="font-base leading-relaxed mb-4 text-md font-sans">
        <strong>Malah Ngoding</strong> juga menyediakan jasa konsultasi untuk
        projek digital kamu. Silahkan hubungi kami pada surel{" "}
        <a className="underline font-bold" href="mailto:malahngoding@gmail.com">
          malahngoding@gmail.com
        </a>{" "}
        untuk diskusi lebih lanjut.
      </p>
    </main>
  );
}
