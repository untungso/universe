import { PrimaryButton, SecondaryButton } from "@/components/client";
import {
  BaseLayout,
  Heading,
  InsteadLogo,
  Paragraph,
  StyledCode,
  SubTitle,
  Title,
} from "@/components/server";
import { getDictionary, Locale } from "@/utils";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";

export default async function Root({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <BaseLayout>
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
      <div className="mt-36 flex flex-col gap-4">
        <Link href={`/${lang}/explore`}>
          <PrimaryButton>{dictionary["landing"].greetings}</PrimaryButton>
        </Link>

        <Link href={`/${lang}/ui-debug`}>
          <SecondaryButton>UI Debug</SecondaryButton>
        </Link>
      </div>
    </BaseLayout>
  );
}
