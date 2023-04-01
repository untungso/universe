"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

interface ProvidersProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Providers(props: ProvidersProps) {
  return <ThemeProvider>{props.children}</ThemeProvider>;
}
