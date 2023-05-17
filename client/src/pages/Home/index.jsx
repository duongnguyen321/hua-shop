import React from "react";
import Section from "../../components/Section";
import homeStyle from "./assets/styles/home.module.scss";
export default function Home() {
  const { home, background } = homeStyle;
  return (
    <>
      <Section className={home}>
        <div className={background}></div>
        <h1 className="title">Hello World</h1>
      </Section>
      <Section className="home">
        <h1 className="title">Hello world!</h1>
      </Section>
    </>
  );
}
