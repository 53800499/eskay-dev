/** @format */

import React from "react";
import Container from "../container/container";
import WorkElement from "./work.element";
import TitreSection from "@/ui/design-system/titreSection";
import Typography from "@/ui/design-system/typography/typography";
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

const workVariants = {
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

const works = [
  {
    id: 1,
    src: "/assets/images/projet1.png",
    alt: "Boutique en ligne",
    titre: "Boutique en ligne",
    description: "Une plateforme e-commerce  offrant une expérience d'achat fluide et sécurisée. Ce projet inclut la gestion des produits en temps réel, l'intégration de paiements sécurisés et une interface utilisateur responsive. L'objectif était de créer une solution robuste et rapide pour le commerce en ligne, adaptée à une grande variété de produits.",
    technologies: [
      "reactjs",
      "nodejs",
      "typescript",
      "firebase",
      "nextjs",
      "figma",
      "html",
      "css",
      "javaScript"
    ]
  },
  {
    id: 2,
    src: "/assets/images/projet2.png",
    alt: "Gestion de stock",
    titre: "Gestion de stock",
    description: "Un système de gestion de stock intelligent permettant aux entreprises de suivre l'inventaire en temps réel, de gérer les commandes et de prévenir les ruptures de stock. Ce projet utilise ReactJS et Node.js pour une interface utilisateur intuitive et une gestion backend efficace. Il permet une gestion simplifiée des stocks, avec des alertes automatiques pour les niveaux de stock faibles.",
    technologies: []
  },
  {
    id: 3,
    src: "/assets/images/projet3.png",
    alt: "Identification des personnes",
    titre: "Identification des personnes entrant dans une immeuble",
    description: "Un système de reconnaissance faciale pour identifier les personnes qui entrent dans un bâtiment, améliorant ainsi la sécurité d'accès. Ce projet combine des technologies comme HTML, CSS, JavaScript, PHP et MySQL pour créer une solution complète, incluant la gestion des utilisateurs, l'enregistrement des visages et un tableau de bord pour surveiller les entrées en temps réel.",
    technologies: ["html", "css", "javaScript", "php", "MySQL","Arduino"]
  },
  {
    id: 4,
    src: "/assets/images/projet4.png",
    alt: "Un système de gestion intégré pour les entreprises, qui utilise une carte intelligente pour accéder à différentes fonctionnalités comme le contrôle d'accès et la gestion des services. Le projet a été développé en utilisant HTML, CSS, JavaScript,  Flutter, Dart et Firebase, combinant des technologies web et mobiles pour fournir une expérience utilisateur fluide et sécurisée. Ce système est conçu pour optimiser les processus d'entreprise quotidiens et simplifier la gestion des ressources.",
    titre: "Réalisation d'un système de gestion intégré par une carte intelligente",
    description: "Un projet innovant",
    technologies: [
      "html",
      "css",
      "javaScript",
      "Flowbite",
      "Flutter",
      "Dart",
      "Firebase"
    ]
  },
  {
    id: 5,
    src: "/assets/images/projet5.png",
    alt: "Site Vitrine",
    titre: "Site Vitrine",
    description: "Un site vitrine conçu pour une entreprise, présentant ses services et produits de manière attrayante et professionnelle. Ce projet a été réalisé avec HTML, CSS, JavaScript, PHP et Bootstrap, assurant une présentation claire, une navigation fluide et une compatibilité mobile optimale. Il permet à l'entreprise de mettre en valeur son image de marque et d'attirer de nouveaux clients grâce à une interface élégante et responsive.",
    technologies: ["html", "css", "javaScript", "php", "Bootstrap"],
    url:"https://artboart.vercel.app"
  }
];

export default function WorkContainer() {
  return (
    <motion.div 
      className="" 
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <Container className="rounded mx-4">
        <TitreSection className="w-[100px] m-auto text-center">Projets</TitreSection>

        <Typography variant="body2" className="mt-4 mb-8 text-gray-600 text-center">
          Certains des projets remarquables que j{"'"}ai réalisés :
        </Typography>

        {works.map((work, i) => (
          <motion.div 
            key={work.id} 
            className="flex justify-center mb-6"
            custom={i}
            variants={workVariants}>
            <WorkElement
              src={work.src}
              alt={work.alt}
              url={work.url}
              titre={work.titre}
              description={work.description}
              technologies={
                work.technologies.length > 0 ? (
                  work.technologies.map((item, index) => (
                    <TitreSection
                      key={index}
                      className="text-2xl min-w-[10px] px-4 text-gray-700 pb-2 dark:text-gray-300"
                    >
                      {item}
                    </TitreSection>
                  ))
                ) : (
                  <TitreSection className="text-gray-500">
                    Technologies non spécifiées
                  </TitreSection>
                )
              }
            />
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
}
