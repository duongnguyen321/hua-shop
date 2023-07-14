import React from "react";
import Links from "../../../../../helper/Link";
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
        <Links to={"/"} className={classNameTitle}>
          <p className={classNameTitle}>{title}</p>
        </Links>
      ) : (
        <p className={classNameTitle}>{title}</p>
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
              <Links to={to} className={classNameLink}>
                {label}
              </Links>
            )}
          </React.Fragment>
        ))}
    </div>
  );
}
