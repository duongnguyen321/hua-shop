import React from "react";
import { Link } from "react-router-dom";
export default function Credit({ credit, home }) {
  return (
    <h1 className={credit}>
      created by <Link to={home}>HUAShop</Link> | all rights reserved!
    </h1>
  );
}
