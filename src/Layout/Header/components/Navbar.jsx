import React, { useLayoutEffect } from "react";
import Links from "../../../helper/Link";

export default function Navbar({ navbar, navlink, home, products, active }) {
  useLayoutEffect(() => {
    const navLinkActive = document.querySelector(`.${navlink}.highlight`);
    if (navLinkActive) {
      navLinkActive.classList.remove("highlight");
      navLinkActive.classList.add(active);
    }
  }, []);
  return (
    <nav className={navbar}>
      <Links to={home} type="nav" title="Trang Chủ" className={navlink} />
      <Links
        to={products.root}
        type="nav"
        title="Sản Phẩm"
        className={navlink}
      />
      <Links
        to={`${products.root}/type/${products.new}`}
        type="nav"
        title="Sản Phẩm Mới"
        className={navlink}
      />
      <Links
        to={`${products.root}/type/${products.used}`}
        type="nav"
        title="Sản Phẩm Cũ"
        className={navlink}
      />
    </nav>
  );
}
