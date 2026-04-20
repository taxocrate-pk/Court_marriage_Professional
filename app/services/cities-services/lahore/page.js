'use client'
import { MapPin, Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LahorePage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest">
            City of Excellence: Lahore
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Court Marriage <br /> <span className="text-gold italic font-serif">Lahore</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Trusted legal marriage registration and Nikah services in Lahore. We facilitate couples at <b>Cantt Courts</b>, <b>Model Town</b>, and <b>District Courts</b> with professional ease and legal assurance.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase">Legal Facilitation</h3>
            <ul className="grid gap-3">
              {["Cantt & District Court coordination", "Registered Nikah Khawan services", "Witness and documentation assistance", "Official record updates at Union Council"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                  <CheckCircle className="text-gold" size={16} /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-10 rounded-[40px] bg-[#0A0A0A] border border-gold/20 sticky top-32">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <MapPin className="text-gold" /> Court Locations
          </h2>
          <div className="space-y-6 text-gray-400 text-sm">
            <p>Our legal team operates across major courts in Lahore to provide swift and reliable marriage solemnization services.</p>
            
            <div className="pt-6 space-y-3 text-left">
              <Button asChild className="w-full bg-gold hover:bg-[#c5a037] text-black font-black h-14 rounded-2xl">
                <a href="https://wa.me/923332316871"><MessageCircle className="mr-2" /> WhatsApp Contact</a>
              </Button>
              <Button variant="outline" asChild className="w-full border-gold/20 text-white hover:bg-gold/10 h-14 rounded-2xl">
                <a href="tel:+923332316871"><Phone className="mr-2" size={18} /> Call Office</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}