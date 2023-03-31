import { BaseLayout } from "@/components/server";
import { Suspense } from "react";

export default function ExplorePage() {
  return (
    <BaseLayout>
      <Suspense>
        <h1>Explore</h1>
      </Suspense>
    </BaseLayout>
  );
}
