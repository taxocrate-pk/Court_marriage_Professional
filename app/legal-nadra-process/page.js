'use client'
import React from 'react'

export default function NadraPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-5xl md:text-8xl font-black uppercase text-gold">NADRA <span className="text-white">Process</span></h1>
        <p className="text-xl text-gray-400">The legal NADRA process generally concerns the official record stage that follows solemnization.</p>
        
        <div className="grid gap-8">
           <section className="p-8 bg-[#0A0A0A] rounded-3xl border border-gold/5">
              <h2 className="text-2xl font-bold mb-4 uppercase">Registration Importance</h2>
              <p className="text-gray-500 leading-relaxed">Properly documented marriages are essential for family records, travel, visa processing, and inheritance.</p>
           </section>
           <section className="p-8 bg-[#0A0A0A] rounded-3xl border border-gold/5">
              <h2 className="text-2xl font-bold mb-4 uppercase">Support Provided</h2>
              <p className="text-gray-500 leading-relaxed">We guide couples through the sequence of solemnization to the final official marriage record stage.</p>
           </section>
        </div>
      </div>
    </div>
  )
}