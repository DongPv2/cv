import React from "react";
import styles from "./button.module.scss";
interface Props {
  children: string | JSX.Element | any;
  color?: "primary" | "danner" | "gray";
}

export default function Button(props: Props) {
  const { children, color = "primary" } = props;
  return (
    <div className={`${styles.button} ${styles[`button-${color}`]}`}>
      {children}
    </div>
  );
}
