import React from "react";
import Links from "../../../../helper/Link";
export default function Credit({ credit, home }) {
  return (
    <h1 className={credit}>
      created by <Links path={home}>HUAShop</Links> | all rights reserved!
    </h1>
  );
}
