/** @format */

import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
  layout: string;
  classNameImage?: string;
}

export default function HeroImage({
  src,
  alt,
  className,
  layout,
  classNameImage
}: Props) {
  return (
    <div className="flex items-center justify-center m-8">
      <motion.div
        className={clsx(
          "relative flex items-center justify-center w-[260px] h-[300px]",
          className
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
          }
        }}>
        {/* Effet de lueur amélioré */}
        <motion.div
          className="absolute inset-0 rounded-md bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Arrière-plan superposé (effet d'ombre décalée) */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-[260px] h-[300px] bg-gray-300 dark:bg-gray-700 rounded-md"
          animate={{
            y: [0, -5, 0],
            x: [0, -5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Conteneur principal pour l'image */}
        <motion.div
          className="relative w-[260px] h-[300px] bg-gray-200 dark:bg-gray-800 rounded-md shadow-md overflow-hidden"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
          <Image
            src={src}
            alt={alt}
            layout={layout}
            objectFit="cover"
            className={clsx(
              "rounded-md transition-transform duration-300 hover:scale-105",
              classNameImage
            )}
          />
        </motion.div>

        {/* Points décoratifs */}
        <motion.div
          className="absolute w-4 h-4 rounded-full -top-2 -left-2 bg-primary-500/80"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-4 h-4 rounded-full -bottom-2 -right-2 bg-secondary-500/80"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </div>
  );
}
