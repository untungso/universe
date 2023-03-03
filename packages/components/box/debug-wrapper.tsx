import * as React from "react";

interface DebugProps {
  children: React.ReactNode | React.ReactNode[];
}
export const Debug = (props: DebugProps) => {
  return (
    <div className="border border-slate-1 hover:border-red hover:bg-red-100">
      {props.children}
    </div>
  );
};
