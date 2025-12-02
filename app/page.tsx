import { Hero } from "@/components/modules/Hero";
import { FandBSection } from "@/components/modules/FandBSection";
import { GallerySection } from "@/components/modules/GallerySection"; // <--- Import
import { ServicesSection } from "@/components/modules/ServicesSection";
import { BioSection } from "@/components/modules/BioSection";
import { ContactFooter } from "@/components/modules/ContactFooter";

export default function Home() {
  return (
    <main className="w-full bg-background text-primary">
      <Hero />
      <FandBSection />
      <GallerySection /> {/* <--- Inserted Here */}
      <ServicesSection />
      <BioSection />
      <ContactFooter />
    </main>
  );
}
