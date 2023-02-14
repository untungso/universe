import { sprinkles } from "../../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const styledConnectButton = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    gap: `smaller`,
    justifyContent: `center`,
    alignItems: `center`,
  }),
]);
