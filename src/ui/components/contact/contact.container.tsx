/** @format */

import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import {
  RiCopyrightFill,
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
  RiMailAiFill,
  RiPhoneFill,
} from "react-icons/ri";
import TitreSection from "@/ui/design-system/titreSection";
import Button from "@/ui/design-system/button/button";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant, floatIn, iconHover } from "@/lib/animations";

export default function ContactContainer() {
  const action = () => {
    alert("Le site est en maintenance Contactez-moi par mes identifiant situé en bas");
  };

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className=""
    >
      <Container
        className="text-center justify-center"
        idElement="contact"
      >
        <motion.div variants={textVariant(0.1)}>
          <TitreSection className="w-[150px] m-auto">Contactez-moi</TitreSection>
        </motion.div>

        <motion.div variants={textVariant(0.2)}>
          <Typography variant="subTitle">
            Quelle est la suite ? N{"'"}hésitez pas à me contacter si vous
            recherchez un développeur, si vous avez une question, ou simplement si
            vous souhaitez échanger.
          </Typography>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.3)}>
          <Typography variant="h2" className="justify-center">
            <div className="flex justify-center space-x-2">
              <motion.div
                whileHover={iconHover}
                className="text-primary-500"
              >
                <RiMailAiFill />
              </motion.div>
              <span>bassirousikirou59@gmail.com</span>
              <motion.div
                whileHover={iconHover}
                className="text-primary-500"
              >
                <RiCopyrightFill />
              </motion.div>
            </div>
          </Typography>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.4)}>
          <Typography variant="h2">
            <div className="flex justify-center space-x-2">
              <motion.div
                whileHover={iconHover}
                className="text-primary-500"
              >
                <RiPhoneFill />
              </motion.div>
              <span>+229 0153800499</span>
              <motion.div
                whileHover={iconHover}
                className="text-primary-500"
              >
                <RiCopyrightFill />
              </motion.div>
            </div>
          </Typography>
        </motion.div>

        <motion.div variants={textVariant(0.5)}>
          <Typography
            variant="body2"
            className="mt-4 mb-8 text-gray-600 text-center"
          >
            Vous pouvez également me retrouver sur ces plateformes !
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.6)}
          className="flex gap-4 mt-8 justify-center"
        >
          <motion.div whileHover={floatIn(0, 0.5)}>
            <Button
              variant="ico"
              size="small"
              iconTheme="accent"
              className="rounded p-2"
              aria-label="Visitez mes projets sur Github"
              baseUrl="https://github.com/53800499"
            >
              <motion.div whileHover={iconHover}>
                <RiGithubFill />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div whileHover={floatIn(0, 0.5)}>
            <Button
              variant="ico"
              size="small"
              iconTheme="accent"
              className="rounded p-2"
              aria-label="En savoir plus sur LinkedIn"
              action={action}
            >
              <motion.div whileHover={iconHover}>
                <RiLinkedinFill />
              </motion.div>
            </Button>
          </motion.div>

          <motion.div whileHover={floatIn(0, 0.5)}>
            <Button
              variant="ico"
              size="small"
              iconTheme="accent"
              className="rounded p-2"
              aria-label="Suivez-moi sur Twitter"
              action={action}
            >
              <motion.div whileHover={iconHover}>
                <RiFacebookBoxFill />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </motion.div>
  );
}
