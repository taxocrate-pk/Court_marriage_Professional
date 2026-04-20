'use client'
import { MapPin, Gavel, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CourtMarriagePage() {
  const cities = [
    { name: "Karachi", path: "/karachi", desc: "Full legal support in Karachi courts and Gulistan-e-Johar area." },
    { name: "Islamabad", path: "/islamabad", desc: "Expert Nikah services in Sector G-10 and F-8 courts." },
    { name: "Lahore", path: "/lahore", desc: "Reliable court marriage in Cantt and District courts." }
  ]

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter">
          Court <span className="text-gold">Marriage</span> Pakistan
        </h1>
        <p className="text-gray-400 text-lg max-w-3xl mb-16 leading-relaxed">
          Free-will Nikah and legal documentation support for couples seeking a lawful process. 
          We assist clients in major cities with complete privacy, confidentiality, and legal protection.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link href={city.path} key={city.name} className="group p-10 rounded-[40px] bg-[#0A0A0A] border border-gold/10 hover:border-gold transition-all duration-500">
              <MapPin className="text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold mb-3">{city.name}</h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{city.desc}</p>
              <div className="flex items-center gap-2 text-gold font-black text-xs uppercase tracking-widest">
                Select City <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}