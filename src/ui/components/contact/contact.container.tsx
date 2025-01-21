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

export default function ContactContainer() {
  const action = () => {
    alert("Le site est en maintenance Contactez-moi par mes identifiant situé en bas");
  }
  return (
    <div className="">
      <Container
      className="text-center justify-center"
      idElement="contact"
    >
      <TitreSection className="w-[150px] m-auto">Contactez-moi</TitreSection>
      <Typography variant="subTitle">
        Quelle est la suite ? N{"'"}hésitez pas à me contacter si vous
        recherchez un développeur, si vous avez une question, ou simplement si
        vous souhaitez échanger.
      </Typography>
      <Typography variant="h2" className="justify-center">
        <div className="flex justify-center space-x-2">
          <RiMailAiFill />
          <span>bassirousikirou59@gmail.com</span>
          <RiCopyrightFill />
        </div>
      </Typography>
      <Typography variant="h2">
        <div className="flex justify-center space-x-2">
          <RiPhoneFill />
          <span>+229 0153800499</span>
          <RiCopyrightFill />
        </div>
      </Typography>
      <Typography
        variant="body2"
        className="mt-4 mb-8 text-gray-600 text-center"
      >
        Vous pouvez également me retrouver sur ces plateformes !
      </Typography>
      <div className="flex gap-4 mt-8 justify-center">
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="Visitez mes projets sur Github"
          baseUrl="https://github.com/53800499"
        >
          <RiGithubFill />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="En savoir plus sur LinkedIn"
          action={action}
        >
          <RiLinkedinFill />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="rounded p-2"
          aria-label="Suivez-moi sur Twitter"
          action={action}
        >
          <RiFacebookBoxFill />
        </Button>
      </div>
    </Container>
    </div>
  );
}
