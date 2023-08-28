import { Suspense } from "react";
import { GameView } from "./game";

export const metadata = {
  title: "Explore",
  description: "Explorer Genesis",
};

export default function ExplorePage() {
  return (
    <Suspense>
      <GameView />
    </Suspense>
  );
}
