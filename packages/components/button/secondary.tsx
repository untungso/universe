import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}
export const SecondaryButton = (props: ButtonProps) => {
  return (
    <button className="text-md box-shadow w-full rounded-md border-2 border-yellow bg-slate-12 px-6 py-2 font-semibold text-slate-1 drop-shadow-md hover:border-pink hover:drop-shadow-lg">
      {props.children}
    </button>
  );
};
