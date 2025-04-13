/** @format */

import React from "react";
import AboutElement from "./hero.element";
import AboutImage from "./hero.image";
import clsx from "clsx";
import Container from "../container/container";
import { motion } from "framer-motion";

export default function HeroContainer({
  imageSrc = "/assets/images/profile.jpg",
  imageAlt = "profile",
  imageLayout = "fill"
}) {
  return (
    <Container
      className={clsx(
        "flex flex-col md:flex-row items-center justify-center gap-8 "
      )}>
      {/* Image pour mobile */}
      <motion.div
        className="relative w-64 h-64 md:hidden"
        initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }
        }}>
        <motion.div
          className="w-full h-full"
          whileHover={{
            scale: 1.02,
            rotate: 2,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}>
          <AboutImage
            src={imageSrc}
            alt={imageAlt}
            layout={imageLayout}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      <AboutElement />

      {/* Image pour desktop */}
      <motion.div
        className="relative hidden md:block w-96 h-96"
        initial={{ opacity: 0, scale: 0.8, y: 50, rotate: 5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
          transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4
          }
        }}>
        <motion.div
          className="w-full h-full"
          whileHover={{
            scale: 1.02,
            rotate: -2,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}>
          <AboutImage
            src={imageSrc}
            alt={imageAlt}
            layout={imageLayout}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
}
