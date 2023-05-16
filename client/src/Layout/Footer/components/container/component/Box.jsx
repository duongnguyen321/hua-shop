import React from "react";
import { Link } from "react-router-dom";

export default function Box({
  title,
  text,
  links,
  className,
  classNameTitle,
  classNameText,
  classNameLink,
}) {
  return (
    <div className={className}>
      {title === "HUAShop" ? (
        <Link to={"/"} className={classNameTitle}>
          <h3 className={classNameTitle}>{title}</h3>
        </Link>
      ) : (
        <h3 className={classNameTitle}>{title}</h3>
      )}
      {text && <p className={classNameText}>{text}</p>}
      {links &&
        links?.map(({ label, to, external: ex }, i) => (
          <React.Fragment key={i}>
            {ex ? (
              <a
                href={to}
                className={classNameLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              <Link to={to} className={classNameLink}>
                {label}
              </Link>
            )}
          </React.Fragment>
        ))}
    </div>
  );
}
