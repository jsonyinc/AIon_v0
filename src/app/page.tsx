import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIPotentialSection from "@/components/AIPotentialSection";
import RomiParadigmSection from "@/components/RomiParadigmSection";
import AIVisionSection from "@/components/AIVisionSection";
import RomiBenefitsSection from "@/components/RomiBenefitsSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import AboutSection from "@/components/AboutSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-5 pointer-events-none z-0" />

      <Header />
      {/* 헤더 높이만큼 여백 추가 */}
      <div className="pt-16"></div>
      <HeroSection />
      <AIPotentialSection />
      <RomiParadigmSection />
      <AIVisionSection />
      <RomiBenefitsSection />
      <SuccessStoriesSection />
      <AboutSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
