"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const MusicPlayer = dynamic(() => import("./music-player"), { ssr: false });

export const Loader = () => {
  return (
    <Suspense fallback={<></>}>
      <MusicPlayer />
    </Suspense>
  );
};
