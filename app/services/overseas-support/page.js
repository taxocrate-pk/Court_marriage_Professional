'use client'
import { Plane, FileText, Globe2, Scale } from 'lucide-react'

export default function OverseasSupport() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-black mb-4 uppercase tracking-tighter">Overseas <span className="text-gold">Support</span></h1>
        <p className="text-gray-400 text-lg mb-16">Dedicated marriage coordination for Pakistanis abroad and foreign nationals.</p>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed italic">
              "Marriage-related matters for overseas clients are sensitive. We aim to handle information with discretion and provide professional guidance on documentation."
            </p>
            <div className="p-8 rounded-[32px] bg-gold/5 border border-gold/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2 underline decoration-gold/50"><Scale size={20}/> Legal Accuracy</h3>
              <p className="text-sm text-gray-400">Proper supervision reduces the risk of errors in names, identity details, and witness data which are crucial for immigration status.</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-gold/10 flex gap-5">
              <Plane className="text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Global Reach</h4>
                <p className="text-xs text-gray-500">Supporting clients across USA, UK, UAE, Canada, and beyond.</p>
              </div>
            </div>
            <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-gold/10 flex gap-5">
              <FileText className="text-gold shrink-0" />
              <div>
                <h4 className="font-bold text-white mb-1">Visa Documentation</h4>
                <p className="text-xs text-gray-500">Preparing records suitable for spousal sponsorship and official embassy use.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}