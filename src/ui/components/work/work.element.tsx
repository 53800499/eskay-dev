/** @format */

import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import React from "react";
import { RiCodeView } from "react-icons/ri";

interface Props {
  url?: string;
  src: string;
  alt: string;
  titre: string;
  description: string;
  technologies: React.ReactNode; // Utilisation de ReactNode pour les technologies
}

export default function WorkElement({
  src,
  alt,
  url,
  titre,
  description,
  technologies
}: Props) {
  return (
    <div className="rounded mx-4 shadow-lg grid grid-cols-1 md:grid-cols-2   my-2 bg-white dark:bg-gray-800 dark:text-white">
      {/* Image Section */}
      <div className=" bg-gray-200 dark:bg-gray-200 p-5 md:rounded-l rounded-t">

      <div className="relative w-full h-64 md:h-full rounded overflow-hidden ">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between p-4 bg-gray-100 dark:bg-gray-600 md:rounded-r rounded-b">
        <div>
          <Typography
            variant="h3"
            component="h3"
            className="text-xl font-semibold"
          >
            {titre}
          </Typography>
          <Typography
            variant="body1"
            className="mt-2 text-gray-700 dark:text-gray-300"
          >
            {description}
          </Typography>
        </div>

        {/* Technologies */}
        <div className="mt-4">
          <div
            className="flex flex-wrap gap-2"
          >
            {technologies}
          </div>
          
        </div>

        {/* Button */}
        <div className="flex justify-end mt-4">
          <Button variant="ico" aria-label="Voir le code" baseUrl={url} className="flex items-center">
            <RiCodeView />
          </Button>
        </div>
      </div>
    </div>
  );
}
