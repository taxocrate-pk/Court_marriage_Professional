'use client'

import React from 'react'
import { 
  ShieldCheck, 
  Gavel, 
  History, 
  Globe, 
  Users, 
  Award, 
  CheckCircle2 
} from 'lucide-react'
import { Landmark } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '40+', icon: History },
    { label: 'Successful Cases', value: '5000+', icon: Gavel },
    { label: 'Cities Covered', value: 'Across Pakistan', icon: Globe },
    { label: 'Expert Lawyers', value: '15+', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-gold/30">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 border-b border-gold/10 bg-gradient-to-b from-midnight to-transparent overflow-hidden">
        <Landmark className="absolute -top-10 -right-10 w-64 h-64 text-gold/5 -rotate-12" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            <Award className="w-4 h-4" /> Trusted Legal Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="text-gold">Court Marriage Pro</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Founded by Senior Advocate <strong>Mohsin Ali Shah</strong>, we bring over 40 years of legal expertise 
            to simplify your journey towards a lawful and Sharia-compliant marriage.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-24">
        
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gold border-l-4 border-gold pl-4">Our Legacy & Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              At Court Marriage Pro, we believe that legal procedures should be accessible, discreet, and 
              strictly compliant with the laws of Pakistan. 
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to bridge the gap between traditional Islamic principles and modern statutory requirements. 
              Whether it's facilitating an online Nikah or handling complex family disputes like Khula and Child Custody, 
              our team ensures your rights are protected at every turn.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-midnight/40 border border-gold/10 text-center hover:border-gold/30 transition-all">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 italic text-white">Why Choose Us?</h2>
            <p className="text-gray-500">The pillars that define our professional legal practice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "100% Sharia Compliant", 
                desc: "All our Nikah proceedings are conducted by licensed Nikah Khawans following authentic Islamic rites." 
              },
              { 
                title: "Statutory Accuracy", 
                desc: "We ensure every marriage is recorded with the Union Council and NADRA for worldwide legal validity." 
              },
              { 
                title: "Strict Confidentiality", 
                desc: "We prioritize your privacy. All client data and consultations are kept under strict attorney-client privilege." 
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gold/5 border border-gold/10 hover:bg-gold/10 transition-all group">
                <ShieldCheck className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services & Offices */}
        <section className="p-12 rounded-[40px] bg-midnight/30 border border-gold/10 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gold">Nationwide Coverage</h2>
              <p className="text-gray-400 mb-8">
                Operating with professional legal offices in major cities to provide accessible support.
              </p>
              <ul className="space-y-4">
                {['Karachi (Head Office)', 'Islamabad', 'Lahore'].map((city, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-gold w-5 h-5" /> {city}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white underline decoration-gold/30 underline-offset-8">Beyond Marriage</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our expertise isn't limited to marriages. We provide comprehensive family law support including:
              </p>
              <div className="flex flex-wrap gap-2">
                {['Online Nikah', 'Divorce Matters', 'Khula Cases', 'Child Custody', 'NADRA Certificates', 'Duplicate Nikah Namas'].map((item, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-midnight border border-gold/20 text-[10px] uppercase font-bold text-gold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="text-center py-10 border-t border-gold/10">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl font-light italic text-gray-300 mb-6 leading-relaxed">
              "Legal union is the foundation of a stable society. Our goal is to ensure that every couple 
              can start their journey with legal peace of mind and spiritual satisfaction."
            </p>
            <footer className="text-gold font-bold uppercase tracking-[0.2em] text-sm">
              — Senior Advocate Mohsin Ali Shah
            </footer>
          </blockquote>
        </section>

      </div>
    </div>
  )
}