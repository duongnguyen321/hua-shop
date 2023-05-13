import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Routers from "../routers";

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
