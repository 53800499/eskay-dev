/** @format */

import React from "react";
import Typography from "./typography/typography";
import clsx from "clsx";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface Prop {
  children: string | React.ReactNode;
  className?: string;
}

export default function TitreSection({ children, className }: Prop) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={titleVariants}>
      <Typography
        variant="body3"
        className={clsx(
          "bg-gray-300 dark:bg-gray-500 rounded p-2 p-auto ",
          className
        )}>
        {children}
      </Typography>
    </motion.div>
  );
}
