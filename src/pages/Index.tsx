import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TeamSection from '@/components/sections/TeamSection';
import CtaSection from '@/components/sections/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TeamSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
