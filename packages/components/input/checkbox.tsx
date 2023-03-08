"use client";

import * as React from "react";

interface RadioInputProps {
  name: string;
  data: { key: string; label: string }[];
}

export const CheckBoxInput = (props: RadioInputProps) => {
  return (
    <React.Fragment>
      {props.data.map((item) => {
        return (
          <div key={item.key} className="mb-4 block h-full min-h-full pl-6">
            <input
              className="before:bg-transparent relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-slate-2 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-slate-2 after:content-[''] checked:border-slate-12 checked:bg-slate-2 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-slate-12 checked:after:bg-slate-12 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-slate-12 checked:focus:bg-slate-2 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              type="checkbox"
              id={item.key}
              name={props.name}
              value={item.key}
            />
            <label
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
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
