import React from "react";
import Links from "../../../helper/Link";
export default function Icons({ icons, icon, cart, profile }) {
  return (
    <div className={icons}>
      <Links to={cart} className={icon}>
        <i className="fas fa-cart-shopping"></i>
      </Links>
      <Links to={profile} className={icon}>
        <i className="fas fa-user"></i>
      </Links>
    </div>
  );
}
