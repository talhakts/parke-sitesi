"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/site.config'
import { trackPhoneCall } from '@/lib/analytics'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [districtsDropdown, setDistrictsDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceSublinks = [
    { name: "Tüm Hizmetler", href: "/#hizmetler" },
    { name: "Laminat Parke Döşeme", href: "/hizmetler/laminat-parke-doseme" },
    { name: "Süpürgelik Montajı", href: "/hizmetler/supurgelik-montaji" },
    { name: "Parke Tamiri ve Bakımı", href: "/hizmetler/parke-tamiri" },
    { name: "2026 İşçilik Fiyatları", href: "/parke-doseme-fiyatlari" },
  ]

  const districtSublinks = [
    { name: "Tüm Hizmet Bölgeleri", href: "/#bolgeler" },
    { name: "Pendik Parke Ustası", href: "/istanbul/pendik" },
    { name: "Kartal Parke Ustası", href: "/istanbul/kartal" },
    { name: "Maltepe Parke Ustası", href: "/istanbul/maltepe" },
    { name: "Kadıköy Parke Ustası", href: "/istanbul/kadikoy" },
    { name: "Tuzla Parke Ustası", href: "/istanbul/tuzla" },
    { name: "Ümraniye Parke Ustası", href: "/istanbul/umraniye" },
    { name: "Ataşehir Parke Ustası", href: "/istanbul/atasehir" },
    { name: "Gebze Parke Ustası", href: "/kocaeli/gebze" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-foreground drop-shadow-md">
              Parke<span className="text-primary">Ustam</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {/* Hizmetler Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary text-foreground drop-shadow-sm py-2"
                onClick={() => setServicesDropdown(!servicesDropdown)}
                aria-expanded={servicesDropdown}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-60 p-2 rounded-2xl glass border border-border/80 shadow-2xl space-y-1 bg-background/95 backdrop-blur-xl"
                  >
                    {serviceSublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Fiyat Rehberi */}
            <Link 
              href="/parke-doseme-fiyatlari"
              className="text-sm font-semibold transition-colors hover:text-primary text-foreground drop-shadow-sm"
            >
              Fiyat Rehberi
            </Link>

            {/* İlçeler Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDistrictsDropdown(true)}
              onMouseLeave={() => setDistrictsDropdown(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold transition-colors hover:text-primary text-foreground drop-shadow-sm py-2"
                onClick={() => setDistrictsDropdown(!districtsDropdown)}
                aria-expanded={districtsDropdown}
              >
                <span>İlçeler</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              <AnimatePresence>
                {districtsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 w-64 p-2 rounded-2xl glass border border-border/80 shadow-2xl space-y-1 bg-background/95 backdrop-blur-xl max-h-[80vh] overflow-y-auto"
                  >
                    {districtSublinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setDistrictsDropdown(false)}
                        className="block px-3 py-2 rounded-xl text-xs font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blog */}
            <Link 
              href="/blog"
              className="text-sm font-semibold transition-colors hover:text-primary text-foreground drop-shadow-sm"
            >
              Blog
            </Link>

            {/* İletişim */}
            <Link 
              href="/#iletisim"
              className="text-sm font-semibold transition-colors hover:text-primary text-foreground drop-shadow-sm"
            >
              İletişim
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="default" 
              size="lg" 
              className="rounded-full shadow-lg shadow-primary/20 gap-2 font-semibold" 
              asChild
              onClick={() => trackPhoneCall('navbar_cta')}
            >
              <a href={`tel:${siteConfig.phoneRaw}`}>
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneFormatted}</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl p-5 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-2">Hizmetlerimiz</span>
                {serviceSublinks.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-foreground font-medium p-2 text-sm hover:bg-muted rounded-xl transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-border/50">
                <Link
                  href="/parke-doseme-fiyatlari"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-foreground font-medium p-2 text-sm hover:bg-muted rounded-xl transition-colors"
                >
                  Fiyat Rehberi (2026 İşçilik)
                </Link>
              </div>

              <div className="space-y-1 pt-2 border-t border-border/50">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-2">Popüler İlçeler</span>
                <div className="grid grid-cols-2 gap-1">
                  {districtSublinks.slice(1, 7).map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-foreground/80 text-xs p-2 hover:bg-muted rounded-xl transition-colors"
                    >
                      {sub.name.replace(' Parke Ustası', '')}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-border/50 space-y-1">
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-foreground font-medium p-2 text-sm hover:bg-muted rounded-xl transition-colors"
                >
                  Blog ve Rehber
                </Link>
                <Link
                  href="/#iletisim"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-foreground font-medium p-2 text-sm hover:bg-muted rounded-xl transition-colors"
                >
                  İletişim & Keşif Formu
                </Link>
              </div>

              <Button 
                variant="default" 
                className="w-full mt-4 gap-2 rounded-full h-12" 
                size="lg" 
                asChild
                onClick={() => trackPhoneCall('navbar_mobile_cta')}
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="w-4 h-4" />
                  Hemen Ara: {siteConfig.phoneFormatted}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
