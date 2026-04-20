'use client'

import React from 'react'
import { MapPin, ShieldCheck, Scale, Clock, Gavel } from 'lucide-react'

export default function RawalpindiServicePage() {
  const cityName = "Rawalpindi";

  return (
    <div className="bg-[#050505] text-zinc-400 min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-16 space-y-4 relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold/5 blur-[120px] rounded-full" />
          
          <div className="flex items-center gap-2 text-gold/60 text-xs font-bold uppercase tracking-[0.2em] relative z-10">
            <MapPin size={14} /> Pindi District Legal Support
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-zinc-100 relative z-10">
            Court Marriage <span className="text-gold italic font-serif">in {cityName}</span>
          </h1>
          <p className="text-zinc-500 text-lg max-w-2xl border-l border-gold/20 pl-6 relative z-10">
            Specialized legal assistance for couples in Rawalpindi. We ensure all documentation and Nikah proceedings strictly follow the local judicial requirements.
          </p>
        </header>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <div className="p-8 rounded-[40px] bg-[#080808] border border-white/5 hover:border-gold/20 transition-all group">
            <Gavel className="text-gold/50 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-zinc-200 font-bold uppercase mb-3 text-sm tracking-widest">District Courts</h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Complete representation at Rawalpindi District Courts, ensuring a smooth and protected legal process.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-[40px] bg-[#080808] border border-white/5 hover:border-gold/20 transition-all group">
            <ShieldCheck className="text-gold/50 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-zinc-200 font-bold uppercase mb-3 text-sm tracking-widest">NADRA Records</h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Direct coordination with local Union Councils in Rawalpindi for official computerized marriage certificates.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-[40px] bg-[#080808] border border-white/5 hover:border-gold/20 transition-all group">
            <Clock className="text-gold/50 mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-zinc-200 font-bold uppercase mb-3 text-sm tracking-widest">Same Day Service</h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              We value your time. Most court marriage proceedings in Rawalpindi are completed within a single working day.
            </p>
          </div>
        </div>

        {/* Localized Footer Info */}
        <div className="mt-20 p-10 rounded-[40px] bg-gradient-to-r from-gold/5 to-transparent border border-gold/10">
          <div className="max-w-2xl">
            <h4 className="text-zinc-200 font-bold uppercase mb-4">Legal Requirements for Rawalpindi</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                Original CNIC of both parties
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                Passport size photographs (4 each)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                Presence of two witnesses with CNICs
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}