import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Links({ path, type, title, children, className }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === path ? (
        <a href="#" className={className}>
          {title || children}
        </a>
      ) : (
        <>
          {type === "nav" ? (
            <NavLink to={path} className={className}>
              {title || children}
            </NavLink>
          ) : (
            <Link to={path} className={className}>
              {title || children}
            </Link>
          )}
        </>
      )}
    </>
  );
}
