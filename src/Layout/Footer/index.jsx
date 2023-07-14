import React from "react";
import endpoint from "../../config/endpoint";
import footerStyles from "./footer.module.scss";
import Container from "./components/container";
import Credit from "./components/credit";
export default function Footer() {
  const { home, products, cart, profile } = endpoint;
  const {
    footer,
    "footer__box-container": box_container,
    "footer__box-container--box": box,
    "box-container__box--title": title,
    "box-container__box--text": text,
    "box-container__box--link": link,
    footer__credit: credit,
  } = footerStyles;
  const containerProps = {
    box_container,
    box,
    title,
    text,
    link,
    home,
    products,
    cart,
    profile,
  };
  return (
    <footer className={footer}>
      <Container {...containerProps} />
      <Credit credit={credit} home={home} />
    </footer>
  );
}
