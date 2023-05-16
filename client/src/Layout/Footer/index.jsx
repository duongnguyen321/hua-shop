import React from "react";
import endpoint from "../../config/endpoint";
import footerStyles from "./footer.module.scss";
import Container from "./components/container";
import Credit from "./components/credit";
export default function Footer() {
  const { home, products, cart, profile } = endpoint;
  const { footer, box_container, box, title, text, link, credit } =
    footerStyles;
  const containerProps = {
    box_container: box_container,
    box: box,
    title: title,
    text: text,
    link: link,
    home: home,
    products: products,
    cart: cart,
    profile: profile,
  };
  return (
    <footer className={footer}>
      <Container {...containerProps} />
      <Credit credit={credit} home={home} />
    </footer>
  );
}
