import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
export const AltButton = (props: ButtonProps) => {
  return (
    <button className="text-md box-shadow w-full rounded-md border-2 border-none bg-none px-6 py-2 font-semibold text-slate-12 hover:underline dark:text-slate-1">
      {props.children}
    </button>
  );
};
