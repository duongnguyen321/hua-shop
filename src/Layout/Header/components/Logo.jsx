import React from "react";
import Links from "../../../helper/Link";

export default function Logo({ home, logo, logo_highlight }) {
  return (
    <Links to={home} type="link" className={logo}>
      <span className={logo_highlight}>Hua</span>
      Shop
    </Links>
  );
}
