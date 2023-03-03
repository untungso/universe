import * as React from "react";

interface TextInputProps {
  placeholder?:string;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <React.Fragment>
      <input className="border-2 border-slate-12 rounded-md px-6 py-2 text-md placeholder:text-slate-10 font-base w-full" type="text" placeholder={props.placeholder} />
    </React.Fragment>
  );
};
