import { BaseLayout } from "@/components/server";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LazyExampleThreeJS = dynamic(() => import("@/components/three/example"));

export default function ExplorePage() {
  return (
    <BaseLayout>
      <Suspense>
        <LazyExampleThreeJS />
      </Suspense>
    </BaseLayout>
  );
}
