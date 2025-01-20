/** @format */

import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import React, { ReactNode } from "react";

interface SkillsImageProps {
  src: string; // Chemin de l'image
  alt: string; // Description de l'image pour l'accessibilité
  children: ReactNode; // Texte associé à l'image
}

export default function SkillsImage({ src, alt, children }: SkillsImageProps) {
  return (
    <div className="flex items-center gap-6 flex-wrap md:flex-nowrap">
      {/* Conteneur de l'image */}
      <div className="relative w-[78px] h-[96px] md:w-[108px] md:h-[120px] flex-shrink-0">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={108}
          height={120}
          objectFit="cover"
          className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Texte associé à l'image */}
      <Typography
        className="text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-200 leading-snug"
        aria-label={typeof children === "string" ? children : undefined}
      >
        {children}
      </Typography>
    </div>
  );
}
