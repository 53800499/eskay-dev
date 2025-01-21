/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import TitreSection from "@/ui/design-system/titreSection";
import TemoignageElement from "./testimonials.elements";

// Définition du type des témoignages
interface Testimonial {
  id: number;
  src: string;
  alt: string;
  commentaire: string;
  nom: string;
  reseaux: string;
}

export default function TestimonialsContainer() {
  const temoignages: Testimonial[] = [
    {
      id: 1,
      src: "/assets/images/prof.png",
      alt: "prof1",
      commentaire:
        "Le développement de mon site internet a été correct dans l'ensemble. Le code est de bonne qualité et la réalisation est globalement fidèle à la maquette graphique. Un contact que je n'hésiterai pas à solliciter de nouveau si besoin",
      nom: "joneseven",
      reseaux: "ComeUp"
    },
    {
      id: 2,
      src: "/assets/images/prof.png",
      alt: "prof2",
      commentaire: "Bonne réalisation du projet, Merci !",
      nom: "joneseven",
      reseaux: "ComeUp"
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-600">
      <Container
        className="text-center bg-gray-100 dark:bg-gray-600"
        idElement="skills"
      >
        {/* Titre de la section */}
        <TitreSection className="w-[150px] m-auto">Témoignages</TitreSection>

        {/* Description de la section */}
        <Typography variant="body2" className="mt-4 mb-8 text-gray-600">
          Voici quelques clients qui ont apprécié mon expertise :
        </Typography>

        {/* Liste des témoignages */}
        <div className="gap-8 flex flex-wrap justify-center ">
          {temoignages.length > 0 ? (
            temoignages.map((temoignage) => (
              <div key={temoignage.id}>
                <TemoignageElement
                  nom={temoignage.nom}
                  src={temoignage.src}
                  alt={temoignage.alt}
                  commentaire={temoignage.commentaire}
                  reseaux={temoignage.reseaux}
                />
              </div>
            ))
          ) : (
            <Typography className="text-gray-500">
              Aucune évaluation disponible pour le moment.
            </Typography>
          )}
        </div>
      </Container>
    </div>
  );
}
