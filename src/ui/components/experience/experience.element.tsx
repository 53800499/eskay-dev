/** @format */

import Typography from "@/ui/design-system/typography/typography";
import React from "react";

interface Props {
  nom: string; // Nom de l'expérience (ex. : entreprise ou institution)
  titre: string; // Titre du poste ou programme
  option: React.ReactNode; // Changez ici pour ReactNode ou ReactElement
  date: string; // Date ou période
}

export default function ExperienceElement({ nom, titre, option, date }: Props) {
  return (
    <div className="flex flex-col md:flex-row p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg gap-4 rounded md:w-[896px]">
      {/* Nom de l'entreprise/institution */}
      <Typography
        variant="h3"
        className="text-primary-500 font-bold md:w-1/4 text-start"
        aria-label={`Nom de l'expérience : ${nom}`}
      >
        {nom}
      </Typography>

      {/* Détails de l'expérience */}
      <div className="flex flex-col gap-2 md:w-3/4 text-start">
        <div className="flex justify-between items-center">
          {/* Titre et date */}
          <Typography
            variant="subTitle" weight="medium"
            className="font-bold text-gray-800 dark:text-gray-200"
          >
            {titre}
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-400 dark:text-gray-400"
            aria-label={`Date : ${date}`}
          >
            {date}
          </Typography>
        </div>

        {/* Option ou description */}
        <Typography
          variant="body2"
          className="text-gray-700 dark:text-gray-300 text-start"
        >
          {option}
        </Typography>
      </div>
    </div>
  );
}
