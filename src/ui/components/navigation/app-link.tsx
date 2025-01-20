import { AppLinks,FooterLink } from "@/types/app-links";
import { RiLinkedinBoxFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

export const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal"
  },
  {
    label: "Projets",
    baseUrl: "/projets",
    type: "internal"
  },
  {
    label: "Coders Monkey",
    baseUrl: "/formations",
    type: "internal"
  },
  {
    label: "Partenaire",
    baseUrl: "/partenaire",
    type: "external"
  }
];
export const footerSocialNetworksLinks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://www.youtube.com",
    type: "external",
    icon:RiYoutubeFill
  },
  {
    label: "LinkedIn",
    baseUrl: "http://www.linkedin.com",
    type: "external",
    icon:RiLinkedinBoxFill
  },
  {
    label: "slack",
    baseUrl: "http://www.slack.com",
    type: "external",
    icon:RiSlackFill
  }
];
export const footerApplicationUsers: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/",
    type: "internal"
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type: "internal"
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type: "internal"
  }
];

export const footerLinks: FooterLink[] = [
  {
    label: "Users",
    links: footerApplicationUsers
  },
  {
    label: "App",
    links: footerApplicationLinks
  }
  ,
  {
    label: "Réseaux",
    links: footerSocialNetworksLinks
  },
  {
    label: "Information",
    links: footerApplicationLinks
  }
];