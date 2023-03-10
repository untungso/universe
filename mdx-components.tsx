import {
  Heading,
  InsteadLogo,
  Paragraph,
  StyledCode,
  SubTitle,
  Section,
  Title,
} from "@/components/server";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      return <h1>{children}</h1>;
    },
    ...components,
  };
}
