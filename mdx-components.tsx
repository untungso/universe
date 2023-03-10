import {
  Heading,
  SafeParagraph,
  StyledCode,
  SubTitle,
  Title,
} from "@/components/server";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      return <Title>{children as string}</Title>;
    },
    h2: ({ children }) => {
      return <SubTitle>{children as string}</SubTitle>;
    },
    h3: ({ children }) => {
      return <Heading>{children as string}</Heading>;
    },
    h4: ({ children }) => {
      return <StyledCode>{children as string}</StyledCode>;
    },
    p: ({ children }) => {
      return <SafeParagraph>{children as string}</SafeParagraph>;
    },
    ...components,
  };
}
