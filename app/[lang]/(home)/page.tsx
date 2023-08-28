import { BaseLayout } from "@/components/server";
import { Locale, getDictionary } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  const cookieStore = cookies();
  const isWelcomed = cookieStore.get("welcome-bot");
  if (isWelcomed === undefined || false) {
    redirect(`/${lang}/welcome`);
  }
  return (
    <BaseLayout>
      <p>{dictionary.landing.greetings}</p>
    </BaseLayout>
  );
}
