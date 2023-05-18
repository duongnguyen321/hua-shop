import React from "react";
import sectionStyle from "./section.module.scss";
export default function Section({ children, className }) {
  const { section } = sectionStyle;
  return <section className={`${section} ${className}`}>{children}</section>;
}
