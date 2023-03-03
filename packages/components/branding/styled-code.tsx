import * as React from "react";

interface StyledCodeProps {
  children: string;
}
export const StyledCode = (props: StyledCodeProps) => {
  return (
    <p className="font-mono text-sm capitalize">{`<${props.children}/>`}</p>
  );
};
