"use client"
import { Phone, FileText, Scale, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background transition-colors duration-300">
      
      {/* 1. AAPKA ORIGINAL PREMIUM BACKGROUND LOGIC (WAPIS AA GAYA) */}
      <div className="absolute inset-0 z-0">
        
        {/* Main Gradient: Hex hata kar naye dynamic variables lagaye */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from via-hero-via to-hero-to" />
        
        {/* Aapki subtle top radial glow (Aapki file jaisi) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-gold)_0%,_transparent_50%)] opacity-10 dark:opacity-20" />
        
        {/* Seamless bottom transition (Bottom fade) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* 2. Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-24">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Trust Badge - Original styling but theme aware */}
    

          {/* Main Heading - Specific original typography */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] text-balance">
            {/* White heading text with shadow (Aapke image jaisa) */}
            <span className="text-foreground drop-shadow-sm">Court Marriage &</span>
            <br />
            {/* Original Gold Gradient text */}
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Online Nikah Services
            </span>
          </h1>

          {/* Subheading - High contrast text */}
          <p className="mt-8 text-lg sm:text-2xl text-foreground max-w-3xl text-pretty leading-relaxed font-medium">
            Discreet, lawful, and reliable solutions for Court Marriage in{' '}
            <span className="text-gold font-semibold">Islamabad</span>,{' '}
            <span className="text-gold font-semibold">Karachi</span>, and{' '}
            <span className="text-gold font-semibold">Lahore</span>. Expert guidance on Court Marriage Fees and 
            Shari&apos;a-compliant Online Nikah.
          </p>

          {/* Legacy Badge */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <Scale className="w-5 h-5 text-gold" />
            <span className="text-base sm:text-lg font-semibold text-foreground tracking-wide">
              40+ Years of Senior High Court Advocacy
            </span>
          </div>

          {/* CTA Buttons - Keep original prominent styling */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5">
          <Button 
  asChild
  size="lg"
  className="bg-[#D4AF37] hover:bg-[#B8860B] text-[#020617] font-extrabold px-10 py-7 text-lg rounded-xl shadow-lg"
  // aria-label zaroori hai agar icon text ke sath blend ho raha ho
  aria-label="Call for Fee Details"
>
  <a href="tel:+923332317861" className="flex items-center">
    {/* Icon ka color dark rakhein taake gold par nazar aaye */}
    <Phone className="w-5 h-5 mr-2.5 text-[#020617]" />
    Call for Fee Details
  </a>
</Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gold/60 text-foreground hover:bg-gold/15 font-bold px-10 py-7 text-lg rounded-xl"
            >
              <a href="#services">
                <FileText className="w-5 h-5 mr-2.5" />
                Registration Process
              </a>
            </Button>
          </div>

          {/* Stats Bar - Ensure card styling matches original design */}
          <div className="mt-20 w-full max-w-4xl">
            <div className="rounded-2xl p-8 sm:p-10 bg-card/60 backdrop-blur-md border border-border/60">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                <StatItem number="40+" label="Years Experience" />
                <StatItem number="15,000+" label="Cases Handled" />
                <StatItem number="3" label="Major Cities" />
                <StatItem number="100%" label="Confidential" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gold tracking-tight">{number}</div>
      <div className="mt-2 text-sm sm:text-base text-foreground font-medium">{label}</div>
    </div>
  )
}