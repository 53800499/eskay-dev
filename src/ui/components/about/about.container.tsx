/** @format */

import React from "react";
import Container from "../container/container";
import AboutElement from "./about.element";
import HeroImage from "../hero/hero.image";
import TitreSection from "@/ui/design-system/titreSection";

export default function AboutContainer() {
  return (
    <Container className=" bg-gray-50 dark:bg-gray-600 text-center">
      <TitreSection className="w-[300px] m-auto">A propos De Moi</TitreSection>
      <div className="flex flex-col md:flex-row">
        <HeroImage src="/assets/images/profile.jpg" alt="profile" className="mr-20" layout="fill" />
      <AboutElement />
      </div>
    </Container>
  );
}
