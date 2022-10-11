import * as React from "react";

interface ButtonProps {
  children: React.ReactElement | React.ReactElement[] | string;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  return <button>{props.children}</button>;
};
