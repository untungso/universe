import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme/index.css";

globalStyle("html, body", {
  margin: 0,
});

globalStyle("*", {
  fontFamily: vars.family.sans,
  backgroundColor: vars.bluePrint.color.slate1,
});
