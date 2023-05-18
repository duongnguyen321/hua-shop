import React from "react";
import Routers from "../../routers";
import Header from "../Header";
import Footer from "../Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Main() {
  return (
    <>
      <Header />
      <main className="main" id="main">
        <Routers />
      </main>
      <Footer />
    </>
  );
}
