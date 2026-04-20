'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, ChevronDown, Phone, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const serviceItems = [
    { path: '/services/karachi', label: 'Karachi' },
    { path: '/services/islamabad', label: 'Islamabad' },
    { path: '/services/lahore', label: 'Lahore' },
    { path: '/services/punjab', label: 'Punjab' },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gold/10 bg-black/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Court Marriage Pro Home">
          <div className="w-10 h-10 rounded-lg bg-gold/20 border border-gold/30 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
            <Scale className="w-5 h-5 text-gold" />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-bold text-white uppercase tracking-tight">
              Court <span className="text-gold ml-1">Marriage</span>
            </div>
            <div className="text-[10px] text-white font-medium -mt-1 tracking-[0.2em] uppercase">
              Professional
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-gold transition-colors text-white">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-gold transition-colors text-white" aria-haspopup="true">
              Services <ChevronDown className="w-4 h-4 text-gold" />
            </button>
            
            {/* Dropdown Menu - Pure Black Background */}
            <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gold/20 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,1)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="p-2 space-y-1">
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gold/10 hover:text-gold transition-colors text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors text-white">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gold transition-colors text-white">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gold hover:bg-gold/10"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-gold hover:bg-[#c5a037] text-black font-bold rounded-lg px-4 py-2 transition-all shadow-lg hover:shadow-gold/20"
            >
              <a href="tel:+923332316871" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +92 333 2316871
              </a>
            </Button>
          </div>

          <button 
            className="md:hidden text-gold p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Pure Black */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-b border-gold/10 p-4 space-y-4 animate-in slide-in-from-top">
          <Link href="/" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <div className="pl-4 border-l border-gold/20 space-y-3">
            <p className="text-gold text-[10px] font-bold uppercase tracking-widest">Our Services</p>
            {serviceItems.map(item => (
              <Link 
                key={item.path} 
                href={item.path} 
                className="block text-white font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/about" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block text-white font-semibold" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          
          <Button
            asChild
            className="bg-gold hover:bg-[#c5a037] text-black font-bold w-full mt-2"
          >
            <a href="tel:+923332316871">
              <Phone className="w-4 h-4 mr-2" /> Call Now
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}