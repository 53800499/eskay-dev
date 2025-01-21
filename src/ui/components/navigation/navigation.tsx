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
    <nav className="shadow sticky top-0 z-50 bg-white dark:bg-gray-700">
      <Container className="flex items-center justify-between py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition duration-300 hover:opacity-80"
        >
          <Avatar
            src="/assets/images/logo.png"
            alt="Eskay_dev Logo"
            size="small"
          />
          <Typography variant="h2" theme="black" component="h2" weight="medium">
            Eskay_dev
          </Typography>
        </Link>

        {/* Menu de navigation (desktop) */}
        <div className=" hidden lg:flex gap-7 ">
          <Typography
            variant="body2"
            className="flex space-x-4 text-sm md:text-base lg:text-lg"
          >
            <ActiveLink href="#about">À propos</ActiveLink>
            <ActiveLink href="#testimonials">Témoignages</ActiveLink>
            <ActiveLink href="#work">Œuvres</ActiveLink>
            <ActiveLink href="#contact">Contact</ActiveLink>
          </Typography>
        </div>
        <div className="flex items-center  hidden lg:flex gap-3">
          {/* Bouton Mode Sombre */}
          <Button
            variant="ico"
            size="small"
            iconTheme="accent"
            className="rounded p-2"
            action={toggleDarkMode}
            aria-label={
              darkMode ? "Activer le mode clair" : "Activer le mode sombre"
            }
          >
            {darkMode ? <RiSunFill /> : <RiMoonFill />}
          </Button>

          {/* Bouton Télécharger CV */}
          <Button
            variant="accent"
            size="small"
            className="rounded"
            action={action}
          >
            Télécharger CV
          </Button>
        </div>
        {/* Actions (boutons et menu mobile) */}
        <div className="flex items-center gap-3">
          {/* Bouton Menu Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            aria-label="Basculer le menu mobile"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </Container>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden bg-white dark:bg-gray-900 transition-max-height duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-12 py-4 space-y-4">
          <ActiveLink
            href="#about"
            className="block py-2 text-lg transition hover:opacity-80"
          >
            À propos
          </ActiveLink>
          <ActiveLink
            href="#work"
            className="block py-2 text-lg transition hover:opacity-80"
          >
            Œuvres
          </ActiveLink>
          <ActiveLink
            href="#testimonials"
            className="block py-2 text-lg transition hover:opacity-80"
          >
            Témoignages
          </ActiveLink>
          <ActiveLink
            href="#contact"
            className="block py-2 text-lg transition hover:opacity-80"
          >
            Contact
          </ActiveLink>
          {/* Bouton Mode Sombre       <Typography variant='body1' theme='black'>
           */}
          <Typography
            variant="body1"
            className="flex items-center justify-between"
          >
            <div>choisir un theme</div>
            <div>
              <Button
                variant="ico"
                size="small"
                iconTheme="accent"
                className="rounded p-2"
                action={toggleDarkMode}
                aria-label={
                  darkMode ? "Activer le mode clair" : "Activer le mode sombre"
                }
              >
                {darkMode ? <RiSunFill /> : <RiMoonFill />}
              </Button>
            </div>
          </Typography>

          {/* Bouton Télécharger CV */}
          <Button variant="accent" size="small" className="rounded">
            Télécharger CV
          </Button>
        </div>
      </div>
    </nav>
  );
}
