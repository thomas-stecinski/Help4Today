import { ContactCTA } from "@/components/sections/ContactCTA";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProfessionalFocus } from "@/components/sections/ProfessionalFocus";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ProfessionalFocus />
      <ProcessSection />
      <ContactCTA />
    </main>
  );
}