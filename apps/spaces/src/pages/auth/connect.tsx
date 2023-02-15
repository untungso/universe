/**
 *
 */
import { getProviders, signIn } from "next-auth/react";
import { AuthLayout } from "../../layouts/auth";
import { ConnectForm } from "../../modules/auth/connect-form";
import type { GetServerSidePropsContext } from "next";
import { Heading } from "../../components/typography/heading";
import { InsteadLocale } from "../../modules/i18n";
import { Logo } from "../../components/branding/logo";
import { Paragraph } from "../../components/typography/paragraph";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { useI18n } from "next-rosetta";
/**
 *
 */
interface ConnectPageProps {
  connect?: boolean;
  providers: any;
}

export default function ConnectPage(props: ConnectPageProps) {
  const { t } = useI18n<InsteadLocale>();

  return (
    <AuthLayout title={t("auth.title")}>
      <Logo size={72} />
      <Heading>{t("auth.title")}</Heading>
      <Paragraph>{t("auth.subTitle")}</Paragraph>
      <ConnectForm />
      <>
        {Object.values(props.providers).map((provider: any) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    </AuthLayout>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`../../modules/i18n/${locale}`);

  return {
    props: { providers: providers ?? [], table },
  };
}
