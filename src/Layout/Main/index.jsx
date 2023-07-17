import React, { useMemo, useRef } from "react";
import Routers from "../../routers";
import Header from "../Header";
import Footer from "../Footer";
import mainStyle from "./main.module.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
export default function Main() {
  const ref = useRef(null);
  const mainRef = useMemo(() => ref, []);
  const { main } = mainStyle;
  return (
    <>
      <Header main={mainRef} />
      <main className={main} ref={mainRef}>
        <Routers />
      </main>
      <Footer />
    </>
  );
}
