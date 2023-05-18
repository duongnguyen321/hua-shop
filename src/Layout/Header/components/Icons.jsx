import React from "react";
import { Link } from "react-router-dom";

export default function Icons({ icons, icon, cart, profile }) {
  return (
    <div className={icons}>
      <Link to={cart} className={icon}>
        <i className="fas fa-cart-shopping"></i>
      </Link>
      <Link to={profile} className={icon}>
        <i className="fas fa-user"></i>
      </Link>
    </div>
  );
}
