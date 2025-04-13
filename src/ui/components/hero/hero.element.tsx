/** @format */

import React from "react";
import { motion } from "framer-motion";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import {
  RiCircleFill,
  RiGithubFill,
  RiLinkedinFill,
  RiMapFill,
  RiTwitterFill
} from "react-icons/ri";

export default function HeroElement() {
  const action = () => {
    alert(
      "Le site est en maintenance Contactez-moi par mes identifiant situé en bas"
    );
  };
  return (
    <motion.div
      className="flex flex-col items-center gap-3 text-center md:items-start md:text-left"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }
      }}>
      <motion.h1
        className="text-4xl font-bold md:text-8xl text-primary dark:text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4
          }
        }}>
        Je suis{" "}
        <motion.span
          className="text-primary-500 dark:text-primary-500"
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}>
          Sikirou
        </motion.span>{" "}
        BASSIROU
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6
          }
        }}>
        Développeur Full Stack passionné, spécialisé dans la création
        d&apos;applications web modernes et performantes.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 md:justify-start"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.8
          }
        }}>
        <motion.button
          className="px-6 py-3 transition-colors border border-opacity-50 rounded-lg dark:text-white text-primary-500 border-primary-500 bg-primary hover:bg-primary/90 dark:bg-primary-600 hover:bg-primary-500 hover:text-white"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}>
          Voir mes projets
        </motion.button>
        <motion.button
          className="px-6 py-3 transition-colors border border-opacity-50 rounded-lg text-primary border-primary hover:bg-primary/10 dark:border-primary dark:text-primary-400 dark:hover:bg-primary-900/20"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}>
          Me contacter
        </motion.button>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 1
          }
        }}>
        {["React", "Node.js", "TypeScript", "Next.js", "..."].map(
          (tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 1.2 + index * 0.1,
                  ease: "easeOut"
                }
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}>
              {tech}
            </motion.span>
          )
        )}
      </motion.div>

      <motion.div
        className="flex items-center gap-2 mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.4
          }
        }}>
        <motion.div
          className="flex items-center gap-2"
          animate={{
            x: [0, 5, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}>
          <span className="w-2 h-2 bg-green-500 rounded-full dark:bg-green-400" />
          <span className="text-primary-500 ">
            Disponible pour des missions
          </span>
        </motion.div>
      </motion.div>

      {/* Informations supplémentaires */}
      <div className="flex flex-col gap-1 mt-4">
        <div className="flex items-center gap-2">
          <RiMapFill className="text-gray-500 dark:text-gray-400" />
          <Typography
            variant="body2"
            className="text-gray-600 dark:text-gray-300">
            Calavi, Bénin
          </Typography>
        </div>
        <div className="flex items-center gap-2">
          <RiCircleFill className="text-primary-500 dark:text-primary-400" />
          <Typography
            variant="body2"
            className="text-gray-600 dark:text-gray-300">
            Disponible pour de nouveaux projets
          </Typography>
        </div>
      </div>

      {/* Liens sociaux */}
      <div className="flex gap-3 mt-4">
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Visitez mes projets sur Github"
          baseUrl="https://www.linkedin.com/in/bassirou-sikirou-53800499/">
          <RiGithubFill className="text-gray-600 dark:text-gray-300" />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="En savoir plus sur LinkedIn"
          action={action}>
          <RiLinkedinFill className="text-gray-600 dark:text-gray-300" />
        </Button>
        <Button
          variant="ico"
          size="small"
          iconTheme="accent"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Suivez-moi sur Twitter"
          action={action}>
          <RiTwitterFill className="text-gray-600 dark:text-gray-300" />
        </Button>
      </div>
    </motion.div>
  );
}
