/** @format */

import Container from "@/ui/components/container/container";
import ActiveLink from "@/ui/components/navigation/active-link";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import Link from "next/link";
import Avatar from "@/ui/design-system/avatar/avatar";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useTheme } from "@/context/themeContext";
import { motion, AnimatePresence } from "framer-motion";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const menuItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  // Fonction pour gérer l'ouverture/fermeture du menu mobile
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const action = () => {
    alert(
      "Le site est en maintenance Contactez-moi par mes identifiant situé en bas"
    );
  };
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white shadow dark:bg-gray-700"
      initial="hidden"
      animate="visible"
      variants={navVariants}>
      <Container className="flex items-center justify-between py-2">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
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

        {/* Menu de navigation (desktop) */}
        <div className="hidden lg:flex gap-7">
          <Typography
            variant="body2"
            className="flex space-x-4 text-sm md:text-base lg:text-lg">
            {["À propos", "Témoignages", "Œuvres", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible">
                <ActiveLink href={`#${item.toLowerCase()}`}>{item}</ActiveLink>
              </motion.div>
            ))}
          </Typography>
        </div>
        <motion.div
          className="flex items-center hidden gap-3 lg:flex"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          {/* Bouton Mode Sombre */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ico"
              size="small"
              iconTheme="accent"
              className="p-2 rounded"
              action={toggleDarkMode}
              aria-label={
                darkMode ? "Activer le mode clair" : "Activer le mode sombre"
              }>
              {darkMode ? <RiSunFill /> : <RiMoonFill />}
            </Button>
          </motion.div>

          {/* Bouton Télécharger CV */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="accent"
              size="small"
              className="rounded"
              action={action}>
              Télécharger CV
            </Button>
          </motion.div>
        </motion.div>
        {/* Actions (boutons et menu mobile) */}
        <motion.div
          className="flex items-center gap-3 lg:hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          {/* Bouton Menu Mobile */}
          <motion.button
            onClick={toggleMobileMenu}
            className="p-2 text-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Basculer le menu mobile"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </motion.div>
      </Container>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white dark:bg-gray-800 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}>
            <div className="flex flex-col px-12 py-4 space-y-4">
              {["À propos", "Œuvres", "Témoignages", "Contact"].map(
                (item, i) => (
                  <motion.div
                    key={item}
                    variants={menuItemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible">
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
                initial="hidden"
                animate="visible">
                <Typography
                  variant="body1"
                  className="flex items-center justify-between">
                  <div>choisir un theme</div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ico"
                      size="small"
                      iconTheme="accent"
                      className="p-2 rounded"
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
                initial="hidden"
                animate="visible">
                <Button
                  variant="accent"
                  action={action}
                  size="small"
                  className="rounded w-full">
                  Télécharger CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
