import { Suspense } from "react";

export const metadata = {
  title: "Explore",
  description: "Explorer Genesis",
};

export default function ExplorePage() {
  const arr = Array.from(Array(56).keys());

  return (
    <Suspense>
      <h1>Explore</h1>
      <div className="flex flex-row flex-wrap items-start justify-start gap-3">
        {arr.map((item) => {
          return (
            <Card
              key={item}
              name="Test 1"
              assets={`/assets/1X/${item < 10 ? `0${item}` : item}.png`}
              scale={1.5}
            />
          );
        })}
      </div>
    </Suspense>
  );
}

/*


*/
import Image from "next/image";

interface CardProps {
  name: string;
  assets: string;
  scale: number;
}

export const Card = (props: CardProps) => {
  return (
    <div>
      <Image
        src={props.assets}
        alt={props.name}
        height={126 * props.scale}
        width={90 * props.scale}
        style={{ width: 90 * props.scale, height: 126 * props.scale }}
        className="rendering-pixelated border-2 border-slate-12 dark:border-slate-1"
        quality={100}
      />
    </div>
  );
};
