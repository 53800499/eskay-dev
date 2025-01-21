/** @format */

import React from "react";
import Container from "../container/container";
import AboutElement from "./about.element";
import HeroImage from "../hero/hero.image";
import TitreSection from "@/ui/design-system/titreSection";

export default function AboutContainer() {
  return (
    <div className="bg-gray-100 dark:bg-gray-600">
      <Container className="  text-center">
      <TitreSection className="w-[200px] m-auto">A propos De Moi</TitreSection>
      <div className="flex flex-col md:flex-row ">
        <HeroImage
          src="/assets/images/profile.jpg"
          alt="profile"
          className="md:mr-20 "
          layout="fill"
        />
        <AboutElement />
      </div>
    </Container>
    </div>
  );
}
