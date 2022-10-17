import type { ReactElement } from "react";
import { oke } from "@instead/facades";

export default function Init(): ReactElement {
  return (
    <div>
      <div>{oke()}</div>
    </div>
  );
}
