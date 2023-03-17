import Image from "next/image";
import * as React from "react";

interface LogoProps {
  scale: number;
}

export const InsteadLogo = (props: LogoProps) => {
  return (
    <Image
      src="/assets/512x512.png"
      height={128 * props.scale}
      width={128 * props.scale}
      alt="Malah Ngoding Logo"
      priority={true}
    />
  );
};
