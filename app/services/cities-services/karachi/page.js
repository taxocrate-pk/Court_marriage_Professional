'use client'
import { MapPin, Phone, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function KarachiPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest">
            Regional Office: Karachi
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Court Marriage <br /> <span className="text-gold italic">Karachi</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Professional legal services for court marriage and Nikah registration in Karachi. 
            Our team provides complete support from documentation to final registration at our 
            <b> Gulistan-e-Johar</b> office and relevant courts.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white uppercase">Why in Karachi?</h3>
            <ul className="grid gap-3">
              {["Confidential and secure process", "Same-day Nikah services available", "Legal documentation for NADRA records", "Experienced Nikah Khawans & Lawyers"].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-500 text-sm">
                  <CheckCircle className="text-gold" size={16} /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Office Card */}
        <div className="p-10 rounded-[40px] bg-[#0A0A0A] border border-gold/20 sticky top-32 shadow-2xl shadow-gold/5">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <MapPin className="text-gold" /> Office Location
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-1">Address</p>
              <p className="text-white font-medium">Supreme Corner Apartments, Johar Chowrangi, Block 18, Gulistan-e-Johar, Karachi.</p>
            </div>
            <div className="flex justify-between border-t border-gold/10 pt-6">
              <div>
                <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-1">Availability</p>
                <p className="text-white text-sm">24/7 on WhatsApp</p>
              </div>
              <div className="text-right">
                <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-1">Timing</p>
                <p className="text-white text-sm">9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="pt-6 space-y-3">
              <Button asChild className="w-full bg-gold hover:bg-[#c5a037] text-black font-black h-14 rounded-2xl">
                <a href="https://wa.me/923332316871"><MessageCircle className="mr-2" /> WhatsApp Now</a>
              </Button>
              <Button variant="outline" asChild className="w-full border-gold/20 text-white hover:bg-gold/10 h-14 rounded-2xl">
                <a href="tel:02137451359"><Phone className="mr-2" size={18} /> 021-37451359</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}