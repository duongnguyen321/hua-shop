import React, { useCallback, useLayoutEffect, useState } from "react";
import Links from "../../../helper/Link";
export default function Icons({ icons, icon, cart, profile, icon_dark }) {
  const [theme, setTheme] = useState("dark");
  const handleChangeTheme = useCallback(() => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
    localStorage.theme = theme === "dark" ? "light" : "dark";
    document.querySelector("body").className =
      theme === "dark" ? "light" : "dark";
  }, [theme]);
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.querySelector("body").className = savedTheme;
    } else {
      setTheme("dark");
      document.querySelector("body").className = "dark";
      localStorage.theme = "dark";
    }
  }, []);
  return (
    <div className={icons}>
      <i
        className={`${icon} ${theme === "dark" && icon_dark} fa fa-moon`}
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
