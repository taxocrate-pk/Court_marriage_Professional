import { ContactSection } from "@/components/contact-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { UrduSection } from "@/components/urdu-section";
import { WhatsAppButton } from "@/components/whatsapp-button";


export default function HomePage() {
  return (
    <>
      <main className="relative min-h-screen bg-background">
        {/* Navigation Anchors */}
        <div id="home" className="scroll-mt-20" />
        
        <HeroSection />
        <ServicesSection />
        <UrduSection />
        <FaqSection />
        <ContactSection />
      </main>
      
      <Footer
       />
      <WhatsAppButton
       />
    </>
  )
}