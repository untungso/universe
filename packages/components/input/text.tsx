import * as React from "react";

interface TextInputProps {
  placeholder?: string;
}

export const TextInput = (props: TextInputProps) => {
  return (
    <React.Fragment>
      <input
        className="text-md font-base w-full rounded-md border-2 border-slate-12 px-6 py-2 placeholder:text-slate-10"
        type="text"
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};
