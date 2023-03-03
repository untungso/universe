import * as React from "react";
import Image from "next/image";

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
    />
  );
};
