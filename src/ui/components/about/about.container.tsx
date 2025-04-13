/** @format */

import React from "react";
import Container from "../container/container";
import AboutElement from "./about.element";
import HeroImage from "../hero/hero.image";
import TitreSection from "@/ui/design-system/titreSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2
    }
  }
};

export default function AboutContainer() {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-600"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <Container className="text-center">
        <TitreSection className="w-[200px] m-auto">
          A propos de moi
        </TitreSection>
        <div className="flex flex-col md:flex-row">
          <HeroImage
            src="/assets/images/profile.jpg"
            alt="profile"
            className="md:mr-20"
            layout="fill"
          />
          <AboutElement />
        </div>
      </Container>
    </motion.div>
  );
}
