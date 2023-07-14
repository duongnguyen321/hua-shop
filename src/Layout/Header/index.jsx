import React from "react";
import headerStyles from "./header.module.scss";
import endpoint from "../../config/endpoint";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
export default function Header() {
  const {
    header,
    header__logo: logo,
    header__navbar: navbar,
    header__icons: icons,
    "header__logo--highlight": logo_highlight,
    "header__navbar--navlink": navlink,
    "header__icons--icon": icon,
  } = headerStyles;
  const { home, products, cart, profile } = endpoint;
  return (
    <header className={header}>
      <Logo home={home} logo={logo} logo_highlight={logo_highlight} />
      <Navbar
        navbar={navbar}
        navlink={navlink}
        home={home}
        products={products}
      />
      <Icons icons={icons} icon={icon} cart={cart} profile={profile} />
    </header>
  );
}
