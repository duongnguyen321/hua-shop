import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ home, logo, logo_highlight }) {
  return (
    <Link to={home} className={logo}>
      <span className={logo_highlight}>Hua</span>
      Shop
    </Link>
  );
}
