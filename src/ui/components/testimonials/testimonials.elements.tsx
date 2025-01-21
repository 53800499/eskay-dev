/** @format */

import Avatar from "@/ui/design-system/avatar/avatar";
import Typography from "@/ui/design-system/typography/typography";
import React from "react";

interface Props {
  src: string;
  alt: string;
  commentaire: string;
  nom: string;
  reseaux: string;
}

export default function TestimonialsElements({
  src,
  alt,
  commentaire,
  nom,
  reseaux
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[300px] h-[350px]  bg-gray-200 dark:bg-gray-800 p-6 rounded">
        <div>
          <Avatar src={src} alt={alt} size="large" />
        </div>
        <Typography variant="body2" className=" text-sm">{commentaire}</Typography>

      <div className="text-center">
        <Typography variant="subTitle" className="font-semibold">{nom}</Typography>
        <Typography variant="body3" theme="secondary" className="text-sm text-gray-500">{reseaux}</Typography>
      </div>
    </div>
  );
}
