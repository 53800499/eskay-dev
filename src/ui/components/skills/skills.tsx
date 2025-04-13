/** @format */

import React from "react";
import Typography from "@/ui/design-system/typography/typography";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  hover: {
    y: -5,
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Git"
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={skillVariants}
          whileHover="hover"
          className="p-4 text-center bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <Typography
            variant="body2"
            theme="black"
            component="span"
            weight="medium">
            {skill}
          </Typography>
        </motion.div>
      ))}
    </div>
  );
}
