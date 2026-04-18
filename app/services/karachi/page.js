'use client'

import { Scale, CheckCircle, AlertTriangle, FileText, HelpCircle, ArrowRight, ShieldCheck, Gavel,Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function KarachiServicePage() {
  const allFaqs = [
    { q: "Is a court marriage in Karachi actually 'court' marriage?", a: "No, it is a registered Nikah. There is no ceremony inside a court building." },
    { q: "Can I get married without my parents' consent?", a: "Yes, if you are a legal adult (18+), you have the right to marry without parental consent." },
    { q: "Does the government inform my parents?", a: "No. The state does not proactively notify families about your marriage registration." },
    { q: "How long does the process take?", a: "Typically, the process can be completed in a single day if all documents are verified." },
    { q: "Is the marriage certificate valid in all of Pakistan?", a: "Yes, the NADRA-issued certificate is valid across Pakistan and internationally." },
    { q: "Do I need witnesses for the Nikah?", a: "Yes, Islamic law and Pakistani law mandate two adult witnesses." },
    { q: "Can a foreigner marry a Pakistani in Karachi?", a: "Yes, but the documentation requirements, including NOCs and passport details, are more extensive." },
    { q: "What if I lose my Nikah Nama?", a: "You can obtain a certified copy from the Union Council or the registrar who performed the Nikah." },
    { q: "Is a court marriage safe from family interference?", a: "A registered marriage provides legal status, but you should discuss safety concerns with your lawyer if you fear harassment." },
    { q: "Do I need a lawyer for a court marriage?", a: "While you can do it yourself, a lawyer ensures legal compliance, preventing future disputes." },
    { q: "Does NADRA perform the Nikah?", a: "No, NADRA only records the marriage after it has been registered by the Union Council." },
    { q: "Can a divorcee remarry through this process?", a: "Yes, provided they submit the original divorce certificate (Talaq Nama) to prove their status." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 selection:bg-gold/30">
      {/* Hero Section */}
      <section className="relative py-24 bg-midnight/50 border-b border-gold/10 overflow-hidden">
        <Gavel className="absolute -top-10 -left-10 w-64 h-64 text-gold/5 rotate-12" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
            Official 2026 Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Court Marriage in <span className="text-gold">Karachi</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A Complete Legal Guide for performing a Nikah and ensuring it is officially registered 
            under the Muslim Family Laws Ordinance, 1961.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-20">
        
        {/* Intro Section */}
        <section className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Scale className="text-gold w-8 h-8" /> What is a Court Marriage?
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg italic">
              "A court marriage in Karachi is a streamlined legal process for performing a Nikah and ensuring its official registration with the Union Council."
            </p>
            <p className="text-foreground/70 leading-relaxed">
              The objective is to provide couples with a valid, legally recognized marital status recognized by NADRA and all government institutions. Whether seeking privacy or facing family opposition, the process remains the same.
            </p>
          </div>
          <div className="md:col-span-2 p-6 rounded-2xl bg-gold/5 border border-gold/20">
            <h3 className="font-bold text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" /> The Legal Framework
            </h3>
            <p className="text-sm text-foreground/60 leading-loose">
              If you are <strong>18 or older</strong>, you possess the legal capacity to consent to your own marriage. 
              You do not require your guardians' permission. Once registered, the marriage is legally binding and irrevocable.
            </p>
          </div>
        </section>

        {/* Required Documents Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FileText className="text-gold w-7 h-7" /> Required Documents Checklist
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-2xl">
            <table className="w-full text-left border-collapse bg-midnight/30">
              <thead className="bg-gold/10 text-gold uppercase text-xs font-black">
                <tr>
                  <th className="p-5 border-b border-gold/20">Document</th>
                  <th className="p-5 border-b border-gold/20">Legal Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 font-bold text-white">Original CNIC</td>
                  <td className="p-5 text-foreground/70 text-sm">Proof of identity and age for both partners.</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 font-bold text-white">B-Form / Passport</td>
                  <td className="p-5 text-foreground/70 text-sm">Accepted for age verification if CNIC is unavailable.</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 font-bold text-white">Two Witnesses</td>
                  <td className="p-5 text-foreground/70 text-sm">Adult, sane witnesses (preferably male) to testify.</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 font-bold text-white">Passport Photos</td>
                  <td className="p-5 text-foreground/70 text-sm">4-6 recent photographs for legal documentation.</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 font-bold text-white">Divorce/Death Certificate</td>
                  <td className="p-5 text-foreground/70 text-sm">Only required if one party was previously married.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Process Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <CheckCircle className="text-gold w-7 h-7" /> Step-by-Step Registration
          </h2>
          <div className="grid gap-4">
            {[
              { t: "Legal Consultation", d: "Discuss your situation with a qualified legal advisor to ensure no pending hurdles." },
              { t: "Affidavit Preparation", d: "Prepare an affidavit detailing your intent to marry of your own free will." },
              { t: "Nikah Solemnization", d: "The Nikah is performed by a registered Nikah Khawan according to Sharia Law." },
              { t: "Union Council Registration", d: "Critical: Registrar submits the Nikah Nama to the Union Council office." },
              { t: "NADRA Certificate", d: "Apply for the official computerized marriage registration certificate from NADRA." }
            ].map((step, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-midnight/40 border border-gold/10 hover:border-gold/30 transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-black group-hover:bg-gold group-hover:text-black transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{step.t}</h4>
                  <p className="text-sm text-foreground/60">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fee Structure Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Fee Structure & Legal Costs</h2>
          <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-2xl">
            <table className="w-full text-left bg-midnight/30">
              <thead className="bg-gold text-black uppercase text-xs font-black">
                <tr>
                  <th className="p-5">Service Category</th>
                  <th className="p-5 text-right">Estimated Cost (PKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 text-white">Documentation & Affidavits</td>
                  <td className="p-5 text-right font-mono text-gold">5,000 – 10,000</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 text-white">Nikah Khawan Services</td>
                  <td className="p-5 text-right font-mono text-gold">5,000 – 15,000</td>
                </tr>
                <tr className="hover:bg-gold/5 transition-colors">
                  <td className="p-5 text-white">Union Council Registration</td>
                  <td className="p-5 text-right font-mono text-gold">3,000 – 7,000</td>
                </tr>
                <tr className="bg-gold/5">
                  <td className="p-5 text-white font-bold">Total Legal Consultancy</td>
                  <td className="p-5 text-right font-bold font-mono text-gold text-lg">20,000 – 30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-foreground/40 text-center uppercase tracking-widest italic">Fees vary based on case complexity and lawyer expertise.</p>
        </section>

        {/* Mistakes & Expert Advice */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-[32px] bg-red-500/5 border border-red-500/20">
            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Common Mistakes
            </h3>
            <ul className="space-y-3 text-sm text-foreground/70 list-disc pl-5">
              <li><strong>Underage Marriage:</strong> Marrying below 18 is illegal.</li>
              <li><strong>Forged Documents:</strong> Fake CNICs carry severe criminal penalties.</li>
              <li><strong>Ignoring Registration:</strong> A Nikah Nama without UC registration is recipe for future trouble.</li>
              <li><strong>Unverified Agents:</strong> Only work with lawyers with verifiable offices.</li>
            </ul>
          </div>
          <div className="p-8 rounded-[32px] bg-blue-500/5 border border-blue-500/20 relative overflow-hidden">
            <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Expert Guidance
            </h3>
            <p className="text-sm text-foreground/70 italic leading-relaxed">
              "Documentation is your safety net. Treat your court marriage as a legal contract rather than just a social event. 
              Ensure your witnesses are reliable and your record is updated in NADRA promptly."
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="space-y-10">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <HelpCircle className="text-gold w-7 h-7" /> Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {allFaqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl bg-midnight/30 border border-gold/10 hover:border-gold/30 transition-all">
                <h4 className="font-bold text-gold text-sm mb-2">Q: {faq.q}</h4>
                <p className="text-foreground/70 text-xs leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-br from-gold/20 via-midnight/50 to-midnight p-12 rounded-[40px] border border-gold/20 shadow-2xl relative overflow-hidden">
          <Landmark className="absolute -bottom-10 -right-10 w-48 h-48 text-gold/5" />
          <h2 className="text-3xl font-bold mb-4 text-white">Need Secure Legal Protection?</h2>
          <p className="mb-8 text-foreground/70 max-w-xl mx-auto italic">
            Your privacy and legal rights are our priority. We provide end-to-end assistance 
            for court marriage registration in Karachi.
          </p>
          <Button asChild className="bg-gold hover:bg-gold/80 text-black font-black h-14 px-12 rounded-full transition-all hover:scale-105">
            <Link href="/contact" className="flex items-center gap-2 text-lg">
              Book Legal Help Now <ArrowRight className="w-6 h-6" />
            </Link>
          </Button> 
        </section>

      </div>
    </div>
  )
}