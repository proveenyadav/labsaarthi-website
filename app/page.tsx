import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import LeadershipSection from "@/components/LeadershipSection";
import DemoCTA from "@/components/DemoCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <LeadershipSection />
      <DemoCTA />
    </Layout>
  );
}