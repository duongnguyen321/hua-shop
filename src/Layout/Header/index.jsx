import React, { useEffect, useMemo, useRef } from "react";
import headerStyles from "./header.module.scss";
import endpoint from "../../config/endpoint";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Icons from "./components/Icons";
export default function Header({ main }) {
  const ref = useRef(null);
  const headerRef = useMemo(() => ref, []);
  const {
    header,
    header__logo: logo,
    header__navbar: navbar,
    header__icons: icons,
    "header__logo--highlight": logo_highlight,
    "header__navbar_navlink": navlink,
    "header__navbar_navlink--active": navlink_active,
    "header__icons-icon": icon,
    "icon-dark": icon_dark,
  } = headerStyles;
  const { home, products, cart, profile } = endpoint;
  useEffect(() => {
    const handleScroll = () => {
      const handleWheel = (e) => {
        if (headerRef.current) {
          if (
            window.scrollY + window.innerHeight >=
            document.body.offsetHeight - 200
          ) {
            return (headerRef.current.style.transform = "translateY(0)");
          } else if (e.wheelDeltaY < 0) {
            return (headerRef.current.style.transform = "translateY(-100%)");
          } else {
            return (headerRef.current.style.transform = "translateY(0)");
          }
        }
      };
      main.current.addEventListener("wheel", handleWheel);
      return () => {
        main.current.removeEventListener("wheel", handleWheel);
      };
    };
    handleScroll();
  }, []);

  return (
    <header className={header} ref={headerRef}>
      <Logo home={home} logo={logo} logo_highlight={logo_highlight} />
      <Navbar
        navbar={navbar}
        navlink={navlink}
        home={home}
        products={products}
        active={navlink_active}
      />
      <Icons
        icons={icons}
        icon={icon}
        cart={cart}
        profile={profile}
        icon_dark={icon_dark}
      />
    </header>
  );
}
