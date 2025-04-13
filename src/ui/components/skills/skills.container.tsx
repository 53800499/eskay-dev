/** @format */

import Image from "next/image";
import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
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

const skills = [
  {
    id: 1,
    src: "/assets/images/icon-javscript.png",
    alt: "Javascript",
    name: "Javascript"
  },
  {
    id: 2,
    src: "/assets/images/icon-typescript.png",
    alt: "Typescript",
    name: "Typescript"
  },
  { id: 3, src: "/assets/images/icon-react.png", alt: "React", name: "React" },
  {
    id: 4,
    src: "/assets/images/icon-nextjs.png",
    alt: "Next.js",
    name: "Next.js"
  },
  {
    id: 5,
    src: "/assets/images/icon-nodejs.png",
    alt: "Node.js",
    name: "Node.js"
  },
  {
    id: 6,
    src: "/assets/images/icon-express.png",
    alt: "Express.js",
    name: "Express.js"
  },
  {
    id: 7,
    src: "/assets/images/icon-mongodb.png",
    alt: "MongoDB",
    name: "MongoDB"
  },
  {
    id: 8,
    src: "/assets/images/firebase.png",
    alt: "Firebase",
    name: "Firebase"
  },
  { id: 9, src: "/assets/images/mysql.png", alt: "MySQL", name: "MySQL" },
  {
    id: 10,
    src: "/assets/images/icon-tailwindcss.png",
    alt: "TailwindCSS",
    name: "TailwindCSS"
  },
  { id: 11, src: "/assets/images/icon-figma.png", alt: "Figma", name: "Figma" },
  { id: 12, src: "/assets/images/php.png", alt: "PHP", name: "PHP" },
  {
    id: 13,
    src: "/assets/images/laravel.png",
    alt: "Laravel",
    name: "Laravel"
  },
  { id: 14, src: "/assets/images/icon-git.png", alt: "Git", name: "Git" },
  { id: 15, src: "/assets/images/python.png", alt: "Python", name: "Python" }
];

export default function SkillsContainer() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <Container className="py-4 text-center md:py-8">
        {/* Titre de la section */}
        <TitreSection className="w-[180px] m-auto mb-6">
          Mes compétences
        </TitreSection>

        {/* Description */}
        <Typography
          variant="body2"
          className="mb-8 text-gray-700 dark:text-gray-300">
          Passionné par le développement et l'innovation, je combine expertise
          technique et créativité pour concevoir des solutions numériques
          performantes, adaptées aux besoins des utilisateurs et en phase avec
          les tendances technologiques.
        </Typography>

        <div className="grid grid-cols-3 gap-6 bg-white sm:grid-cols-7 md:grid-cols-8 md:p-8 dark:bg-gray-900">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Nom de la compétence */}
              <p className="mt-2 text-sm font-medium text-gray-800 md:text-base dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
