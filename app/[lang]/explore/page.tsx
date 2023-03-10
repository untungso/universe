import { Suspense } from "react";
import dynamic from "next/dynamic";

const LazyExampleThreeJS = dynamic(() => import("@/components/three/example"));

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Suspense>
        <LazyExampleThreeJS />
      </Suspense>
    </div>
  );
}
