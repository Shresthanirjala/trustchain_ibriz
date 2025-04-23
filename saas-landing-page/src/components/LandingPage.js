
import Footer from "./landingPageComponents/Footer";
import FinalPush from "./landingPageComponents/FinalPush";
import PricingSection from "./landingPageComponents/PricingSection";
import FeatureDisplay from "./landingPageComponents/FeatureDisplay";
import HeroSection from "./landingPageComponents/HeroSection";
import BeforeAfter from "./landingPageComponents/BeforeAfter";

function LandingPage() {
  return (
    <div className="">
      <HeroSection />
      <BeforeAfter />
      <FeatureDisplay />
      {/* <DemoSection /> */}
      <PricingSection />
      
      <FinalPush />
      <Footer />
    </div>
  );
}

export default LandingPage;
