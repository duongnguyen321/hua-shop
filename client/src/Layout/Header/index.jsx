import React from "react";
import headerStyles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import endpoint from "../../config/endpoint";

export default function Header() {
  const { header, logo, logo_highlight, navbar, navlink, icons, icon } =
    headerStyles;
  const { home, products, cart, profile } = endpoint;

  return (
    <header className={header}>
      <Link to={home} className={logo}>
        <span className={logo_highlight}>Hua</span>
        Shop
      </Link>
      <nav className={navbar}>
        <NavLink to={home} className={navlink}>
          Trang Chủ
        </NavLink>
        <NavLink to={products.root} className={navlink}>
          Sản Phẩm
        </NavLink>
        <NavLink
          to={`${products.root}/type/${products.new}`}
          className={navlink}
        >
          Sản Phẩm Mới
        </NavLink>
        <NavLink
          to={`${products.root}/type/${products.used}`}
          className={navlink}
        >
          Sản Phẩm Cũ
        </NavLink>
      </nav>
      <div className={icons}>
        <Link to={cart} className={icon}>
          <i className="fas fa-cart-shopping"></i>
        </Link>
        <Link to={profile} className={icon}>
          <i className="fas fa-user"></i>
        </Link>
      </div>
    </header>
  );
}
