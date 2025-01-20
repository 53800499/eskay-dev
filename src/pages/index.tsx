/** @format */

import Layout from "@/ui/components/layout/layout";
import Seo from "@/ui/components/seo/seo";
import React from "react";
import HeroContainer from "@/ui/components/hero/hero.container";
import AboutContainer from "@/ui/components/about/about.container";
import SkillsContainer from "@/ui/components/skills/skills.container";
import ExperienceContainer from "@/ui/components/experience/experience.container";
import WorkContainer from "@/ui/components/work/work.container";
import TestimonialsContainer from "@/ui/components/testimonials/testimonials.container";
import ContactContainer from "@/ui/components/contact/contact.container";
import FooterContainer from "@/ui/components/footer/footer.container";

export default function Home() {
  return (
    <>
      <Seo title="Eskay_dev" description="BASSIROU Sikirou" />
      <Layout isDisplayCreadCrumbs={false}>
        <HeroContainer/>
        <AboutContainer/>
        <SkillsContainer/>
        <ExperienceContainer/>
        <WorkContainer/>
        <TestimonialsContainer/>
        <ContactContainer/>
        <FooterContainer/>
      </Layout>
    </>
  );
}
