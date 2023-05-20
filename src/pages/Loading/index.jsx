import React from "react";
import loadingStyle from "./loading.module.scss";
export default function Loading() {
  const { loading, container, dash, uno, dos, tres, cuatro } = loadingStyle;
  return (
    <div className={loading}>
      <div className={container}>
        <div className={`${dash} ${uno}`}></div>
        <div className={`${dash} ${dos}`}></div>
        <div className={`${dash} ${tres}`}></div>
        <div className={`${dash} ${cuatro}`}></div>
      </div>
    </div>
  );
}
