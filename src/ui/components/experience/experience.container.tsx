/** @format */

import React from "react";
import Container from "../container/container";
import TitreSection from "@/ui/design-system/titreSection";
import Typography from "@/ui/design-system/typography/typography";
import ExperienceElement from "@/ui/components/experience/experience.element";

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
        "Utilisation de technologies modernes telles que React et Node.js.",
      ],
      date: "Janv 2024 - Présent"
    },
    {
      id: 2,
      nom: "Freelance",
      titre: "Développeur Full Stack",
      option: [
        "Réalisation de projets web pour divers clients.",
        "Création de designs interactifs et responsives.",
        "Optimisation des performances des applications existantes.",
        "Déploiement et maintenance des sites web.",
      ],
      date: "Juin 2023 - Déc 2023"
    },
    {
      id: 3,
      nom: "IwajuTech",
      titre: "Stagiaire Développeur",
      option: [
        "Participation au développement d'une plateforme SaaS.",
        "Rédaction de tests unitaires et d'intégration.",
        "Assistance à la conception d'interface utilisateur.",
        "Documentation des processus techniques.",
      ],
      date: "Sep 2024 - Dec 2024"
    },
    {
      id: 4,
      nom: "H-LAB",
      titre: "Stagiaire Développeur Web",
      option: [
        "Participation au développement d'une plateforme SaaS.",
        "Rédaction de tests unitaires et d'intégration.",
        "Assistance à la conception d'interface utilisateur.",
        "Documentation des processus techniques.",
      ],
      date: "Janv 2023 - Mai 2023"
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-600" id="experience">
      <Container className="text-center " idElement="skills">
      {/* Titre de la section */}
      <TitreSection className="w-[150px] m-auto text-center">Expérience</TitreSection>

      {/* Description de la section */}
      <Typography variant="body2" className="mt-4 mb-8 text-gray-600">
        Voici un aperçu de mes expériences professionnelles récentes.
      </Typography>

      {/* Liste des expériences */}
      <div className="space-y-8 ">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex justify-center ">
            <ExperienceElement
              nom={experience.nom}
              titre={experience.titre}
              option={
                <ul>
                  {experience.option.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              }
              date={experience.date}
            />
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
}
