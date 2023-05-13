import React from "react";
import headerStyles from "./header.module.scss";
import { Link, NavLink } from "react-router-dom";
import endpoint from "../../config/endpoint";
export default function Header() {
  const { header, logo, logo_hightlight } = headerStyles;
  const { home, products, orders, cart, profile } = endpoint;
  return (
    <header className={header}>
      <Link to={home} className={logo}>
        <span className={logo_hightlight}>Hua</span>
        Shop
      </Link>
      <nav class="navbar">
        <NavLink to={home}>Trang Chủ</NavLink>
        <NavLink to={products}>Sản Phẩm</NavLink>
        <NavLink to={orders}>Đơn hàng</NavLink>
        <NavLink to={cart}>Giỏ hàng</NavLink>
        <NavLink to={profile}>Thông tin</NavLink>
      </nav>
    </header>
  );
}
