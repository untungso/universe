import * as React from "react";

interface RadioInputProps {
  name: string;
  data: { key: string; label: string }[];
}

export const RadioInput = (props: RadioInputProps) => {
  return (
    <React.Fragment>
      {props.data.map((item) => {
        return (
          <div
            key={item.key}
            className="flex w-full flex-row items-center justify-start"
          >
            <input
              type="radio"
              id={item.key}
              name={props.name}
              value={item.key}
              className="ml-2 mr-[-21px] h-full border-2 border-slate-12 accent-slate-12"
            />
            <label
              className="h-full w-full rounded-md border-2 border-slate-2 py-2 pl-8 pr-6 hover:border-2 hover:border-slate-12"
              htmlFor={item.key}
            >
              <span className="text-md font-base">{item.label}</span>
            </label>
          </div>
        );
      })}
    </React.Fragment>
  );
};
