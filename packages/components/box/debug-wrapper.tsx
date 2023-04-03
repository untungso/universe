"use client";
import * as React from "react";

interface DebugProps {
  children: React.ReactNode | React.ReactNode[];
  debugString?: string;
}
export const Debug = (props: DebugProps) => {
  const [shown, setShown] = React.useState<boolean>(false);
  return (
    <div
      className="relative border border-slate-1 pb-2 transition-colors hover:border-red hover:bg-red-100	dark:hover:bg-red"
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {props.children}
      {shown ? (
        <span className="font-base absolute bottom-0 right-0 text-xs">
          {props.debugString ?? ""}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};
