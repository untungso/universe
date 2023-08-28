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
