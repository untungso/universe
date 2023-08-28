import { BaseLayout } from "@/components/server";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BaseLayout>{children}</BaseLayout>;
}
