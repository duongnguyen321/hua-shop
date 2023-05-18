import React from "react";

export default function VideoButton({
  index,
  active,
  src,
  onClick,
  vidBtnRefs,
  className,
  classNameActive,
}) {
  const handleClick = () => {
    onClick(index);
  };
  return (
    <span
      className={active ? `${className} ${classNameActive}` : className}
      data-src={src}
      ref={(ref) => (vidBtnRefs.current[index] = ref)}
      onClick={handleClick}
    ></span>
  );
}
