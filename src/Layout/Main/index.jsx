import React from "react";
import Routers from "../../routers";
import Header from "../Header";
import Footer from "../Footer";
import mainStyle from "./main.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Main() {
  const { main } = mainStyle;
  return (
    <>
      <Header />
      <main className={main}>
        <Routers />
      </main>
      <Footer />
    </>
  );
}
