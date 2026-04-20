'use client'

import React from 'react'
import { MessageCircle, CheckCircle2, FileText, Users, Scale, ClipboardList, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProcedurePage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* H1 & Intro */}
   {/* H1 & Intro */}
{/* H1 & Intro */}
<header className="mb-20 space-y-8 text-center md:text-left">
  <h1 className="text-[clamp(1.5rem,5vw,4rem)] font-black uppercase tracking-tighter leading-tight w-full overflow-visible">
    Court Marriage <span className="text-gold italic font-serif">Procedure in Pakistan</span>
  </h1>
  <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-gold pl-8 mx-auto md:mx-0">
    Court marriage procedure in Pakistan involves a structured sequence of consent verification, document review, Nikah solemnization, and registration-related formalities. The exact process may vary depending on city, urgency, and whether one of the parties is overseas, but the legal and documentary foundation remains essential in every case.
  </p>
</header>

        {/* Step-by-Step Sections (Exact from Docs) */}
        <div className="space-y-16">
          
          {/* Step 1 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">1</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step One — Initial Consultation and Eligibility Review</h2>
            <p className="text-gray-500 leading-relaxed">
              Before proceeding, the basic facts of the case are reviewed. This includes the legal age of the parties, marital status, identity documentation, and any special circumstances such as overseas residence, prior marriage, or foreign nationality. Early review helps avoid delays and ensures the process is handled correctly from the beginning.
            </p>
          </section>

          {/* Step 2 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">2</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step Two — Document Verification</h2>
            <p className="text-gray-500 leading-relaxed">
              The bride and groom are required to provide valid identity documents. Supporting documents may also be needed where a party was previously married or where an overseas or foreign element exists. Proper document review reduces the risk of procedural complications during Nikah and later registration.
            </p>
          </section>

          {/* Step 3 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">3</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step Three — Witness and Consent Compliance</h2>
            <p className="text-gray-500 leading-relaxed">
              A lawful Nikah requires free consent and the presence of witnesses in accordance with legal and religious requirements. Witness details are reviewed in advance to ensure that solemnization is conducted properly and without dispute. This stage is essential to the integrity of the marriage process.
            </p>
          </section>

          {/* Step 4 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">4</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step Four — Nikah Solemnization</h2>
            <p className="text-gray-500 leading-relaxed">
              The Nikah may be solemnized physically or, where arranged appropriately, through online means for long-distance or overseas cases. Ijab-o-Qabool, identity confirmation, witness participation, and religious formalities are completed under supervision of a qualified Nikah Khawan or authorized religious officiant.
            </p>
          </section>

          {/* Step 5 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">5</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step Five — Documentation and Record Preparation</h2>
            <p className="text-gray-500 leading-relaxed">
              After solemnization, the relevant marriage documents are prepared, reviewed, and organized. Accuracy at this stage is important because these records may later be required for registration, immigration, family documentation, and official record purposes. Proper drafting helps avoid future corrections and delays.
            </p>
          </section>

          {/* Step 6 */}
          <section className="relative pl-12 border-l border-gold/20">
            <div className="absolute -left-4 top-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-black text-sm">6</div>
            <h2 className="text-2xl font-bold text-white uppercase mb-4 tracking-tight">Step Six — Registration Support and Follow-Up</h2>
            <p className="text-gray-500 leading-relaxed">
              Where required, support may be provided for the formal marriage registration stage and the related official record process. This part of the procedure is particularly important for couples who need a properly recorded marriage for government, travel, inheritance, visa, or family record purposes.
            </p>
          </section>

        </div>

        {/* Final CTA (Exact from Docs) */}
        <div className="mt-24 p-12 rounded-[50px] bg-[#0A0A0A] border border-gold/20 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-2xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
              Contact us to begin your court marriage procedure in Pakistan with proper legal guidance and documentation support.
            </h3>
            <Button asChild className="bg-gold hover:bg-[#c5a037] text-black font-black px-12 py-8 rounded-2xl text-xl shadow-2xl transition-transform hover:scale-105">
              <a href="https://wa.me/923332316871" className="flex items-center gap-3">
                <MessageCircle size={24} /> Start Consultation
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  )
}