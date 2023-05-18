import React from "react";
import buttonStyle from "./button.module.scss";
export default function Button({ children, onClick, className }) {
  const { btn } = buttonStyle;
  return (
    <button className={`${btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
