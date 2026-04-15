'use client'

import { useState } from 'react'
import axios from 'axios'
import { MapPin, Phone, Mail, Send, CheckCircle2, Loader2, ShieldCheck, Clock, Gavel } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from './ui/input'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await axios.post('/api/contact', formData)
      
      if (res.status === 200) {
        // --- WhatsApp Logic Start ---
        const myWhatsAppNumber = "923332316871"; // Aapka number set kar diya hai
        const messageText = `*New Inquiry via Portal*%0A%0A` +
                            `*Name:* ${formData.name}%0A` +
                            `*Phone:* ${formData.phone}%0A` +
                            `*Email:* ${formData.email}%0A` +
                            `*Service:* ${formData.service}%0A` +
                            `*Details:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${messageText}`;
        
        // Naye tab mein WhatsApp khol dega
        window.open(whatsappUrl, '_blank');
        // --- WhatsApp Logic End ---

        setIsSubmitted(true)
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err) {
      console.error("Submission Error:", err)
      alert("Database connection error!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">Contact Us</h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Get in touch with our legal team for a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Content & Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4 text-gradient-gold">Why Consult With Us?</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                We provide a secure and simplified legal process for families and individuals. 
                Our team ensures every step is handled with utmost professionalism and legal compliance.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid gap-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">100% Legal Protection</h4>
                  <p className="text-sm text-foreground/60">All procedures follow Pakistani Family Laws and Sharia requirements.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Same Day Service</h4>
                  <p className="text-sm text-foreground/60">Swift documentation and Nikah registration within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Gavel className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Expert Advocates</h4>
                  <p className="text-sm text-foreground/60">Direct access to High Court lawyers for complex legal matters.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-8 rounded-3xl bg-midnight-light/30 border border-white/5 backdrop-blur-sm space-y-4">
              <h4 className="font-bold text-gold">Direct Contact Info</h4>
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-gold" />
                <span>+92 333 2316871</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-gold" />
                <span>info@legalnikah.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-gold" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="glass-card-strong rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-foreground mb-8">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Thank You!</h4>
                <p className="text-foreground/70">Your message has been received. Our team will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 ml-1">Full Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-midnight/40 border-white/10 text-foreground h-12 focus:border-gold/50 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 ml-1">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 XXX XXXXXXX"
                      className="bg-midnight/40 border-white/10 text-foreground h-12 focus:border-gold/50 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 ml-1">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="bg-midnight/40 border-white/10 text-foreground h-12 focus:border-gold/50 transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 ml-1">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="flex h-12 w-full rounded-md border border-white/10 bg-midnight/40 px-3 py-2 text-sm text-foreground focus:ring-2 focus:ring-gold/20 outline-none focus:border-gold/50 transition-all"
                  >
                    <option value="" className="bg-midnight">Select Service</option>
                    <option value="court-marriage" className="bg-midnight">Court Marriage</option>
                    <option value="online-nikah" className="bg-midnight">Online Nikah</option>
                    <option value="divorce" className="bg-midnight">Divorce / Khula</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-foreground/50 ml-1">Your Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="bg-midnight/40 border-white/10 text-foreground focus:border-gold/50 transition-all resize-none"
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-midnight font-bold py-7 rounded-2xl transition-all duration-300 shadow-lg shadow-gold/10 group"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <><Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}