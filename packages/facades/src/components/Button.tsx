import * as React from "react";
import * as styles from "./Button.css";

interface ButtonProps {
  children: React.ReactElement | React.ReactElement[] | string;
}

export const Button = (props: ButtonProps): React.ReactElement => {
  return <button className={styles.styledButton}>{props.children}</button>;
};
