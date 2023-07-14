import React from "react";
import Section from "../../components/Section";
import SectionProducts from "./sections/Products";
import SectionHero from "./sections/Hero";
import homeStyles from "./styles/home.module.scss";
const { home } = homeStyles;
export default function Home() {
  return (
    <>
      <Section className={home}>
        <SectionHero />
      </Section>

      <Section className="products">
        <SectionProducts />
      </Section>
    </>
  );
}
