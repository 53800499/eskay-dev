import React from 'react';
import { motion } from 'framer-motion';
import { sectionPerspective, staggerContainer } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        variants={sectionPerspective}
        className="relative z-10"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-800 opacity-20"
        variants={sectionPerspective}
        transition={{ delay: 0.2 }}
      />
    </motion.section>
  );
} 