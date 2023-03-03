import {
  Heading,
  SubTitle,
  Title,
  Paragraph,
  InsteadLogo,
  StyledCode,
  PrimaryButton,
} from "@/components";
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
      <Link href={`/ui-debug`}>
        <PrimaryButton>{dictionary["landing"].greetings}</PrimaryButton>
      </Link>
    </main>
  );
}
