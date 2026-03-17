import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import MapSection from "@/components/MapSection";
import RsvpSection from "@/components/RsvpSection";
import WishSection from "@/components/WishSection";
import FooterSection from "@/components/FooterSection";
import MusicButton from "@/components/MusicButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MusicButton />
      <HeroSection />
      <DetailsSection />
      <WishSection />
      <MapSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
