'use client'

import React from 'react'
import { Phone, MapPin, MessageSquare, Clock, Send, Globe, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className="bg-[#050505] text-white min-h-screen pt-32 pb-20 px-6 overflow-hidden relative">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section with Animation Feel */}
        <header className="mb-20 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Globe size={14} className="animate-spin-slow" /> 24/7 Global Assistance
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
            Get In <span className="text-gold italic font-serif">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Providing clear, confidential, and legally sound guidance for all your marriage-related needs in Pakistan and abroad.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info Cards (4 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5 hover:border-gold/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Direct Line</h3>
                <p className="text-xl font-bold tracking-tight">021-37451359</p>
              </div>

              {/* WhatsApp Card */}
              <a href="https://wa.me/923332316871" className="p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5 hover:border-gold/30 transition-all group block">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">WhatsApp</h3>
                <p className="text-xl font-bold tracking-tight text-green-500">Chat 24/7</p>
              </a>
            </div>

            {/* Address Card (Full Width) */}
            <div className="p-8 rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-gold/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin size={120} />
              </div>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Visit Our Office</h3>
              <p className="text-xl font-medium leading-relaxed max-w-[280px]">
                Supreme Corner Apartments, <br />
                Johar Chowrangi, Block 18, <br />
                Gulistan-e-Johar, Karachi.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 p-6 rounded-3xl bg-gold/5 border border-gold/10">
               <ShieldCheck className="text-gold" size={32} />
               <p className="text-sm text-gray-300 italic">
                 Your privacy is our priority. All consultations are 100% confidential.
               </p>
            </div>
          </div>

          {/* Right Column: Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0A0A0A] p-8 md:p-14 rounded-[50px] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              
              <div className="mb-10">
                <h2 className="text-3xl font-bold uppercase tracking-tight mb-2">Quick Inquiry</h2>
                <p className="text-gray-500">Fill the form and we'll get back to you within 2 hours.</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gold tracking-widest ml-1">Your Full Name</label>
                    <input type="text" placeholder="e.g. Muhammad Ali" className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 focus:border-gold outline-none transition-all placeholder:text-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gold tracking-widest ml-1">Phone / WhatsApp</label>
                    <input type="tel" placeholder="+92 3XX XXXXXXX" className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 focus:border-gold outline-none transition-all placeholder:text-white/10" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gold tracking-widest ml-1">Location</label>
                    <input type="text" placeholder="City or Country" className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 focus:border-gold outline-none transition-all placeholder:text-white/10" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-gold tracking-widest ml-1">Required Service</label>
                    <select className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 focus:border-gold outline-none transition-all text-gray-400 appearance-none">
                      <option>Select a Service</option>
                      <option>Court Marriage</option>
                      <option>Online Nikah</option>
                      <option>Overseas Support</option>
                      <option>Legal Documentation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gold tracking-widest ml-1">Message Details</label>
                  <textarea placeholder="Tell us about your requirements..." rows="4" className="w-full bg-black/50 border border-white/10 rounded-2xl p-5 focus:border-gold outline-none transition-all resize-none placeholder:text-white/10"></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-gold hover:bg-[#c5a037] text-black font-black py-8 rounded-[24px] text-xl uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:-translate-y-1 transition-all">
                  <Send className="mr-3" size={24} /> Send Inquiry Now
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Location Map Suggestion */}
        <div className="mt-20 rounded-[60px] h-[400px] bg-[#0A0A0A] border border-white/5 overflow-hidden group relative">
          <div className="absolute inset-0 bg-gold/5 flex items-center justify-center opacity-40">
             <MapPin size={48} className="text-gold animate-bounce" />
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1565134764817!2d67.1264871!3d24.9126431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzQ1LjUiTiA2N8KwMDcnMzUuNCJF!5e0!3m2!1sen!2s!4v1640000000000" 
            className="w-full h-full grayscale invert border-none opacity-60 group-hover:opacity-100 transition-opacity"
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  )
}