/**
 */
import { sprinkles } from "../../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";
/**
 *
 */
export const styledTwoSide = style([
  sprinkles({
    display: `grid`,
    gridTemplateColumns: {
      mobile: `1fr`,
      desktop: `1fr 1fr`,
    },
  }),
  {
    top: `auto`,
    textAlign: `justify`,
  },
]);

export const styledMain = style([]);

export const styledSide = style([]);
