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
    "footer__box-container_box": box,
    "footer__box-container_title": title,
    "footer__box-container_text": text,
    "footer__box-container_link": link,
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
