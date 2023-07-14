import React from "react";
import Links from "../../../../helper/Link";
export default function Credit({ credit, home }) {
  return (
    <p className={credit}>
      created by <Links to={home}>HUAShop</Links> | all rights reserved!
    </p>
  );
}
