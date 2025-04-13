/** @format */

import React from "react";
import Container from "../container/container";
import TitreSection from "@/ui/design-system/titreSection";
import Typography from "@/ui/design-system/typography/typography";
import ExperienceElement from "@/ui/components/experience/experience.element";
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

const experienceVariants = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function ExperienceContainer() {
  const experiences = [
    {
      id: 1,
      nom: "ComeUp",
      titre: "Full Stack Developer",
      option: [
        "Développement de fonctionnalités front-end et back-end.",
        "Intégration d'API REST et gestion des bases de données.",
        "Amélioration des performances des applications web.",
        "Collaboration avec des équipes pluridisciplinaires.",
        "Utilisation de technologies modernes telles que React et Node.js."
      ],
      date: "oct 2024 - Présent"
    },
    {
      id: 2,
      nom: "Freelance",
      titre: "Développeur Full Stack",
      option: [
        "Réalisation de projets web pour divers clients.",
        "Création de designs interactifs et responsives.",
        "Optimisation des performances des applications existantes.",
        "Déploiement et maintenance des sites web."
      ],
      date: "Juin 2023 - Présent"
    },
    {
      id: 3,
      nom: "UpWork",
      titre: "Développeur Full Stack",
      option: [
        "Réalisation de projets web pour divers clients.",
        "Création de designs interactifs et responsives.",
        "Optimisation des performances des applications existantes.",
        "Déploiement et maintenance des sites web."
      ],
      date: "Juin 2023 - Présent"
    },
    {
      id: 4,
      nom: "IwajuTech",
      titre: "Stagiaire Développeur",
      option: [
        "Participation au développement d'une plateforme SaaS.",
        "Rédaction de tests unitaires et d'intégration.",
        "Assistance à la conception d'interface utilisateur.",
        "Documentation des processus techniques."
      ],
      date: "Sep 2024 - Dec 2024"
    },
    {
      id: 5,
      nom: "H-LAB",
      titre: "Stagiaire Développeur Web",
      option: [
        "Participation au développement d'une plateforme SaaS.",
        "Rédaction de tests unitaires et d'intégration.",
        "Assistance à la conception d'interface utilisateur.",
        "Documentation des processus techniques."
      ],
      date: "Janv 2023 - Mai 2023"
    }
  ];

  return (
    <motion.div
      className="py-20 bg-gray-100 dark:bg-gray-600"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <Container className="text-center max-w-4xl mx-auto">
        <TitreSection className="w-[200px] mx-auto">Mon Expérience</TitreSection>
        <div className="mt-12 space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={experienceVariants}>
              <ExperienceElement
                nom={exp.nom}
                titre={exp.titre}
                option={exp.option}
                date={exp.date}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
