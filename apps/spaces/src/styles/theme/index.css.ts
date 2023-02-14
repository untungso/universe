import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const bluePrint = createThemeContract({
  color: {
    slate1: ``,
    slate2: ``,
    slate3: ``,
    slate4: ``,
    slate5: ``,
    slate6: ``,
    slate7: ``,
    slate8: ``,
    slate9: ``,
    slate10: ``,
    slate11: ``,
    slate12: ``,
  },
  transparent: {
    left: ``,
    right: ``,
  },
});

export const globalTheme = createGlobalTheme(`:root`, {
  family: {
    mono: `'NectoMono', monospace`,
    sans: `'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
  },
  fontWeights: {
    normal: `400`,
    bold: `700`,
  },
  fontSizes: {
    xsmall: `0.6rem`,
    smallest: `0.65rem`,
    smaller: `0.7rem`,
    small: `0.75rem`,
    regular: `0.8rem`,
    large: `1rem`,
    larger: `1.4rem`,
    largest: `1.6rem`,
    xlarge: `1.7rem`,
    xxlarge: `1.8rem`,
  },
  radii: {
    none: `0px`,
    xxs: `2px`,
    xs: `4px`,
    sm: `6px`,
    lg: `16px`,
  },
  space: {
    none: `0px`,
    xsmall: `2px`,
    smallest: `4px`,
    smaller: `8px`,
    small: `12px`,
    regular: `16px`,
    large: `20px`,
    larger: `24px`,
    largest: `36px`,
    xlarge: `40px`,
    xxlarge: `48px`,
  },
});

export const vars = { ...globalTheme, bluePrint };
