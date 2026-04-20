'use client'
import React from 'react'
import { Wallet, Scale, FileText, Globe } from 'lucide-react'

const feeItems = [
  { icon: Scale, label: "Nikah Khawan Fee", detail: "Sermon and Sharia Services" },
  { icon: FileText, label: "Documentation", detail: "Affidavits and Legal Drafting" },
  { icon: Wallet, label: "Government Fee", detail: "Union Council and Registration Charges" },
  { icon: Globe, label: "Overseas Support", detail: "Coordination and Digital Processing" }
]

export default function FeePage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black uppercase mb-12">Process & <span className="text-gold italic">Fee 2026</span></h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {feeItems.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-[#0A0A0A] border border-gold/10 flex items-center gap-6">
              <item.icon className="text-gold" size={40} />
              <div>
                <h3 className="text-xl font-bold">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0A0A0A] p-10 rounded-[40px] border border-gold/20">
          <p className="text-gray-400 leading-relaxed italic text-center">
            "Fees may vary depending on city, case complexity, urgency, and specific legal requirements. A formal fee quote may be shared after reviewing the basic facts of the case."
          </p>
        </div>
      </div>
    </div>
  )
}