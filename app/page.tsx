import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ServicesSection from "@/components/services-section";
import WhyChooseUs from "@/components/why-choose-us";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
