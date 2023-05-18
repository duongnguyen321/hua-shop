import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ navbar, navlink, home, products }) {
  return (
    <nav className={navbar}>
      <NavLink to={home} className={navlink}>
        Trang Chủ
      </NavLink>
      <NavLink to={products.root} className={navlink}>
        Sản Phẩm
      </NavLink>
      <NavLink to={`${products.root}/type/${products.new}`} className={navlink}>
        Sản Phẩm Mới
      </NavLink>
      <NavLink
        to={`${products.root}/type/${products.used}`}
        className={navlink}
      >
        Sản Phẩm Cũ
      </NavLink>
    </nav>
  );
}
