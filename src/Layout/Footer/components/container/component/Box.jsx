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
        <Links path={"/"} className={classNameTitle}>
          <h3 className={classNameTitle}>{title}</h3>
        </Links>
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
              <Links path={to} className={classNameLink}>
                {label}
              </Links>
            )}
          </React.Fragment>
        ))}
    </div>
  );
}
