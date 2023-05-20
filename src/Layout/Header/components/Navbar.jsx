import React from "react";
import Links from "../../../helper/Link";

export default function Navbar({ navbar, navlink, home, products }) {
  return (
    <nav className={navbar}>
      <Links path={home} type="nav" title="Trang Chủ" className={navlink} />
      <Links
        path={products.root}
        type="nav"
        title="Sản Phẩm"
        className={navlink}
      />
      <Links
        path={`${products.root}/type/${products.new}`}
        type="nav"
        title="Sản Phẩm Mới"
        className={navlink}
      />
      <Links
        path={`${products.root}/type/${products.used}`}
        type="nav"
        title="Sản Phẩm Cũ"
        className={navlink}
      />
    </nav>
  );
}
