/** @format */

import React from "react";
import Typography from "@/ui/design-system/typography/typography";
import { motion } from "framer-motion";

const paragraphVariants = {
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

export default function AboutElement() {
  const paragraphs = [
    "Curieux à propos de moi ? Voilà ce qu'il en est :",
    "Je suis un développeur passionné et polyvalent, spécialisé dans la création de solutions numériques modernes, performantes et centrées sur l'utilisateur. Avec une expertise en React.js, Node.js, Next.js, Laravel et Vite.js, je maîtrise également le design d'interfaces avec Figma pour offrir des expériences visuellement attrayantes et intuitives.",
    "Fort de mes compétences en HTML, CSS, JavaScript, TypeScript,Php, Python et en intégration d'API, je suis à l'aise pour concevoir des applications robustes, accessibles et responsives. Mon expérience s'étend aussi à la gestion des bases de données (SQL et NoSQL), ainsi qu'à la configuration de pipelines CI/CD pour garantir des livraisons rapides et fiables.",
    "Grâce à ma formation en génie informatique et électrique, spécialisée en informatique et télécommunications, je combine une approche rigoureuse avec une passion pour l'innovation. J'accorde une grande importance aux bonnes pratiques de développement, au travail collaboratif et à l'amélioration continue.",
    "Que ce soit pour concevoir une application complète, optimiser un système existant ou relever de nouveaux défis, je mets toujours un point d'honneur à fournir des solutions adaptées et de haute qualité."
  ];

  return (
    <div className="mx-4 space-y-6">
      {paragraphs.map((paragraph, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={paragraphVariants}>
          {i === 0 ? (
            <Typography variant="h3">{paragraph}</Typography>
          ) : (
            <Typography variant="body2" className="text-justify">
              {paragraph}
            </Typography>
          )}
        </motion.div>
      ))}
    </div>
  );
}
