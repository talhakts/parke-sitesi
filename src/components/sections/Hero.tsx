"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight, ShieldCheck, Ruler } from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { trackPhoneCall, trackWhatsAppClick } from '@/lib/analytics'

interface HeroProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  imageAlt?: string;
  customH1?: React.ReactNode;
}

export function Hero({ 
  title = "İstanbul", 
  highlight = "Parke Döşeme", 
  subtitle = "ve Parke Ustası Hizmeti",
  description = "İstanbul Anadolu Yakası, Gebze ve tüm İstanbul genelinde uzman usta işçiliği ile laminat parke döşeme, süpürgelik montajı ve zemin tamiri çözümleri. Lazer metre ile yerinde ücretsiz keşif fırsatı.",
  imageAlt = "İstanbul parke ustası profesyonel parke döşeme hizmeti",
  customH1
}: HeroProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(
    'Merhaba Parke Ustam, laminat parke döşeme ve süpürgelik işçiliği hakkında keşif ve teklif almak istiyorum.'
  )}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.webp" 
          alt={imageAlt} 
          fill 
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="(max-width: 1200px) 100vw, 1920px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary font-medium text-sm">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Profesyonel Parke & Zemin İşçiliği</span>
            </div>
            
            {customH1 ? (
              customH1
            ) : (
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {title} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {highlight}
                </span> <br/>
                {subtitle}
              </h1>
            )}
            
            <p className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="rounded-full h-14 px-8 text-lg gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform" 
                asChild
                onClick={() => trackPhoneCall('hero')}
              >
                <a href={`tel:${siteConfig.phoneRaw}`}>
                  <Phone className="w-5 h-5" />
                  Hemen Ara
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-8 text-lg gap-2 glass border-primary/30 hover:bg-primary/10 hover:scale-105 transition-transform" 
                asChild
                onClick={() => trackWhatsAppClick('hero')}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  WhatsApp Danışma
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Content / CTA Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl rounded-full" />
            <div className="relative glass p-8 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                  <Ruler className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ücretsiz Keşif Fırsatı</h3>
              <p className="text-foreground/70">
                Evinize veya iş yerinize gelip alanınızı lazer metreyle ölçüyor, zemin düzlüğünü inceliyor ve şeffaf işçilik teklifinizi hazırlıyoruz.
              </p>
              <Button size="lg" className="w-full rounded-full h-14 text-lg" asChild>
                 <a href="#hesaplama">Tahmini Fiyat Hesapla</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
