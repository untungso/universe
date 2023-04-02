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
    a: ({ children }) => {
      return (
        <a className="font-base text-base text-slate-12 hover:cursor-pointer dark:text-slate-1">
          {children as string}
        </a>
      );
    },
    ul: ({ children }) => {
      return (
        <ul className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </ul>
      );
    },
    ol: ({ children }) => {
      return (
        <ol className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </ol>
      );
    },
    li: ({ children }) => {
      return (
        <li className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </li>
      );
    },
    code: ({ children }) => {
      return (
        <code className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </code>
      );
    },
    pre: ({ children }) => {
      return (
        <pre className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </pre>
      );
    },
    strong: ({ children }) => {
      return (
        <strong className="font-base text-base text-slate-12 dark:text-slate-1">
          {children as string}
        </strong>
      );
    },
    ...components,
  };
}
