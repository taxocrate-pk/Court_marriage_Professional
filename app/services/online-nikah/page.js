'use client'

import React from 'react'
import { Video, ShieldCheck, Globe2, FileText, Calendar, ArrowRight, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function OnlineNikahPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 & Intro */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gold uppercase tracking-tighter mb-8">
            Online Nikah in Pakistan
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed border-l-2 border-gold/50 pl-6">
            Online Nikah in Pakistan is designed for couples who cannot be physically present in the same place but still wish to solemnize marriage in a lawful and Sharia-compliant manner. This service is widely used by overseas Pakistanis, long-distance couples, and families seeking a dignified solution under recognized legal and religious principles.
          </p>
        </header>

        {/* Main Content Body */}
        <div className="space-y-12">
          
          {/* H2: Who Can Use */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Who Can Use Online Nikah Services
            </h2>
            <p className="text-gray-400 leading-relaxed pl-11">
              Online Nikah services are suitable for overseas Pakistanis, individuals living in different cities, and couples facing logistical barriers to physical presence. The service is also helpful where family coordination, travel limitations, or urgent legal needs require a remote solemnization arrangement.
            </p>
          </section>

          {/* H2: Sharia Basis */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Sharia Basis of Online Nikah
            </h2>
            <p className="text-gray-400 leading-relaxed pl-11">
              A Nikah may be solemnized where offer and acceptance, witness participation, identity verification, and required conditions are properly fulfilled. The core purpose is to ensure that the solemnization remains valid, clear, and free from ambiguity. Proper supervision is therefore essential in online arrangements.
            </p>
          </section>

          {/* H2: Legal Documentation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Legal Documentation for Online Nikah
            </h2>
            <p className="text-gray-400 leading-relaxed pl-11">
              Online solemnization still requires careful handling of identification documents, witness information, and supporting records. Where later registration is needed, documentary accuracy becomes even more important. A properly managed file helps prevent errors and supports later official usage.
            </p>
          </section>

          {/* H2: Overseas Coordination */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-px bg-gold"></span> Overseas Coordination
            </h2>
            <p className="text-gray-400 leading-relaxed pl-11">
              For overseas Pakistanis, time zone coordination, document sharing, identity matching, and witness scheduling are often the main practical challenges. A structured process helps resolve these issues efficiently and makes the solemnization smoother for all parties involved.
            </p>
          </section>

          {/* H2: After the Nikah */}
          <section className="space-y-4 p-8 rounded-[30px] bg-[#0A0A0A] border border-gold/10">
            <h2 className="text-2xl font-bold text-gold flex items-center gap-3">
              <Clock size={24} /> After the Nikah
            </h2>
            <p className="text-gray-400 leading-relaxed">
              After the Nikah is solemnized, couples may need follow-up support for marriage documentation, registration, and official record usage. This is especially relevant where the marriage record will be used for immigration, spousal sponsorship, travel documentation, or family status updates.
            </p>
          </section>

          {/* CTA Section */}
          <div className="mt-20 pt-10 border-t border-gold/20 text-center">
            <Button asChild className="bg-gold hover:bg-[#c5a037] text-black font-black px-12 py-8 rounded-full text-xl transition-all shadow-2xl shadow-gold/10">
              <a href="https://wa.me/923332316871" className="flex items-center gap-3 font-serif italic">
                Schedule Online Nikah Now
              </a>
            </Button>
            <p className="mt-6 text-gray-500 text-sm italic">
              Begin your process with structured legal and religious guidance.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}