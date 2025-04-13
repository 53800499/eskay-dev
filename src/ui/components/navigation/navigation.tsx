/** @format */

import Container from "@/ui/components/container/container";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import Link from "next/link";
import Avatar from "@/ui/design-system/avatar/avatar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "@/context/themeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navVariants = {
  hidden: {
    y: -100,
    opacity: 0,
    scale: 0.95,
    rotateX: -15
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    y: -100,
    opacity: 0,
    scale: 0.95,
    rotateX: -15,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const logoVariants = {
  hidden: {
    x: -50,
    opacity: 0,
    rotateY: -45,
    scale: 0.8
  },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    rotateY: 10,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const menuItemVariants = {
  hidden: {
    x: -30,
    opacity: 0,
    scale: 0.8,
    rotateY: -20
  },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }),
  hover: {
    scale: 1.05,
    y: -2,
    rotateY: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: {
    x: 30,
    opacity: 0,
    scale: 0.8,
    rotateY: 20
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  hover: {
    scale: 1.1,
    y: -2,
    rotateY: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    rotateY: -5,
    transition: {
      duration: 0.1
    }
  }
};

const mobileMenuVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    y: -20,
    rotateX: -15
  },
  visible: {
    height: "auto",
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    y: -20,
    rotateX: -15,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const scrollDirection = useScrollDirection();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const action = () => {
    alert(
      "Le site est en maintenance Contactez-moi par mes identifiant situé en bas"
    );
  };

  // Fermer le menu mobile lors du défilement
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [scrollDirection]);

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        className="sticky top-0 z-50 bg-white shadow-lg dark:bg-gray-700"
        initial="hidden"
        animate={scrollDirection === "down" ? "exit" : "visible"}
        variants={navVariants}
        style={{ perspective: 1000 }}>
        <Container className="flex items-center justify-between h-16">
          {/* Section Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95, rotateY: -5 }}
            style={{ perspective: 1000 }}
            className="flex items-center w-1/3">
            <Link
              href="/"
              className="flex items-center space-x-2 transition duration-300 hover:opacity-80">
              <Avatar
                src="/assets/images/logo.png"
                alt="Eskay_dev Logo"
                size="small"
              />
              <Typography
                variant="h2"
                theme="black"
                component="h2"
                weight="medium">
                Eskay_dev
              </Typography>
            </Link>
          </motion.div>

          {/* Section Menu de navigation (desktop) */}
          <div className="items-center justify-center hidden w-1/3 lg:flex">
            <Typography
              variant="body2"
              className="flex items-center space-x-8 text-sm md:text-base lg:text-lg">
              {["À propos", "Témoignages", "Œuvres", "Contact"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    style={{ perspective: 1000 }}
                    className="flex items-center">
                    <ActiveLink href={`#${item.toLowerCase()}`}>
                      {item}
                    </ActiveLink>
                  </motion.div>
                )
              )}
            </Typography>
          </div>

          {/* Section Actions */}
          <motion.div
            className="flex items-center justify-end w-1/3 gap-4"
            variants={buttonVariants}
            style={{ perspective: 1000 }}>
            {/* Bouton Mode Sombre */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="hidden lg:block">
              <Button
                variant="ico"
                size="small"
                iconTheme="accent"
                className="p-2 rounded-full shadow-sm"
                action={toggleDarkMode}
                aria-label={
                  darkMode ? "Activer le mode clair" : "Activer le mode sombre"
                }>
                {darkMode ? <RiSunFill /> : <RiMoonFill />}
              </Button>
            </motion.div>

            {/* Bouton Télécharger CV */}
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="hidden lg:block">
              <Button
                variant="accent"
                size="small"
                className="rounded-full shadow-sm"
                action={action}>
                Télécharger CV
              </Button>
            </motion.div>

            {/* Bouton Menu Mobile */}
            <motion.div
              className="flex items-center lg:hidden"
              variants={buttonVariants}
              style={{ perspective: 1000 }}>
              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Basculer le menu mobile"
                whileHover="hover"
                whileTap="tap">
                {isMobileMenuOpen ? (
                  <FaTimes size={24} />
                ) : (
                  <FaBars size={24} />
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="overflow-hidden bg-white lg:hidden dark:bg-gray-800"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ perspective: 1000 }}>
              <div className="flex flex-col px-12 py-4 space-y-4">
                {["À propos", "Œuvres", "Témoignages", "Contact"].map(
                  (item, i) => (
                    <motion.div
                      key={item}
                      variants={menuItemVariants}
                      custom={i}
                      whileHover="hover"
                      style={{ perspective: 1000 }}>
                      <ActiveLink
                        href={`#${item.toLowerCase()}`}
                        className="block py-2 text-lg transition hover:opacity-80">
                        {item}
                      </ActiveLink>
                    </motion.div>
                  )
                )}

                {/* Theme Selector */}
                <motion.div
                  variants={menuItemVariants}
                  custom={4}
                  whileHover="hover"
                  style={{ perspective: 1000 }}>
                  <Typography
                    variant="body1"
                    className="flex items-center justify-between">
                    <div>choisir un theme</div>
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap">
                      <Button
                        variant="ico"
                        size="small"
                        iconTheme="accent"
                        className="p-2 rounded-full shadow-sm"
                        action={toggleDarkMode}
                        aria-label={
                          darkMode
                            ? "Activer le mode clair"
                            : "Activer le mode sombre"
                        }>
                        {darkMode ? <RiSunFill /> : <RiMoonFill />}
                      </Button>
                    </motion.div>
                  </Typography>
                </motion.div>

                {/* Download CV Button */}
                <motion.div
                  variants={menuItemVariants}
                  custom={5}
                  whileHover="hover"
                  style={{ perspective: 1000 }}>
                  <Button
                    variant="accent"
                    action={action}
                    size="small"
                    className="w-full rounded-full shadow-sm">
                    Télécharger CV
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
}
