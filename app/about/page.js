'use client'

import { 
  Users, 
  ShieldCheck, 
  Gavel, 
  CheckCircle, 
  Scale, 
  FileText, 
  ArrowRight, 
  Landmark,
  HeartHandshake,
  Briefcase
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const steps = [
    { s: "1", l: "Document Verification", d: "CNIC/NICOP and required documents reviewed" },
    { s: "2", l: "Consent Affidavits", d: "Free-will statements of bride and groom" },
    { s: "3", l: "Nikah Ceremony", d: "Conducted by licensed Nikah Khawan" },
    { s: "4", l: "Nikah Nama Issuance", d: "Signed and stamped copies provided" },
    { s: "5", l: "Union Council Registration", d: "Official record entry and processing" },
    { s: "6", l: "NADRA Integration", d: "Marriage data linked through CRMS" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-gold/30">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/30 border-b border-gold/10 overflow-hidden text-center">
        <Users className="absolute -top-10 -left-10 w-64 h-64 text-gold/5 rotate-12" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            Official 2026 Guide
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-foreground tracking-tight">
            About Court<span className="text-gold"> Marriage Professionals</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-foreground font-semibold leading-relaxed">
              Court Marriage Professionals in Karachi, Lahore, Islamabad & Rawalpindi
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Court Marriage in Pakistan requires legal accuracy, proper documentation, and a structured process to ensure long-term validity. Court Marriage Professionals provides comprehensive legal assistance for court marriage in Pakistan, online Nikah services, and marriage registration across major cities.
            </p>
            <p className="text-base text-muted-foreground italic">
              Our platform is built for individuals seeking reliable court marriage services, lawful Nikah procedures, and NADRA-linked marriage registration, all handled with confidentiality.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-20 space-y-24">
        
        {/* Section 1: Legal Background */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold flex items-center gap-3 text-foreground">
                <Scale className="text-gold w-8 h-8" /> Legal Background and Experience
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg border-l-4 border-gold pl-6">
                Court Marriage Professionals operates under the supervision of experienced family lawyers who specialize in court marriage in Pakistan, Nikah documentation, and registration procedures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Court marriage is not an informal process. It is a legally recognized Nikah contract, requiring proper documentation, witnesses, and registration through Union Councils and NADRA-linked systems.
              </p>
            </div>
            <div className="w-full md:w-80 p-6 rounded-2xl bg-gold/5 border border-gold/20 shadow-sm">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold" /> Every Case Ensures:
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold shrink-0" /> Legal validity under Pakistani law</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold shrink-0" /> Proper issuance of Nikah Nama</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold shrink-0" /> Accurate Union Council registration</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold shrink-0" /> Eligibility for NADRA Certificate (MRC)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Services List */}
        <section className="bg-card border border-border p-8 md:p-12 rounded-[32px] space-y-8 shadow-sm">
          <h2 className="text-3xl font-bold text-foreground">Court Marriage Services in Pakistan – What We Provide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Court Marriage in Islamabad, Karachi, Lahore, and Rawalpindi",
              "Online Nikah services for overseas Pakistanis",
              "Marriage registration through Union Councils",
              "NADRA Marriage Certificate (MRC) facilitation",
              "Preparation of affidavits and legal documentation",
              "Legal guidance on court marriage procedures in Pakistan"
            ].map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                <CheckCircle className="w-5 h-5 text-gold mt-1 shrink-0" />
                <span className="text-foreground/80 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Process Table */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold flex items-center gap-3 text-foreground">
              <FileText className="text-gold w-8 h-8" /> Step-by-Step Overview
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-xl bg-card">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gold/10 text-gold uppercase text-xs font-black">
                <tr>
                  <th className="p-5 border-b border-gold/10">Step</th>
                  <th className="p-5 border-b border-gold/10">Legal Stage</th>
                  <th className="p-5 border-b border-gold/10">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                {steps.map((step, i) => (
                  <tr key={i} className="hover:bg-gold/5 transition-colors">
                    <td className="p-5 font-bold text-gold">{step.s}</td>
                    <td className="p-5 font-bold text-foreground">{step.l}</td>
                    <td className="p-5 text-muted-foreground text-sm">{step.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Legal Reality */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Legal Reality of Court Marriage</h2>
            <p className="text-muted-foreground leading-relaxed">
              A common misconception is that court marriage takes place inside a courtroom. Under Pakistani law, it refers to a free-will Nikah performed according to Islamic principles and registered civilly.
            </p>
            <div className="space-y-4">
              {["Legal age 18+", "Witness requirements", "Documentation accuracy", "Proper registration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gold" />
                  <span className="text-foreground font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-blue-500/5 border border-blue-500/20 p-8 rounded-[40px] relative">
            <Gavel className="text-blue-500/10 w-32 h-32 absolute bottom-4 right-4" />
            <p className="text-foreground/90 text-lg leading-relaxed relative z-10 italic">
              "This ensures that the marriage is valid for all legal purposes, including documentation, immigration, and family records."
            </p>
          </div>
        </section>

        {/* Section 5: Why Choose Us Table */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground">Why Choose Us</h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-muted text-foreground uppercase text-[10px] font-black tracking-widest">
                <tr>
                  <th className="p-5 border-b border-border">Feature</th>
                  <th className="p-5 border-b border-border">Our Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  {f: "Legal Compliance", a: "Full adherence to Pakistani marriage laws"},
                  {f: "Documentation", a: "Accurate and complete legal paperwork"},
                  {f: "Confidentiality", a: "Client privacy maintained at all stages"},
                  {f: "Speed", a: "Efficient processing within legal timelines"}
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="p-5 font-bold text-foreground">{item.f}</td>
                    <td className="p-5 text-muted-foreground">{item.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: NADRA & Commitment */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-10 rounded-[40px] bg-gold/5 border border-gold/10 space-y-6">
            <h3 className="text-2xl font-bold text-gold flex items-center gap-3">
              <Landmark className="w-6 h-6" /> NADRA Integration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We ensure registration records are properly submitted for the issuance of the NADRA Marriage Certificate (MRC).
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-muted/30 border border-border space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-gold" /> Our Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to maintaining strict legal standards and providing transparent procedures for long-term peace of mind.
            </p>
          </div>
        </section>

        {/* Final CTA Section - Premium Black Style */}
        <section className="text-center bg-black p-12 md:p-16 rounded-[48px] border border-gold/30 shadow-[0_0_60px_-10px_rgba(212,175,55,0.3)] relative overflow-hidden my-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#d4af3710_0%,_transparent_70%)] opacity-60"></div>
          <Landmark className="absolute -bottom-10 -right-10 w-48 h-48 text-gold/10 rotate-12" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Need Secure Legal Protection for Your <span className="text-gold italic">Free-Will Marriage</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
              Your privacy and legal rights are our top priority. Contact our experts now for immediate assistance.
            </p>
            
            <div className="flex flex-col items-center gap-6 mt-8">
<Button 
  asChild 
  className="bg-black hover:bg-black/80 text-white font-black h-16 px-12 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 text-xl border border-gold/50 shadow-[0_0_30px_-5px_rgba(212,175,55,0.3)] group"
>
  <a 
    href={`https://wa.me/923332317861?text=${encodeURIComponent('Hello, I would like to inquire about your Court Marriage services.')}`} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 no-underline"
  >
    {/* WhatsApp Icon with Gold Fill on Hover */}
    <svg 
      viewBox="0 0 24 24" 
      className="w-7 h-7 fill-[#25D366] group-hover:fill-gold transition-colors duration-300" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
    <span className="text-white group-hover:text-gold transition-colors duration-300">
      Contact Our Expert Now
    </span>
  </a>
</Button>
            </div>
          </div>
        </section>

      </div>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}

// --- Helper Components ---

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function WhatsAppButton() {
  const phoneNumber = '923332317861'
  const message = encodeURIComponent('Hello, I would like to inquire about your Court Marriage services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105">
        <WhatsAppIcon />
        <span className="hidden sm:inline font-medium pr-1">Chat with Us</span>
      </div>
    </a>
  )
}