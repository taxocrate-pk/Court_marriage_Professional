'use client'

import React from 'react'
import { Heart, Scroll, Users, CheckSquare, Scale, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Meta Data for Afnan (To be put in layout.js or Head)
// Title: Sharia-Compliant Nikah in Pakistan | Islamic Marriage Process with Legal Guidance
// Description: Learn about Sharia-compliant Nikah in Pakistan with witness requirements, Ijab-o-Qabool, solemnization guidance, and proper documentation support.

export default function ShariaCompliant() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl border border-gold/20 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <Scale className="text-gold -rotate-45 group-hover:rotate-0 transition-transform" size={32} />
            </div>
          </div>
          
          {/* H1 With Gold Theme */}
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
            <span className="text-gold italic">Sharia-Compliant</span> <br /> Nikah in Pakistan
          </h1>
          
          {/* Intro Paragraph - Exact from Docs */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            A Sharia-compliant Nikah is based on clear offer and acceptance, eligible parties, witnesses, and fulfillment of the required Islamic conditions for solemnization. In Pakistan, many couples seek a process that is both religiously valid and practically supported through accurate documentation and lawful procedure.
          </p>
        </div>

        {/* Content Body with Premium Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* H2: Religious Integrity */}
          <div className="p-8 rounded-[40px] bg-[#0A0A0A] border border-gold/10 hover:border-gold/30 transition-all">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Scroll className="text-gold" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">Religious Integrity of the Process</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The purpose of a Sharia-compliant process is not only to complete a ceremony but to ensure that the marriage is entered into with clarity, consent, and proper solemnization. Religious validity and procedural discipline should go together rather than conflict with each other.
            </p>
          </div>

          {/* H2: Witnesses and Consent */}
          <div className="p-8 rounded-[40px] bg-[#0A0A0A] border border-gold/10 hover:border-gold/30 transition-all">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-gold" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">Witnesses and Consent</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Witnesses play an important role in the solemnization process. Free consent of both parties is essential, and the solemnization must be handled in a manner that avoids coercion, uncertainty, or procedural confusion.
            </p>
          </div>

          {/* H2: Documentation and Formal Records */}
          <div className="p-8 rounded-[40px] bg-[#0A0A0A] border border-gold/10 hover:border-gold/30 transition-all">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6">
              <CheckSquare className="text-gold" size={24} />
            </div>
            <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-tight">Documentation and Formal Records</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Even where the religious solemnization is the central concern, documentation remains important. Marriage records often become necessary for official, family, travel, inheritance, and legal purposes, which is why careful record handling is recommended.
            </p>
          </div>
        </div>

        {/* CTA Section - Exact from Docs */}
        <div className="relative overflow-hidden rounded-[50px] bg-[#0A0A0A] border border-gold/20 p-12 text-center group">
          <div className="absolute top-0 left-0 w-full h-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Speak with our team for a Sharia-compliant marriage process that also respects legal and documentary needs.
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="bg-gold hover:bg-[#c5a037] text-black font-black px-10 py-7 rounded-2xl text-lg transition-transform hover:scale-105 shadow-2xl shadow-gold/20">
                <a href="https://wa.me/923332316871" className="flex items-center gap-2">
                  <MessageCircle size={20} /> Get Sharia Guidance
                </a>
              </Button>
              <Button variant="outline" className="border-gold/20 text-white hover:bg-gold/10 px-10 py-7 rounded-2xl text-lg">
                View Procedures <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
            
            <p className="text-gold/50 text-[10px] font-bold uppercase tracking-[0.4em]">
              Authorized & Registered Legal Services
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}