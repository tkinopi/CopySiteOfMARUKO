import Header from "@/components/Header";
import HamburgerMenu from "@/components/HamburgerMenu";
import HeroSection from "@/components/HeroSection";
import WorkPeople from "@/components/WorkPeople";
import AboutSection from "@/components/AboutSection";
import CultureEnvironment from "@/components/CultureEnvironment";
import RequirementsSection from "@/components/RequirementsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HamburgerMenu />
      <HeroSection />
      <WorkPeople />
      <AboutSection />
      <CultureEnvironment />
      <RequirementsSection />
      <Footer />
    </div>
  );
}
