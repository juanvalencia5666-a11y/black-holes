import CuriositySection from "./CuriositySection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HistorySection from "./HistorySection";
import HowFormedSection from "./HowFormedSection";
import LifespanSection from "./LifespanSection";
import Navbar from "./Navbar";
import OldestSection from "./OldestSection";
import WhatAreSection from "./WhatAreSection";

export default function BlackHolesPage() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      data-ocid="blackholes.page"
    >
      <Navbar />
      <main>
        <HeroSection />
        <WhatAreSection />
        <HowFormedSection />
        <OldestSection />
        <LifespanSection />
        <CuriositySection />
        <HistorySection />
      </main>
      <Footer />
    </div>
  );
}
