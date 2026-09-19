'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ChevronDown, Phone, Scale, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const courtMarriageCities = [
    { path: '/services/cities-services/karachi', label: 'Karachi' },
    { path: '/services/cities-services/lahore', label: 'Lahore' },
    { path: '/services/cities-services/islamabad', label: 'Islamabad' },
    { path: '/services/cities-services/rawalpindi', label: 'Rawalpindi' },
    { path: '/services/cities-services/faisalabad', label: 'Faisalabad' },
  ]

  const onlineNikahCities = [
    { path: '/services/online-nikah/karachi', label: 'Karachi' },
    { path: '/services/online-nikah/lahore', label: 'Lahore' },
    { path: '/services/online-nikah/islamabad', label: 'Islamabad' },
    { path: '/services/online-nikah/rawalpindi', label: 'Rawalpindi' },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch & layout shift
  if (!mounted) return <div className="h-20 bg-black w-full fixed top-0 border-b border-gold/10" />;

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gold/10 bg-black/90 backdrop-blur-md" role="banner">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Court Marriage Pro - Home Page">
          <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
            <Scale className="w-5 h-5 text-gold" aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold text-white uppercase tracking-tight">
              Court <span className="text-gold ml-1">Marriage</span>
            </div>
            <div className="text-[10px] text-zinc-500 font-medium -mt-1 tracking-[0.2em] uppercase">
              Professional
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors text-white focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-md px-1">
            Home
          </Link>
          
          {/* Our Services Dropdown */}
          <div className="relative group/services">
            <button 
              className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors text-white py-8 focus-visible:ring-2 focus-visible:ring-gold outline-none" 
              aria-haspopup="true"
              aria-expanded="false"
              aria-label="Open Our Services menu"
            >
              Our Services <ChevronDown className="w-4 h-4 text-gold" aria-hidden="true" />
            </button>
            
            <div className="absolute top-[80px] left-0 w-64 bg-black border border-gold/20 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all z-50 p-2">
              <div className="space-y-1" role="menu">
                <p className="text-gold text-[10px] font-black uppercase tracking-widest mb-2 px-3 pt-2" role="presentation">Marriage Services</p>

                {/* Court Marriage -> Cities */}
                <div className="relative group/court">
                  <div className="flex items-center rounded-lg hover:bg-gold/10 transition-colors">
                    <Link
                      href="/services/court-marriage"
                      role="menuitem"
                      className="flex-1 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-gold focus-visible:text-gold outline-none"
                    >
                      Court Marriage
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gold mr-3" aria-hidden="true" />
                  </div>

                  <div className="absolute top-0 left-full ml-1 w-52 bg-black border border-gold/20 rounded-xl shadow-2xl opacity-0 invisible group-hover/court:opacity-100 group-hover/court:visible transition-all p-2" role="menu" aria-label="Court Marriage city pages">
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest px-3 py-2">Court Marriage Cities</p>
                    {courtMarriageCities.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        role="menuitem"
                        className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-gold/10 hover:text-gold transition-colors text-zinc-300 focus-visible:bg-gold/10 outline-none"
                      >
                        Court Marriage {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Online Nikah -> Cities */}
                <div className="relative group/online">
                  <div className="flex items-center rounded-lg hover:bg-gold/10 transition-colors">
                    <Link
                      href="/services/online-nikah"
                      role="menuitem"
                      className="flex-1 px-3 py-2 text-sm font-medium text-zinc-300 hover:text-gold focus-visible:text-gold outline-none"
                    >
                      Online Nikah
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gold mr-3" aria-hidden="true" />
                  </div>

                  <div className="absolute top-0 left-full ml-1 w-52 bg-black border border-gold/20 rounded-xl shadow-2xl opacity-0 invisible group-hover/online:opacity-100 group-hover/online:visible transition-all p-2" role="menu" aria-label="Online Nikah city pages">
                    <p className="text-gold text-[10px] font-black uppercase tracking-widest px-3 py-2">Online Nikah Cities</p>
                    {onlineNikahCities.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        role="menuitem"
                        className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-gold/10 hover:text-gold transition-colors text-zinc-300 focus-visible:bg-gold/10 outline-none"
                      >
                        Online Nikah {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/procedure" className="text-sm font-medium hover:text-gold transition-colors text-white focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-md px-1">
            Procedure
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors text-white focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-md px-1">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors text-white focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-md px-1">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gold hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" aria-hidden="true" /> : <Moon className="w-5 h-5" aria-hidden="true" />}
          </Button>

          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-gold hover:bg-[#c5a037] text-black font-bold rounded-lg px-4 py-2 transition-all shadow-lg hover:shadow-gold/20 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              <a href="tel:+923332316871" aria-label="Call us at +92 333 2316871">
                <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                +92 333 2316871
              </a>
            </Button>
          </div>

          <button 
            className="md:hidden text-gold p-2 focus-visible:ring-2 focus-visible:ring-gold outline-none rounded-lg" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-b border-gold/10 p-4 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto animate-in slide-in-from-top" aria-label="Mobile Navigation">
          <Link href="/" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
          
          <div className="pl-4 border-l border-gold/20 space-y-5">
            <p className="text-gold text-[10px] font-bold uppercase tracking-widest" role="presentation">Our Services</p>

            <div>
              <Link href="/services/court-marriage" className="flex items-center justify-between text-white font-semibold text-sm py-1" onClick={() => setIsMenuOpen(false)}>
                Court Marriage <ChevronRight className="w-4 h-4 text-gold" aria-hidden="true" />
              </Link>
              <div className="mt-2 pl-4 border-l border-gold/10 space-y-1">
                {courtMarriageCities.map(item => (
                  <Link key={item.path} href={item.path} className="block text-zinc-300 hover:text-gold font-medium text-sm py-1.5" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Link href="/services/online-nikah" className="flex items-center justify-between text-white font-semibold text-sm py-1" onClick={() => setIsMenuOpen(false)}>
                Online Nikah <ChevronRight className="w-4 h-4 text-gold" aria-hidden="true" />
              </Link>
              <div className="mt-2 pl-4 border-l border-gold/10 space-y-1">
                {onlineNikahCities.map(item => (
                  <Link key={item.path} href={item.path} className="block text-zinc-300 hover:text-gold font-medium text-sm py-1.5" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/procedure" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Procedure</Link>
          <Link href="/about" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
          <Button asChild className="bg-gold hover:bg-[#c5a037] text-black font-bold w-full mt-2">
            <a href="tel:+923332316871">
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" /> Call Now
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}