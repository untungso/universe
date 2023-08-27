import { PrimaryButton } from "@/components/client";
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
import LocaleSwitcher from "./locale-switcher";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ThemeChanger = dynamic(() => import("./theme"), {
  loading: () => <p>Loading...</p>,
});

export default async function Root({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <BaseLayout>
      <Suspense>
        <ThemeChanger />
      </Suspense>
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
      <div className="mb-36 flex flex-col gap-4">
        <PrimaryButton>{dictionary["landing"].greetings}</PrimaryButton>
      </div>
    </BaseLayout>
  );
}
