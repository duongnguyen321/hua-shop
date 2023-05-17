import React from "react";
import loadingStyle from "./loading.module.scss";
export default function Loading() {
  const { loading,title, container, dash, uno, dos, tres, cuatro } = loadingStyle;
  return (
    <div className={loading}>
      <h1 className={title}>Loading...</h1>
      <div className={container}>
        <div className={`${dash} ${uno}`}></div>
        <div className={`${dash} ${dos}`}></div>
        <div className={`${dash} ${tres}`}></div>
        <div className={`${dash} ${cuatro}`}></div>
      </div>
    </div>
  );
}
