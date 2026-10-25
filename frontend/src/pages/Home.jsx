import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroCarousel from "../components/home/HeroCarousel";
import ServiceMarquee from "../components/home/ServiceMarquee";
import ExploreSection from "../components/home/ExploreSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WorkSection from "../components/home/WorkSection";
import WhySection from "../components/home/WhySection";
import TeamSection from "../components/home/TeamSection";
import ContactSection from "../components/home/ContactSection";
import useReveal from "../hooks/useReveal";
import { scrollToSection } from "../utils/scroll";

export default function Home() {
  const { hash } = useLocation();
  useReveal();

  useEffect(() => {
    document.title = "Ylet — Digital Marketing & IT Solutions";
  }, []);

  // Scroll to /#section when arriving from another page or a shared link.
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => scrollToSection(id, "auto"));
    }
  }, [hash]);

  return (
    <>
      <HeroCarousel />
      <ServiceMarquee />
      <ExploreSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <WhySection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
