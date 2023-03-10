import {
  Heading,
  SubTitle,
  Title,
  Paragraph,
  InsteadLogo,
  StyledCode,
} from "@/components/server";
import { PrimaryButton } from "@/components/client";
import { Locale, getDictionary } from "@/utils";

import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";

export default async function Root({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="max-w-[640px] p-4">
      <StyledCode>LocaleSwitcher</StyledCode>
      <LocaleSwitcher />
      <StyledCode>Title</StyledCode>
      <Title>{dictionary["landing"].greetings}</Title>
      <StyledCode>SubTitle</StyledCode>
      <SubTitle>{dictionary["landing"].welcome}</SubTitle>
      <StyledCode>Heading</StyledCode>
      <Heading>Malah Ngoding</Heading>
      <StyledCode>InsteadLogo</StyledCode>
      <InsteadLogo scale={1} />
      <StyledCode>Paragraph</StyledCode>
      <Paragraph>{dictionary["landing"].first}</Paragraph>
      <StyledCode>Paragraph</StyledCode>
      <Paragraph>{dictionary["landing"].second}</Paragraph>
      <Link href={`/${lang}/ui-debug`}>
        <PrimaryButton>{dictionary["landing"].greetings}</PrimaryButton>
      </Link>
      <FlyingFooter />
    </main>
  );
}

const FlyingFooter = () => {
  return (
    <div className="fixed bottom-0 h-8 w-screen">
      <div className="flex w-full flex-row items-center justify-center">
        <p className="text-xs">Lupa Makan, Lupa Tidur, Malah Ngoding</p>
      </div>
    </div>
  );
};
