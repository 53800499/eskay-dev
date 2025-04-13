/** @format */

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

const projectVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function ProjectContainer() {
  const projects = [
    {
      title: "Projet A",
      description: "Description du projet A",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Projet B",
      description: "Description du projet B",
      technologies: ["Vue.js", "Express", "PostgreSQL"]
    }
  ];

  return (
    <motion.div
      className="py-20 bg-white dark:bg-gray-800"
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <Container className="text-center max-w-4xl mx-auto">
        <TitreSection className="w-[200px] mx-auto">Mes Projets</TitreSection>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={projectVariants}
              className="p-6 bg-gray-100 rounded-lg shadow-sm dark:bg-gray-700">
              <Typography variant="h3" theme="black" component="h3">
                {project.title}
              </Typography>
              <Typography variant="body1" theme="gray" className="mt-4">
                {project.description}
              </Typography>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm text-gray-700 bg-gray-200 rounded-full dark:text-gray-200 dark:bg-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
