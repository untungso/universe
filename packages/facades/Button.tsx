import * as React from "react";

interface ButtonProps {
  children: React.ReactElement | React.ReactElement[] | string;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  return (
    <button
      style={{
        padding: `4px 16px`,
        border: `2px solid black`,
      }}
    >
      {props.children}
    </button>
  );
};
