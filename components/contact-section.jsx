'use client'

import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from './ui/input'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // DATABASE CONNECTIVITY LOGIC (Fixed & Restored)
  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Aapka database endpoint
      const res = await axios.post('/api/contact', data)
      
      if (res.status === 200) {
        // WhatsApp notification logic
        const myWhatsAppNumber = "923332316871";
        const messageText = `*New Inquiry via Portal*%0A%0A` +
                            `*Name:* ${data.name}%0A` +
                            `*Phone:* ${data.phone}%0A` +
                            `*Email:* ${data.email}%0A` +
                            `*Service:* ${data.service}%0A` +
                            `*Details:* ${data.message}`;

        const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${messageText}`;
        
        // Form states update
        setIsSubmitted(true)
        reset()
        
        // Redirect to WhatsApp
        window.location.href = whatsappUrl;
        
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (err) {
      console.error("Submission Error:", err)
      alert("Database connection error! Check your API route.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-10">
              <h2 id="contact-heading" className="text-3xl font-bold text-white">Contact Our Legal Experts</h2>
              <p className="text-gray-300">
                Get in touch for a confidential consultation regarding your legal marriage requirements.
              </p>
          </div>

          <div className="glass-card-strong rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-8">Send Us a Message</h3>
            
            {isSubmitted ? (
              <div role="alert" className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-10 h-10 text-green-500 mb-6" aria-hidden="true" />
                <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-gray-300">Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-xs font-semibold uppercase text-gray-300 ml-1 cursor-pointer block">
                      Full Name
                    </label>
                    <Input
                      id="full-name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className={`bg-midnight/40 border-white/10 text-white h-12 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1" role="alert">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone-number" className="text-xs font-semibold uppercase text-gray-300 ml-1 cursor-pointer block">
                      Phone Number
                    </label>
                    <Input
                      id="phone-number"
                      type="tel"
                      {...register("phone", { required: "Phone is required" })}
                      placeholder="+92 3xx xxxxxxx"
                      className={`bg-midnight/40 border-white/10 text-white h-12 ${errors.phone ? 'border-red-500' : ''}`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1" role="alert">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email-address" className="text-xs font-semibold uppercase text-gray-300 ml-1 cursor-pointer block">Email Address</label>
                  <Input
                    id="email-address"
                    type="email"
                    {...register("email", { 
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    placeholder="example@mail.com"
                    className={`bg-midnight/40 border-white/10 text-white h-12 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1" role="alert">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="service-select" className="text-xs font-semibold uppercase text-gray-300 ml-1 cursor-pointer block">Service Required</label>
                  <div className="relative">
                    <select
                      id="service-select"
                      {...register("service", { required: "Please select a service" })}
                      className={`flex h-12 w-full rounded-md border border-white/10 bg-midnight/40 px-3 py-2 text-sm text-white focus:border-gold/50 outline-none appearance-none cursor-pointer transition-colors ${errors.service ? 'border-red-500' : ''}`}
                    >
                      <option value="" className="bg-slate-900 text-white">Select Service</option>
                      <option value="court-marriage" className="bg-slate-900 text-white">Court Marriage</option>
                      <option value="online-nikah" className="bg-slate-900 text-white">Online Nikah</option>
                      <option value="divorce" className="bg-slate-900 text-white">Divorce / Khula</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/50" aria-hidden="true">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {errors.service && <p className="text-red-500 text-xs mt-1" role="alert">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message-box" className="text-xs font-semibold uppercase text-gray-300 ml-1 cursor-pointer block">Your Message</label>
                  <Textarea
                    id="message-box"
                    {...register("message", { required: "Message cannot be empty", minLength: { value: 10, message: "Too short!" } })}
                    placeholder="Tell us about your requirements..."
                    className={`bg-midnight/40 border-white/10 text-white resize-none ${errors.message ? 'border-red-500' : ''}`}
                    rows={4}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1" role="alert">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-[#c5a037] text-midnight font-bold py-7 rounded-2xl shadow-lg shadow-gold/10"
                >
                  {isSubmitting ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" aria-hidden="true" /> Processing...</> : <><Send className="w-5 h-5 mr-2" aria-hidden="true" /> Send Message</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}