import React, { useCallback, useLayoutEffect, useState } from "react";
import Links from "../../../helper/Link";
export default function Icons({ icons, icon, cart, profile }) {
  const [theme, setTheme] = useState("dark");
  const handleChangeTheme = useCallback(() => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
    localStorage.theme = theme;
    document.querySelector("body").className = theme;
  }, [theme]);
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("body").className = savedTheme;
    }
  }, []);
  return (
    <div className={icons}>
      <i
        className={`${icon} fa ${theme === "light" ? "fa-moon" : "fa-sun"}`}
        onClick={handleChangeTheme}
      ></i>
      <Links to={cart} className={icon}>
        <i className="fas fa-cart-shopping"></i>
      </Links>
      <Links to={profile} className={icon}>
        <i className="fas fa-user"></i>
      </Links>
    </div>
  );
}
