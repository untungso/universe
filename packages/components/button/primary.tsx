import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
export const PrimaryButton = (props: ButtonProps) => {
  return (
    <button className="text-md box-shadow w-full rounded-md border-2 border-slate-12 bg-slate-1 px-6 py-2 font-semibold text-slate-12 drop-shadow-md hover:drop-shadow-lg">
      {props.children}
    </button>
  );
};
