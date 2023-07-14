import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Links({ to, type, title, children, className }) {
  const location = useLocation();
  return (
    <>
      {location.pathname === to ? (
        <a href="#" className={className}>
          {title || children}
        </a>
      ) : (
        <>
          {type === "nav" ? (
            <NavLink to={to} className={className}>
              {title || children}
            </NavLink>
          ) : (
            <Link to={to} className={className}>
              {title || children}
            </Link>
          )}
        </>
      )}
    </>
  );
}
